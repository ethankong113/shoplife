import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import AddProductModal from './add_product_modal';
import EditProductModal from './edit_product_modal';
// import ShowProductModal from './show_product_modal';
import ShowProductContainer from './show_product_container';
import Modal from '../modal/modal';

class ProductBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.togglePin = this.togglePin.bind(this);
    this.state = {openModal: false, modalType: null, showPin: false, productId: null};
  }

  componentWillMount() {
    this.fetchProductList();
  }

  fetchProductList() {
    const { shopId, tripId, username } = this.props.params;
    switch (this.props.requestType) {
      case "BY_SHOP":
        this.props.fetchProductListByShop(shopId);
        break;
      case "BY_TRIP":
        this.props.fetchProductListByTrip(tripId);
        break;
      case "BY_PIN_BOARD":
        this.props.fetchProductListByProfile(username);
        break;
      default:
        break;
    }
  }

  componentWillUnmount() {
    this.props.clearProductList();
  }

  _renderAddProduct() {
    const btnText = this.props.requestType === "BY_SHOP" ? "Create Product" : "Pin Product";
    if (this._isOwner() && this.props.requestType === "BY_SHOP") {
      return (
        <li className={"board-card"} key={0}>
          <button className={"add-product-btn"} onClick={this.toggleModal("AddModal")}>
            <div className={"add-product-content"}>
              <span className={"add-product-sign"}>+</span>
              <span className={"add-product-text"}>{ btnText }</span>
            </div>
          </button>
        </li>
      );
    }
  }

  _renderProductButton(id) {
    const { requestType } = this.props;
    if (this.props.currentUser) {
      if (this._isOwner() && requestType === "BY_SHOP") {
        return <button className="product-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
      } else if (this._isOwner() && requestType === "BY_TRIP") {
        return <button className="product-btn" onClick={this.handleUnpin(this.props.params.tripId, id)}>Unpin</button>;
      } else {
        return <button className="product-btn" onClick={this.toggleModal("ShowModal", id, true)}>Shop</button>;
      }
    }
  }

  renderProductList() {
    let list = this.props.products;
    let renderProductList = [this._renderAddProduct()];
    if (!isEmpty(list)) {
      let productItems = list.map((product, idx) => {
        const {id, productname, price, img_url} = product;
          return (
            <li className="board-card" key={idx + 1} onClick={this.toggleModal("ShowModal", id, false)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="product-picture" src={img_url} />
                </div>
                <div className="product-detail">
                  <span className="product-name">{productname}</span>
                  <span className="product-price">${price}</span>
                </div>
                <div className="product-btn-field">{this._renderProductButton(id)}</div>
              </div>
            </li>
          );
        }
      );
      renderProductList = renderProductList.concat(productItems);
    }
    return (
      <ul className="product-list">
        {renderProductList}
      </ul>
    );
  }

  toggleModal(field, id, showPin = false) {
    return e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.state.openModal) {
        this.setState({modalType: null, openModal: false, productId: null, showPin: false});
      } else {
        this.setState({modalType: field, openModal: true, productId: id, showPin});
      }
    };
  }

  togglePin(showPin) {
    return e => {
      this.setState({showPin});
    };
  }

  handleUnpin(tripId, productId) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.unpinItemFromBoard(tripId, productId);
    };
  }

  _isOwner() {
    const { currentUser, shop, trip } = this.props;
    if (currentUser && !isEmpty(shop.shop)) {
      return shop.shop.owner_id === currentUser.id;
    } else if (currentUser && !isEmpty(trip.trip)) {
      return trip.trip.user_id === currentUser.id;
    }
    return false;
  }

   render() {
     const {openModal, modalType, showPin, productId} = this.state;
     return (
       <div className="product-board-wrapper">
         <div className="product-board">
           { this.renderProductList() }
         </div>
         <AddProductModal isOpen={openModal && modalType=="AddModal"} modalType={modalType} toggleModal={this.toggleModal}/>
         <EditProductModal isOpen={openModal && modalType=="EditModal"} modalType={modalType} toggleModal={this.toggleModal} productId={productId}/>
         <Modal isOpen={openModal && modalType=="ShowModal"} modalName="show-product" closeModal={this.toggleModal(null)}>
           <ShowProductContainer modalType={modalType} showPin={showPin} togglePin={this.togglePin} toggleModal={this.toggleModal} productId={productId}/>
         </Modal>
       </div>
     );
   }
 }

 export default withRouter(ProductBoard);
