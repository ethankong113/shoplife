import { FETCH_SHOP_LIST_BY_USER, receiveShopList, receiveErrors } from '../actions/shop_list_actions';
import { fetchShopListByUserAJAX } from '../utils/shop_list_api_utils';

const ShopListMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = shops => {dispatch(receiveShopList(shops));};
  const errorCB = err => {dispatch(receiveErrors(err));};

  switch(action.type) {
    case FETCH_SHOP_LIST_BY_USER:
      fetchShopListByUserAJAX(action.username, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ShopListMiddleware;
