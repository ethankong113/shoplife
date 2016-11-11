import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import AddProductModal from './add_product_modal';
import EditProductModal from './edit_product_modal';
import ShowProductModal from './show_product_modal';

class ProductBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, showPin: false, productId: null};
  }

  componentWillMount() {
    if (this.props.requestType == "BY_SHOP") {
      let shop_id = this.props.params.shopId;
      this.props.fetchProductListByShop(shop_id);
    }
  }

  componentWillUnmount() {
    this.props.clearProductList();
  }

  _renderAddProduct() {
    const btnText = this.props.requestType === "BY_SHOP" ? "Create Product" : "Pin Product";
    if (this._isOwner()) {
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
    if (this._isOwner()) {
      return <button className="product-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
    } else {
      return <button className="product-btn" onClick={this.toggleModal("ShowModal", id, true)}>Shop</button>;
    }
  }

  renderProductList() {
    let list = this.props.products;
    let renderProductList = [this._renderAddProduct()];
    if (!isEmpty(list)) {
      let productItems = list.map((product) => {
        const {id, productname, price, img_url} = product;
          return (
            <li className="board-card" key={id} onClick={this.toggleModal("ShowModal", id, false)}>
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
    }
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
     return (
       <div className="product-board-wrapper">
         <div className="product-board">
           { this.renderProductList() }
         </div>
         <AddProductModal isOpen={this.state.openModal && this.state.modalType=="AddModal"} modalType={this.state.modalType} toggleModal={this.toggleModal}/>
         <EditProductModal isOpen={this.state.openModal && this.state.modalType=="EditModal"} modalType={this.state.modalType} toggleModal={this.toggleModal} productId={this.state.productId}/>
         <ShowProductModal isOpen={this.state.openModal && this.state.modalType=="ShowModal"} modalType={this.state.modalType} showPin={this.state.showPin} openPin={this.togglePin(true)} closePin={this.togglePin(false)} toggleModal={this.toggleModal} productId={this.state.productId}/>
       </div>
     );
   }
 }

 export default withRouter(ProductBoard);
