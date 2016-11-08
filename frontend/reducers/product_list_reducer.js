import { RECEIVE_PRODUCT_LIST, RECEIVE_ERRORS, APPEND_PRODUCT, RENEW_PRODUCT, REMOVE_PRODUCT } from '../actions/product_list_actions';
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
      newState = merge({}, state, {products: action.products, errors: []});
      return newState;
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
    default:
      return state;
  }
};

export default ProductListReducer;
