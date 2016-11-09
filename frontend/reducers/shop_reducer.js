import { RECEIVE_SHOP, RECEIVE_NEW_SHOP, RECEIVE_SHOP_TO_UPDATE, CLEAR_SHOP, CLEAR_SHOP_MESSAGE, RECEIVE_ERRORS } from '../actions/shop_actions';
import { isEmpty, merge } from 'lodash';

const _nullShop = {
  shop: {},
  errors: [],
  msg: []
};

const ShopReducer = (state = _nullShop, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SHOP:
      newState = merge({}, state, {shop: action.shop});
      return newState;
    case RECEIVE_NEW_SHOP:
      newState = merge({}, state, {shop: action.shop, msg: ["CLOSE_SHOP_MODAL"]});
      return newState;
    case RECEIVE_SHOP_TO_UPDATE:
      newState = merge({}, state, {shop: action.shop, msg: ["SET_SHOP_FIELDS"]});
      return newState;
    case CLEAR_SHOP:
      return _nullShop;
    case CLEAR_SHOP_MESSAGE:
      newState = merge({}, state);
      newState.msg = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    default:
      return state;
  }
};

export default ShopReducer;
