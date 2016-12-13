import { RECEIVE_PRODUCT, RECEIVE_NEW_PRODUCT, RECEIVE_PRODUCT_LIST, REMOVE_PRODUCT, CLEAR_PRODUCT, CLEAR_PRODUCT_MESSAGE, RECEIVE_ERRORS } from '../actions/product_actions';
import { merge } from 'lodash';

const _nullProduct = {
  product: null,
  errors: [],
  msg: []
};

const ProductReducer = (state = _nullProduct, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PRODUCT:
      newState = merge({}, state, {product: action.product});
      return newState;
    case RECEIVE_NEW_PRODUCT:
      newState = merge({}, state, {product: action.product, msg: ["CLOSE_PRODUCT_MODAL"]});
      return newState;
    case CLEAR_PRODUCT:
      return _nullProduct;
    case CLEAR_PRODUCT_MESSAGE:
      newState = merge({}, state);
      newState.msg = [];
      return newState;
    default:
      return state;
  }
};

export default ProductReducer;
