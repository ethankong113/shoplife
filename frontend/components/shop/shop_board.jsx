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

  _renderAddShop() {
    if (this._isProfileOwner()) {
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

  _renderShopButton(id) {
    if (this.props.currentUser) {
      if (this._isProfileOwner()) {
        return <button className="shop-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
      } else {
        return <button className="shop-btn">Follow</button>;
      }
    }
  }

  renderShopList() {
    let list = this.props.shops;
    let renderShopList = [this._renderAddShop()];
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
                <div className="shop-btn-field">{this._renderShopButton(id)}</div>
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
    if (this.props.currentUser) {
      return id === this.props.currentUser.id;
    }
    return false;
  }

  _fetchShopList() {
    const {params, fetchShopListByUser} = this.props;
    let username = params.username;
    if (username) {
      fetchShopListByUser(username);
    }
  }

   render() {
     const {openModal, modalType, shopId} = this.state;
     return (
       <div className={"shop-board-wrapper"}>
         <div className={"shop-board"}>
           {this.renderShopList()}
         </div>
         <AddShopModal isOpen={openModal && modalType == "AddModal"} modalType={modalType} toggleModal={this.toggleModal}/>
         <EditShopModal isOpen={openModal && modalType == "EditModal"} modalType={modalType} toggleModal={this.toggleModal} shopId={shopId}/>
       </div>
     );
   }
 }

export default withRouter(ShopBoard);
