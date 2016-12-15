import { FETCH_PRODUCT_LIST_BY_SEARCH, RECEIVE_PRODUCT_LIST, CLEAR_PRODUCT_LIST, RECEIVE_MORE_PRODUCTS, RECEIVE_ERRORS, APPEND_PRODUCT, RENEW_PRODUCT, REMOVE_PRODUCT, REMOVE_PRODUCT_FROM_PINS, CLEAR_PRODUCT_LIST_MESSAGE } from '../actions/product_list_actions';
import { merge, isEmpty } from 'lodash';

const _nullProductList = {
  products: {},
  msg: [],
  errors: []
};

const ProductListReducer = (state = _nullProductList, action ) => {
  Object.freeze(state);
  let newState;
  let productId;
  switch(action.type) {
    case FETCH_PRODUCT_LIST_BY_SEARCH:
      newState = merge({}, state, {msg: ["SHOW_LOAD_PRODUCTS"]});
      return newState;
    case RECEIVE_PRODUCT_LIST:
      newState = merge({}, _nullProductList, {products: action.products});
      return newState;
    case RECEIVE_MORE_PRODUCTS:
      newState = merge({}, state, {products: action.products});
      newState.msg = ["HIDE_LOAD_PRODUCTS"];
      if (isEmpty(newState.products)) {
        newState.msg.push("NO_PRODUCTS");
      }
      return newState;
    case CLEAR_PRODUCT_LIST:
      return _nullProductList;
    case APPEND_PRODUCT:
      newState = merge({}, state);
      productId = action.product.id;
      newState.products[productId] = action.product;
      return newState;
    case RENEW_PRODUCT:
      newState = merge({}, state);
      productId = action.product.id;
      newState.products[productId] = action.product;
      return newState;
    case REMOVE_PRODUCT:
      newState = merge({}, state);
      productId = action.product.id;
      delete newState.products[productId];
      return newState;
    case REMOVE_PRODUCT_FROM_PINS:
      newState = merge({}, state);
      let pinId = action.pin.id;
      delete newState.products[pinId];
      return newState;
    case CLEAR_PRODUCT_LIST_MESSAGE:
      newState = merge({}, state);
      newState.msg = [];
      return newState;
    default:
      return state;
  }
};

export default ProductListReducer;
