import React from 'react';
import { isEmpty } from 'lodash';

class EditProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productname: "", description: "", price: 0, img_url: "", id: 0};
  }

  componentWillUpdate(nextProps) {
    let productId = nextProps.productId;
    if (productId !== null && nextProps.modalType === "EditModal" && isEmpty(nextProps.product)) {
      nextProps.readProduct(productId);
    } else if (!isEmpty(nextProps.product) && nextProps.modalType === "EditModal" && this.state.productname == "") {
      this.setState(nextProps.product);
    } else if (nextProps.msg.includes("CLOSE_PRODUCT_MODAL")) {
      this.props.toggleModal('EditModal')();
      nextProps.clearProductMessage();
    } else if (!isEmpty(nextProps.product) && this.props.modalType === "EditModal" && nextProps.modalType === null) {
      this.setState({productname: "", description: "", price: 0, img_url: "", id: 0});
      nextProps.clearProduct();
    }
  }

  handleSubmit(type, props) {
    return e => {
      e.preventDefault();
      if (type === "edit") {
        props.updateProduct(this.state);
      } else if (type === "delete") {
        props.deleteProduct(props.product.id);
      }
    };
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  charLeft() {
    let len = this.state.description.length;
    if (len) {
      return ` (${140 - len} characters left)`;
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render() {
    const { productname, description, price, img_url } = this.state;
    return (
     <div className="edit-product-modal" onClick={this.stopPropagation}>
       <button className="close-form-btn" onClick={this.props.toggleModal('EditModal')}>X</button>
       <form method="post" className="product-form">
         <label className="product-label">Product Name</label><br />
         <input className="product-field" type="text" name="productname" onChange={this.update("productname")} value={productname}/><br />
         <label className="product-label">Description{this.charLeft()}</label><br />
         <textarea className="product-field product-textarea" name="description" onChange={this.update("description")} value={description}></textarea><br />
         <label className="product-label">Price</label><br />
         <div className="product-price">
           <span className="product-sign">$</span><input className="product-field" type="number" min="0" max="9999.99" name="price" onChange={this.update("price")} value={price}/><br />
         </div>
         <label className="product-label">Image Link</label><br />
         <input className="product-field" type="text" name="img_url" onChange={this.update("img_url")} value={img_url}/><br />
         <button className="product-btn" onClick={this.handleSubmit("edit", this.props)}>Edit Product</button>
         <button className="product-btn-alt" onClick={this.handleSubmit("delete", this.props)}>Delete Product</button>
       </form>
      </div>
    );
  }
}

 export default EditProductModal;
