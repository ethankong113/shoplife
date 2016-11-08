import { RECEIVE_SHOP_LIST, RECEIVE_ERRORS, APPEND_SHOP, RENEW_SHOP, REMOVE_SHOP } from '../actions/shop_list_actions';
import { merge } from 'lodash';

const _nullShopList = {
  shops: {},
  errors: []
};

const ShopListReducer = (state = _nullShopList, action ) => {
  Object.freeze(state);
  let newState;
  let shopId;
  switch(action.type) {
    case RECEIVE_SHOP_LIST:
      newState = merge({}, state, {shops: action.shops, errors: []});
      return newState;
    case APPEND_SHOP:
      newState = merge({}, state);
      shopId = action.shop.id;
      newState.shops[shopId] = action.shop;
      return newState;
    case RENEW_SHOP:
      newState = merge({}, state);
      shopId = action.shop.id;
      newState.shops[shopId] = action.shop;
      return newState;
    case REMOVE_SHOP:
      newState = merge({}, state);
      shopId = action.shop.id;
      delete newState.shops[shopId];
      return newState;
    default:
      return state;
  }
};

export default ShopListReducer;
