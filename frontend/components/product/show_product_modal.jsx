import React from 'react';
import { isEmpty } from 'lodash';
import PinTableContainer from '../pin/pin_table_container';

class ShowProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.stopPropagation = this.stopPropagation.bind(this);
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
          { this._togglePinTable(this.props.showPin) }
        </div>
      );
    }
  }

  _togglePinTable(showPin) {
    const {currentUser, togglePin} = this.props;
    if (currentUser) {
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

 export default ShowProductModal;
