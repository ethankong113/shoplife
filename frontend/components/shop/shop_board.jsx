import React from 'react';
import { withRouter } from 'react-router';
import AddShopModal from './add_shop_modal';
import EditShopModal from './edit_shop_modal';
import { isEmpty } from 'lodash';
import Modal from '../modal/modal';

class ShopBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, shopId: null};
  }

  componentWillMount() {
    const {params, requestType, fetchShopListByUser, fetchShopListByFollower} = this.props;
    let username = params.username;
    if (requestType === "BY_FOLLOWER") {
      fetchShopListByFollower(username);
    } else {
      fetchShopListByUser(username);
    }
  }

  componentWillUnmount() {
    this.props.clearShopList();
  }

  _renderAddShop() {
    const {requestType} = this.props;
    if (this._isProfileOwner() && requestType !== "BY_FOLLOWER") {
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

  _renderShopButton(id, user_id) {
    if (this.props.currentUser) {
      if (this._isProfileOwner() && this._isShopOwner(user_id)) {
        return <button className="shop-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
      }
      // block following/unfollowing shops in shopboard until next update.
      // else if (!this._isProfileOwner() && this._isShopOwner(user_id)) {
      //   return <button className="shop-btn-static">Your Shop</button>;
      // } else {
      //   return <button className="shop-btn">Follow</button>;
      // }
    }
  }

  renderShopList() {
    let list = this.props.shops;
    let renderShopList = [this._renderAddShop()];
    if (!isEmpty(list)) {
      let shopItems = list.map((shop) => {
        const {id, shopname, img_url, owner_id} = shop;
          return (
            <li className="board-card" key={id} onClick={this.enterShopPage(id)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <img className="shop-picture" src={img_url} />
                </div>
                <div className="shop-detail">
                  <span className="shop-name">{shopname}</span>
                </div>
                <div className="shop-btn-field">{this._renderShopButton(id, owner_id)}</div>
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

  _isProfileOwner() {
    const { params, currentUser } = this.props;
    if (currentUser) {
      return params.username === currentUser.username;
    }
    return false;
  }

  _isShopOwner(id) {
    const {currentUser} = this.props;
    if (currentUser) {
      return id === currentUser.id;
    }
    return false;
  }

  isModalOpen(type) {
    const {openModal, modalType} = this.state;
    return openModal && modalType === type;
  }

   render() {
     const {openModal, modalType, shopId} = this.state;
     return (
       <div className={"shop-board-wrapper"}>
         <div className={"shop-board"}>
           {this.renderShopList()}
         </div>
         <Modal isOpen={this.isModalOpen("AddModal")} modalName="add-shop" closeModal={this.toggleModal(null)}>
           <AddShopModal modalType={modalType} toggleModal={this.toggleModal}/>
         </Modal>
         <Modal isOpen={this.isModalOpen("EditModal")} modalName="edit-shop" closeModal={this.toggleModal(null)}>
           <EditShopModal modalType={modalType} toggleModal={this.toggleModal} shopId={shopId}/>
         </Modal>
       </div>
     );
   }
 }

export default withRouter(ShopBoard);
