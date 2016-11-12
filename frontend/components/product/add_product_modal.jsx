import React from 'react';
import Modal from 'react-modal';
import { mediumModal } from '../../utils/modal_style';
import { connect } from 'react-redux';
import { createProduct, clearProduct, clearProductMessage } from '../../actions/product_actions';
import { isEmpty } from 'lodash';

class AddProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productname: "", description: "", price: 0, img_url: ""};
  }

  componentWillUpdate(nextProps) {
    if (nextProps.msg.includes("CLOSE_PRODUCT_MODAL")) {
      this.props.toggleModal('AddModal')();
      nextProps.clearProductMessage();
    } else if (!isEmpty(nextProps.product) && this.props.modalType === "AddModal" && nextProps.modalType === null) {
      this.setState({productname: "", description: "", price: 0, img_url: "", id: 0});
      nextProps.clearProduct();
    }
  }

  handleSubmit(props) {
    return e => {
      e.preventDefault();
      this.state.shop_id = props.shop_id;
      props.createProduct(this.state);
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
       <Modal isOpen={this.props.isOpen} style={mediumModal()} id="product-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal('AddModal')}>X</button>
         <form method="post" onSubmit={this.handleSubmit(this.props)} className="product-form">
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
           <button className="product-btn">Create Product</button>
         </form>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    shop_id: state.shop.shop.id,
    msg: state.product.msg,
    product: state.product.product
  });

 const mapDispatchToProps = (dispatch) => ({
    createProduct: (product)=>{dispatch(createProduct(product));},
    clearProduct: ()=>{dispatch(clearProduct());},
    clearProductMessage: ()=>{dispatch(clearProductMessage());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(AddProductModal);
