import React from 'react';
import Modal from 'react-modal';
import { largeModal, extralargeModal } from '../../utils/modal_style';
import { connect } from 'react-redux';
import { readProduct, clearProduct } from '../../actions/product_actions';
import { fetchPinList, pinItem, unpinItem, clearPinList } from '../../actions/pin_actions';
import { isEmpty } from 'lodash';
import { getCurrentUser, getPinList } from '../../utils/selectors.js';

class ShowProductModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {createPin: false, tripname: "", date: ""};
    this.handlePin = this.handlePin.bind(this);
    this.toggleCreatePin = this.toggleCreatePin.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUpdate(nextProps) {
    let productId = nextProps.productId;
    if (productId !== null && nextProps.modalType === "ShowModal" && isEmpty(nextProps.product)) {
      nextProps.readProduct(productId);
    } else if (!isEmpty(nextProps.product) && this.props.modalType === "ShowModal" && nextProps.modalType === null) {
      nextProps.clearProduct();
      nextProps.clearPinList();
    }
    if (nextProps.showPin && nextProps.currentUser && !nextProps.pins) {
      nextProps.fetchPinList(nextProps.productId);
    }
  }

  renderProductTable() {
    if (!isEmpty(this.props.product)) {
      let {productname, description, img_url, price} = this.props.product;
      if (!img_url) {
        img_url = "http://www.bamfordwatchdepartment.com/wp-content/uploads/2015/06/APDualTime_Hero1.jpg";
      }
      const _productBtn = (showPin) => {
        if (this.props.currentUser) {
          if (showPin) {
              return (
                <button className="show-product-btn" onClick={this.props.closePin}>Close Pin Page</button>
              );
          } else {
            return (
              <button className="show-product-btn" onClick={this.props.openPin}>Shop This</button>
            );
          }
        }
      };
      return (
        <div className="show-product-table">
          <div className="show-product-img"><img src={ img_url } /></div>
          <div className="show-product-info">
            <div className="show-product-name">{ productname }</div>
            <div className="show-product-price">${ price }</div>
          </div>
          <div className="show-product-description">{ description }</div>
          { _productBtn(this.props.showPin) }
        </div>
      );
    }
  }

  renderPinTable() {
    const { showPin } = this.props;
    if (showPin) {
      return (
        <div className="pin-table">
          <div>
            <h2 className="pin-header">Choose Trip</h2>
            <div className="pin-list-wrapper">
              <ul className="pin-list">
                {  this._renderPinList() }
              </ul>
            </div>
          </div>
          <div className="pin-create-trip" onClick={this.toggleCreatePin}>
            { this._renderBtnSymbol() }
            { this._renderBtnText() }
          </div>
        </div>
      );
    }
  }

  _renderBtnSymbol() {
    const {createPin} = this.state;
    if (!createPin) {
      return <div className="create-btn-symbol">+</div>
    }
  }

  _renderBtnText() {
    const {createPin} = this.state;
    if (!createPin) {
      return <div className="create-btn-text">Create a Trip</div>
    } else {
      return <div className="create-btn-text">Back to Trips</div>
    }
  }

  _renderPinList() {
    const { showPin, pins } = this.props;
    const { createPin, tripname, date } = this.state;
    if (showPin && pins && !createPin) {
      let pinList = pins.map((pin) => {
        const { id, tripname, img_url, has_pin } = pin;
        const _itemBtn = (has_pin) => {
          if (has_pin) {
            return (<button className="item-btn-alt">Unpin</button>);
          } else {
            return (<button className="item-btn">Pin</button>);
          }
        };
        return (
          <li className="pin-item" key={id} onClick={this.handlePin(id, has_pin)}>
            <img className="item-img" src= { img_url } />
            <span className="item-name">{pin.tripname}</span>
            { _itemBtn(has_pin) }
          </li>
        );
      });
      return pinList;
    } else if (showPin && createPin) {
      return (
        <form>
          <label>Trip Name</label>
          <input type="text" name="tripname" value={tripname} onChange={this.update("tripname")}/>
          <label>Date</label>
          <input type="date" name="date" value={date} onChange={this.update("date")}/>
        </form>
      );
    }
  }

  handlePin(tripId, has_pin) {
    return e => {
      e.preventDefault();
      if (has_pin) {
        this.props.unpinItem(tripId, this.props.productId);
      } else {
        this.props.pinItem(tripId, this.props.productId);
      }
    };
  }

  toggleCreatePin(e) {
    const {createPin} = this.state;
    e.preventDefault();
    createPin ? this.setState({createPin: false}) : this.setState({createPin: true});
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    }
  }

  _modalSize() {
    return this.props.showPin ? extralargeModal() : largeModal();
  }

   render() {
     return (
       <Modal isOpen={this.props.isOpen} style={this._modalSize()} id="product-modal">
         <button className="close-form-btn" onClick={this.props.toggleModal("ShowModal")}>X</button>
         <div className="show-product">
           <div>{ this.renderProductTable() }</div>
           { this.renderPinTable() }
         </div>
       </Modal>
     );
   }
 }

 const mapStateToProps = (state) => ({
    shop_id: state.shop.shop.id,
    product: state.product.product,
    currentUser: getCurrentUser(state.session),
    pins: getPinList(state.pins)
  });

 const mapDispatchToProps = (dispatch) => ({
    readProduct: (id)=>{dispatch(readProduct(id));},
    clearProduct: (id)=>{dispatch(clearProduct(id));},
    fetchPinList: (id)=>{dispatch(fetchPinList(id));},
    pinItem: (tripId, productId)=>{dispatch(pinItem(tripId, productId));},
    unpinItem: (tripId, productId)=>{dispatch(unpinItem(tripId, productId));},
    clearPinList: ()=>{dispatch(clearPinList());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(ShowProductModal);
