import React from 'react';
import CreateProductModal from './create_product_modal';
import { withRouter } from 'react-router';

class ProductBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false};
  }

  componentDidMount() {
    this._fetchProductList();
  }

  renderAddProduct() {
    if (this._isOwner()) {
      return (
        <div className={"board-card"} onClick={this.openModal}>
          <button className={"add-product-btn"} onClick={this.toggleModal}>
            <div className={"add-product-content"}>
              <span className={"add-product-sign"}>+</span>
              <span className={"add-product-text"}>Create Product</span>
            </div>
          </button>
        </div>
      );
    }
  }

  toggleModal() {
    if (this.state.openModal) {
      this.setState({openModal: false});
    } else {
      this.setState({openModal: true});
    }
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this.props.shopDetail.shop.owner_id === this.props.currentUser.id;
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
           { this.renderAddProduct() }
         </div>
         <CreateProductModal isOpen={this.state.openModal} toggleModal={this.toggleModal}/>
       </div>
     );
   }
 }

 export default withRouter(ProductBoard);
