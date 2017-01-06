import React from 'react';
import { withRouter } from 'react-router';
import { isEmpty } from 'lodash';
import ShowProductContainer from './show_product_container';
import Modal from '../modal/modal';
import Map from '../map/map';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.backToSearch = this.backToSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {openModal: false, modalType: null, showPin: false, productId: null};
  }

  componentWillMount() {
    const {requestType, params, fetchProductListByTrip} = this.props;
    if (requestType === "BY_TRIP") {
      fetchProductListByTrip(params.tripId);
    }
  }

  componentWillUpdate(nextProps) {
    const {requestType, fetchProductListByTrip, params} = this.props;
    const {tripId} = nextProps.params;
    if (requestType === "BY_TRIP" && tripId !== params.tripId) {
      fetchProductListByTrip(tripId);
    }
  }

  componentWillUnmount() {
    this.props.clearProductList();
  }

  renderProductList() {
    const {products, requestType, params} = this.props;
    if (!isEmpty(products)) {
      const productList = products.map((product, idx) => {
        const {id, productname, price, img_url} = product;
        return (
          <li className="product-item" key={idx} onClick={this.toggleModal("ShowModal", id)} id={`product-item-${id}`}>
            <div className="content-frame">
              <div className="picture-frame">
                <img className="product-picture" src={img_url} />
              </div>
              <div className="product-name">
                {productname}
              </div>
              <button className="product-remove-btn" onClick={this.handleUnpin(params.tripId, id)}>Remove</button>
            </div>
          </li>
        );
      });

      // <div className="product-price">
      //   <span className="dollar-sign">$</span>
      //   <span className="price-amount">{Math.round(price)}</span>
      // </div>
      return (
        <ul className="product-table">
          {productList}
        </ul>
      );
    }
  }

  renderEmptyList() {
    const {requestType, emptyProductList, products} = this.props;
    if (isEmpty(products)) {
      return (
        <div className="empty-trip">
          <span className="empty-trip-text">{"Your shopping trip is empty now. Why don't you go do some shopping?"}</span>
          <br />
          <button className="empty-trip-btn" onClick={this.backToSearch}>Shop Now!</button>
          <br />
          <img className="empty-trip-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481839462/assets/4645.jpg" />
        </div>
      );
    }
  }

  backToSearch(e) {
    e.preventDefault();
    this.props.router.push("/");
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

  _isOwner() {
    const { currentUser, trip } = this.props;
    if (currentUser && !isEmpty(trip.trip)) {
      return trip.trip.user_id === currentUser.id;
    }
    return false;
  }

  handleUnpin(tripId, productId) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      const {unpinItemFromTable} = this.props;
      unpinItemFromTable(tripId, productId);
    };
  }

  backToSearch(e) {
    e.preventDefault();
    this.props.router.push("/");
  }

  renderEmptyList() {
    const { products } = this.props;
    if (products.length === 0 || products.length === undefined) {
      return (
        <div className="empty-trip">
          <span className="empty-trip-text">{"Your shopping trip is empty now. Why don't you go do some shopping?"}</span>
          <br />
          <button className="empty-trip-btn" onClick={this.backToSearch}>Shop Now!</button>
          <br />
          <img className="empty-trip-img" src="https://res.cloudinary.com/dmvxkwwde/image/upload/v1481839462/assets/4645.jpg" />
        </div>
      );
    }
  }

  render() {
    const {openModal, modalType, showPin, productId} = this.state;
    return (
      <div className="product-table-wrapper">
        { this.renderProductList() }
        { this.renderEmptyList() }
        <Modal isOpen={openModal} modalName="show-product" closeModal={this.toggleModal(null)}>
          <ShowProductContainer modalType={modalType} showPin={showPin} togglePin={this.togglePin} toggleModal={this.toggleModal} productId={productId} tripOwner={this._isOwner()}/>
        </Modal>
      </div>
    );
  }
}

export default withRouter(ProductTable);
