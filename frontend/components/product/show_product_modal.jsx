import React from 'react';
import Modal from 'react-modal';
import { largeModal } from '../../utils/modal_style';
import { connect } from 'react-redux';
import { readProduct, clearProduct } from '../../actions/product_actions';
import { isEmpty } from 'lodash';

class ShowProductModal extends React.Component {

  componentWillUpdate(nextProps) {
    let productId = nextProps.productId;
    if (productId !== null && nextProps.modalType === "ShowModal" && isEmpty(nextProps.product)) {
      nextProps.readProduct(productId);
    } else if (!isEmpty(nextProps.product) && nextProps.modalType === null) {
      nextProps.clearProduct();
    }
  }

  renderProductTable() {
    if (!isEmpty(this.props.product)) {
      let {productname, description, img_url, price} = this.props.product;
      if (!img_url) {
        img_url = "http://www.bamfordwatchdepartment.com/wp-content/uploads/2015/06/APDualTime_Hero1.jpg";
      }
      return (
        <div className="product-table">
          <div className="show-product-img"><img src={ img_url } /></div>
          <div className="show-product-info">
            <div className="show-product-name">{ productname }</div>
            <div className="show-product-price">${ price }</div>
          </div>
          <div className="show-product-description">{ description }</div>
        </div>
      );
    }
  }

   render() {
     return (
       <Modal isOpen={this.props.isOpen} style={largeModal()} id="product-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal('openShowModal')}>X</button>
         { this.renderProductTable() }
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    shop_id: state.shopDetail.shop.id,
    product: state.product.product
  });

 const mapDispatchToProps = (dispatch) => ({
    readProduct: (id)=>{dispatch(readProduct(id));},
    clearProduct: (id)=>{dispatch(clearProduct(id));}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(ShowProductModal);
