import { RECEIVE_PRODUCT, RECEIVE_PRODUCT_LIST, REMOVE_PRODUCT, CLEAR_PRODUCT, RECEIVE_ERRORS } from '../actions/product_actions';
import { merge } from 'lodash';

const _nullProduct = {
  product: null,
  errors: []
};

const ProductReducer = (state = _nullProduct, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PRODUCT:
      newState = merge({}, state, {product: action.product, errors: []});
      return newState;
    case CLEAR_PRODUCT:
      return _nullProduct;
    default:
      return state;
  }
};

export default ProductReducer;
