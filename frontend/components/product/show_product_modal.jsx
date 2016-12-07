import React from 'react';
import { isEmpty } from 'lodash';
import PinTableContainer from '../pin/pin_table_container';
import { withRouter } from 'react-router';

class ShowProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.stopPropagation = this.stopPropagation.bind(this);
    this.visitShop =  this.visitShop.bind(this);
  }

  componentWillUpdate(nextProps) {
    const {currentUser, productId, modalType, product, readProduct, clearProduct, showPin, fetchPinList, clearPinList, pins} = nextProps;
    if (productId !== null && modalType === "ShowModal" && isEmpty(product)) {
      readProduct(productId);
    } else if (!isEmpty(product) && this.props.modalType === "ShowModal" && modalType === null) {
      clearProduct();
      clearPinList();
    }
    if (showPin && currentUser && !pins) {
      fetchPinList(productId);
    }
  }

  renderProductTable() {
    if (!isEmpty(this.props.product)) {
      let {productname, description, img_url, price} = this.props.product;
      if (!img_url) {
        img_url = "http://www.bamfordwatchdepartment.com/wp-content/uploads/2015/06/APDualTime_Hero1.jpg";
      }
      return (
        <div className="show-product-table">
          <div className="show-product-img"><img src={ img_url } /></div>
          <div className="show-product-info">
            <div className="show-product-name">{ productname }</div>
            <div className="show-product-price">${ price }</div>
          </div>
          <div className="show-product-description">{ description }</div>
          { this.renderShopInfo() }
          { this._togglePinTable(this.props.showPin) }
        </div>
      );
    }
  }

  renderShopInfo() {
    const { shop_img, shopname,  shop_id } = this.props.product;
    return (
      <div className="visit-shop">
        <div className="visit-shop-header">
          <div className="visit-shop-img-frame"><img src={shop_img}/></div>
          <div className="visit-shop-name">{shopname}</div>
        </div>
        <button className="visit-shop-btn" onClick={this.visitShop}>Visit</button>
      </div>
    );
  }

  visitShop(e) {
    e.preventDefault();
    const {router, product} = this.props;
    router.push(`/shop/${product.shop_id}`);
  }

  _togglePinTable(showPin) {
    const {currentUser, togglePin} = this.props;
    if (currentUser && !this.isOwner()) {
      if (showPin) {
        return (
          <button className="show-product-btn" onClick={togglePin(false)}>
            Close Pin Page
          </button>
        );
      } else {
        return (
          <button className="show-product-btn" onClick={togglePin(true)}>
            Pin This
          </button>
        );
      }
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  isOwner() {
    const {location, params, currentUser, tripOwner} = this.props;
    const pathArray = location.pathname.split("/");
    if (pathArray[1] === "trip") {
      return tripOwner;
    } else if (pathArray[3] === "pins") {
      return params.username === currentUser.username;
    }
    return false;
  }

   render() {
     const {toggleModal, showPin, productId} = this.props;
     return (
       <div className="show-product-modal" onClick={this.stopPropagation}>
         <button className="close-form-btn" onClick={toggleModal("ShowModal")}>X</button>
         <div className="show-product">
           { this.renderProductTable() }
           <PinTableContainer showPin={showPin} productId={productId} />
         </div>
       </div>
     );
   }
 }

 export default withRouter(ShowProductModal);
