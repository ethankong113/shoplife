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
    this.state = {openModal: false, modalType: null, productId: null};
  }

  componentWillMount() {
    this._fetchProductList();
  }

  renderAddProduct() {
    if (this._isOwner()) {
      return (
        <li className={"board-card"} key={0}>
          <button className={"add-product-btn"} onClick={this.toggleModal("AddModal")}>
            <div className={"add-product-content"}>
              <span className={"add-product-sign"}>+</span>
              <span className={"add-product-text"}>Create Product</span>
            </div>
          </button>
        </li>
      );
    }
  }

  renderProductButton(id) {
    if (this._isOwner()) {
      return <button className="product-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
    } else {
      return <button className="product-btn">Pin</button>;
    }
  }

  renderProductList() {
    let list = this.props.products;
    let renderProductList = [this.renderAddProduct()];
    if (!isEmpty(list)) {
      let productItems = list.map((product) => {
        const {id, productname, price, img_url} = product;
          return (
            <li className="board-card" key={id} onClick={this.toggleModal("ShowModal", id)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="product-picture" src={img_url} />
                </div>
                <div className="product-detail">
                  <span className="product-name">{productname}</span>
                  <span className="product-price">{price}</span>
                </div>
                <div className="product-btn-field">{this.renderProductButton(id)}</div>
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

  toggleModal(field, id) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      if (this.state.openModal) {
        this.setState({modalType: null, openModal: false, productId: null});
      } else {
        this.setState({modalType: field, openModal: true, productId: id});
      }
    };
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this.props.shop.shop.owner_id === this.props.currentUser.id;
    }
    return false;
  }

  _fetchProductList() {
    let shop_id = this.props.params.shopId;
    this.props.fetchProductListByShop(shop_id);
  }

   render() {
     return (
       <div className="product-board-wrapper">
         <div className="product-board">
           { this.renderProductList() }
         </div>
         <AddProductModal isOpen={this.state.openModal && this.state.modalType=="AddModal"} modalType={this.state.modalType} toggleModal={this.toggleModal}/>
         <EditProductModal isOpen={this.state.openModal && this.state.modalType=="EditModal"} modalType={this.state.modalType} toggleModal={this.toggleModal} productId={this.state.productId}/>
         <ShowProductModal isOpen={this.state.openModal && this.state.modalType=="ShowModal"} modalType={this.state.modalType} toggleModal={this.toggleModal} productId={this.state.productId}/>
       </div>
     );
   }
 }

 export default withRouter(ProductBoard);
