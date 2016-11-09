import React from 'react';
import { withRouter } from 'react-router';
import AddShopModal from './add_shop_modal';
import EditShopModal from './edit_shop_modal';
import { isEmpty } from 'lodash';

class ShopBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, shopId: null};
  }

  componentWillMount() {
    this._fetchShopList();
  }

  componentWillUnmount() {
    this.props.clearShopList();
  }

  renderAddShop() {
    if (this._isOwner()) {
      return (
        <li key={0} className={"board-card"}>
          <button className={"add-shop-btn"} onClick={this.toggleModal("AddModal")}>
            <div className={"add-shop-content"}>
              <span className={"add-shop-sign"}>+</span>
              <span className={"add-shop-text"}>Create Shop</span>
            </div>
          </button>
        </li>
      );
    }
  }

  renderShopButton(id) {
    if (this._isOwner()) {
      return <button className="shop-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
    } else {
      return <button className="shop-btn">Follow</button>;
    }
  }

  renderShopList() {
    let list = this.props.shops;
    let renderShopList = [this.renderAddShop()];
    if (!isEmpty(list)) {
      let shopItems = list.map((shop) => {
        const {id, shopname, img_url} = shop;
          return (
            <li className="board-card" key={id} onClick={this.enterShopPage(id)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="shop-picture" src={img_url} />
                </div>
                <div className="shop-detail">
                  <span className="shop-name">{shopname}</span>
                </div>
                <div className="shop-btn-field">{this.renderShopButton(id)}</div>
              </div>
            </li>
          );
        }
      );
      renderShopList = renderShopList.concat(shopItems);
    }
    return (
      <ul className="shop-list">
        {renderShopList}
      </ul>
    );
  }

  toggleModal(field, id) {
    return e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.state.openModal) {
        this.setState({modalType: null, openModal: false, shopId: null});
      } else {
        this.setState({modalType: field, openModal: true, shopId: id});
      }
    };
  }

  enterShopPage(shopId) {
    return ()=> {
      this.props.router.push(`/shop/${shopId}`);
    };
  }

  _isOwner() {
    if (this.props.currentUser) {
      return this.props.params.username === this.props.currentUser.username;
    }
    return false;
  }

  _fetchShopList() {
    let username = this.props.params.username;
    if (username) {
      this.props.fetchShopListByUser(username);
    }
  }

   render() {
     return (
       <div className={"shop-board-wrapper"}>
         <div className={"shop-board"}>
           {this.renderShopList()}
         </div>
         <AddShopModal isOpen={this.state.openModal && this.state.modalType == "AddModal"} modalType={this.state.modalType} toggleModal={this.toggleModal}/>
         <EditShopModal isOpen={this.state.openModal && this.state.modalType == "EditModal"} modalType={this.state.modalType} toggleModal={this.toggleModal} shopId={this.state.shopId}/>
       </div>
     );
   }
 }

export default withRouter(ShopBoard);
