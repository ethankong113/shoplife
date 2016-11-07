import { RECEIVE_PRODUCT_LIST, RECEIVE_ERRORS } from '../actions/product_list_actions';
import { merge } from 'lodash';

const _nullProductList = {
  products: {},
  errors: []
};

const ProductListReducer = (state = _nullProductList, action ) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PRODUCT_LIST:
      newState = merge({}, state, {products: action.products, errors: []});
      return newState;
    default:
      return state;
  }
};

export default ProductListReducer;
