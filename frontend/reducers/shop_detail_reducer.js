import { RECEIVE_SHOP, REMOVE_SHOP, RECEIVE_ERRORS } from '../actions/shop_actions';
import { isEmpty, merge } from 'lodash';

const _nullShop = {
  shop: {},
  errors: []
};

const ShopDetailReducer = (state = _nullShop, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SHOP:
      newState = merge({}, state, {shop: action.shop});
      return newState;
    case REMOVE_SHOP:
      return _nullShop;
    case RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    default:
      return state;
  }
};

export default ShopDetailReducer;
