import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import EditProductContainer from './edit_product_container';
import AddProductContainer from './add_product_container';
import ShowProductContainer from './show_product_container';
import Modal from '../modal/modal';

class ProductBoard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.togglePin = this.togglePin.bind(this);
    this.removeLoadingSign = this.removeLoadingSign.bind(this);
    this.state = {openModal: false, modalType: null, showPin: false, productId: null, loaded: 0};
  }

  componentWillMount() {
    this.fetchProductList();
  }

  fetchProductList() {
    const {props} = this;
    const { shopId, tripId, username } = props.params;
    switch (props.requestType) {
      case "BY_SHOP":
        props.fetchProductListByShop(shopId);
        break;
      case "BY_TRIP":
        props.fetchProductListByTrip(tripId);
        break;
      case "BY_PIN_BOARD":
        props.fetchProductListByProfile(username);
        break;
      default:
        break;
    }
  }

  componentWillUpdate(nextProps) {
    const {query, requestType, fetchProductListByTrip, params} = this.props;
    const {tripId} = nextProps.params;
    if (query !== nextProps.query) {
      this.setState({loaded: 0});
    } else if (requestType === "BY_TRIP" && tripId !== params.tripId) {
      fetchProductListByTrip(tripId);
    }
  }

  componentDidUpdate(){
    this.adjustPositions();
    this.adjustRow();
    $(window).on('resize', (e)=>{
      this.adjustPositions();
      this.adjustRow();
    });
  }

  componentWillUnmount() {
    this.props.clearProductList();
    $(window).off('resize');
  }

  adjustPositions() {
    const {requestType} = this.props;
    let {loaded} = this.state;
    if (this._isOwner() && requestType === "BY_SHOP") {
      loaded += 1;
    }
    let len = $('.board-card').length;
    if (loaded === len) {
      let cards = [];
      for (let i = 0; i < len; i++) {
        cards.push($($('.board-card')[i]).height());
      }
      let listWidth = $('.product-list').width();
      let factor = Math.floor(listWidth / 286);
      for (let i = 0; i < cards.length; i++) {
        let row = Math.floor(i / factor);
        let pos = i % factor;
        let offset = 0;
        if (row > 0) {
          let prevRow = row - 1;
          let aboveIndex = prevRow * factor + pos;
          let height = $($('.board-card')[aboveIndex]).height();
          let posY = $($('.board-card')[aboveIndex]).offset().top;
          $($('.board-card')[i]).offset({top: height + 20 + posY + 20});
        } else if (row === 0 && i !== 0) {
          let posY = $($('.board-card')[0]).offset().top;
          $($('.board-card')[i]).offset({top: posY});
        }
      }
    }
  }

  adjustRow() {
    let width = $(window).width() * 0.95;
    if (width <= 572) {
      $('.product-list').width(286);
    } else if (width > 572 && width <= 858) {
      $('.product-list').width(572);
    } else if (width > 858 && width <= 1144) {
      $('.product-list').width(858);
    } else if (width > 1145 && width <= 1429) {
      $('.product-list').width(1145);
    } else if (width > 1430) {
      $('.product-list').width(1430);
    }
  }

  _renderAddProduct() {
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

  _renderProductButton(id, tripId = null) {
    const { requestType, currentUser, params, router } = this.props;
    const section = router.location.pathname.split("/")[1];
    if (currentUser) {
      if (this._isOwner() && requestType === "BY_SHOP") {
        return <button className="product-btn" onClick={this.toggleModal("EditModal", id)}>Edit</button>;
      } else if (this._isOwner() && requestType === "BY_TRIP") {
        return <button className="product-btn" onClick={this.handleUnpin(params.tripId, id, requestType)}>Remove</button>;
      } else if (section !== "profile" || (!this._isProfileOwner() && requestType === "BY_PIN_BOARD")){
        return <button className="product-btn" onClick={this.toggleModal("ShowModal", id, true)}>Pin</button>;
      } else if (this._isProfileOwner() && requestType === "BY_PIN_BOARD") {
        return <button className="product-btn" onClick={this.handleUnpin(tripId, id, requestType)}>Remove</button>;
      }
    }
  }

  removeLoadingSign(id) {
    $(`.loading-sign-${id}`).css('display', 'none');
    const {loaded} = this.state;
    this.setState({loaded: loaded + 1});
  }

  renderProductList() {
    let list = this.props.products;
    const {requestType} = this.props;
    let renderProductList = [];
    if (this._isOwner() && requestType === "BY_SHOP") {
      renderProductList.push(this._renderAddProduct());
    }
    if (!isEmpty(list)) {
      let productItems = list.map((product, idx) => {
        const {id, productname, price, img_url, trip_id} = product;
          return (
            <li className="board-card" key={idx + 1} onClick={this.toggleModal("ShowModal", id, false)}>
              <div className="card-frame">
                <div className="picture-frame">
                  <div className={`loading-sign loading-sign-${idx+1}`}>
                    <img className="loading-sign-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481663999/assets/shopping_cart_loading.gif" />
                  </div>
                  <img className="product-picture" src={img_url}
                    onLoad={()=>{this.removeLoadingSign(idx+1);}} />
                  <div className="product-btn-field">{this._renderProductButton(id, trip_id)}</div>
                </div>
                <div className="product-detail">
                  <span className="product-name">{productname}</span>
                  <span className={`product-price price-color-${this._priceTag(price)}`}>${Math.round(price)}</span>
                </div>
              </div>
            </li>
          );
        }
      );
      renderProductList = renderProductList.concat(productItems);
    }
    // const itemCount = renderProductList.length < 4 ? renderProductList.length : 4;
    // return (
    //   <ul className={`product-list-${itemCount}`}>
    //     {renderProductList}
    //   </ul>
    // );
    return (
      <ul className={"product-list"}>
        {renderProductList}
      </ul>
    );
  }

  _priceTag(price) {
    if (price < 100){
      return "green";
    }
    else if (price >= 100 && price < 500){
      return "blue";
    }
    else if (price >= 500 && price < 1000){
      return "orange";
    }
    else if (price >= 1000){
      return "red";
    }
  }

  renderEmptyList() {
    const {requestType, emptyProductList} = this.props;
    if (requestType === "BY_SEARCH" && emptyProductList) {
      return (
        <div className="empty-product-list">
          <span>{"Oooops... we cannot find any results for you."}</span>
          <br />
          <img src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481672546/empty_bag_yy872c.gif" />
        </div>
      );
    }
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

  handleUnpin(tripId, productId, requestType) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      const {unpinItemFromBoard, unpinItemFromPins} = this.props;
      switch (requestType) {
        case "BY_TRIP":
          unpinItemFromBoard(tripId, productId);
          break;
        case "BY_PIN_BOARD":
          unpinItemFromPins(tripId, productId);
          break;
        default:
          break;
      }
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

  _isProfileOwner() {
    const {currentUser, params} = this.props;
    return currentUser.username === params.username;
  }

  isModalOpen(type) {
    const {openModal, modalType} = this.state;
    return openModal && modalType === type;
  }

   render() {
     const {modalType, showPin, productId} = this.state;
     return (
       <div className="product-board-wrapper">
         <div className="product-board">
           { this.renderProductList() }
           { this.renderEmptyList() }
         </div>
         <Modal isOpen={this.isModalOpen("AddModal")} modalName="add-product" closeModal={this.toggleModal(null)}>
           <AddProductContainer modalType={modalType} toggleModal={this.toggleModal}/>
         </Modal>
         <Modal isOpen={this.isModalOpen("EditModal")} modalName="edit-product" closeModal={this.toggleModal(null)}>
           <EditProductContainer modalType={modalType} toggleModal={this.toggleModal} productId={productId}/>
         </Modal>
         <Modal isOpen={this.isModalOpen("ShowModal")} modalName="show-product" closeModal={this.toggleModal(null)}>
           <ShowProductContainer modalType={modalType} showPin={showPin} togglePin={this.togglePin} toggleModal={this.toggleModal} productId={productId} tripOwner={this._isOwner()}/>
         </Modal>
       </div>
     );
   }
 }

 export default withRouter(ProductBoard);
