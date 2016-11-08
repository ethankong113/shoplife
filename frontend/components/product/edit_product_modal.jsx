import React from 'react';
import Modal from 'react-modal';
import { largeModal } from '../../utils/modal_style';
import { connect } from 'react-redux';
import { readProduct, updateProduct, deleteProduct, clearProduct } from '../../actions/product_actions';
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
    }
    if (!isEmpty(nextProps.product) && nextProps.modalType === "EditModal" && this.state.productname == "") {
      this.setState(nextProps.product);
    } else if (!isEmpty(nextProps.product) && nextProps.modalType === null) {
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

   render() {
     const { productname, description, price, img_url } = this.state;
     return (
       <Modal isOpen={this.props.isOpen} style={largeModal()} id="product-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal('openEditModal')}>X</button>
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
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    shop_id: state.shopDetail.shop.id,
    product: state.product.product
  });

 const mapDispatchToProps = (dispatch) => ({
    updateProduct: (product)=>{dispatch(updateProduct(product));},
    readProduct: (id)=>{dispatch(readProduct(id));},
    deleteProduct: (id)=>{dispatch(deleteProduct(id));},
    clearProduct: ()=>{dispatch(clearProduct());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(EditProductModal);
