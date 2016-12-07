import { RECEIVE_PRODUCT_LIST, CLEAR_PRODUCT_LIST, RECEIVE_ERRORS, APPEND_PRODUCT, RENEW_PRODUCT, REMOVE_PRODUCT, REMOVE_PRODUCT_FROM_PINS } from '../actions/product_list_actions';
import { merge } from 'lodash';

const _nullProductList = {
  products: {},
  errors: []
};

const ProductListReducer = (state = _nullProductList, action ) => {
  Object.freeze(state);
  let newState;
  let productId;
  switch(action.type) {
    case RECEIVE_PRODUCT_LIST:
      return {products: action.products, errors: []};
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
    default:
      return state;
  }
};

export default ProductListReducer;
