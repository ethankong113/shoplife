import { FETCH_PRODUCT_LIST_BY_SHOP, FETCH_PRODUCT_LIST_BY_TRIP, FETCH_PRODUCT_LIST_BY_PROFILE, receiveProductList, receiveErrors } from '../actions/product_list_actions';
import { fetchProductListByShopAJAX, fetchProductListByTripAJAX, fetchProductListByProfileAJAX } from '../utils/product_list_api_utils';

const ProductListMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = products => {dispatch(receiveProductList(products));};
  const errorCB = err => {dispatch(receiveErrors(err));};

  switch(action.type) {
    case FETCH_PRODUCT_LIST_BY_SHOP:
      fetchProductListByShopAJAX(action.id, successCB, errorCB);
      return next(action);
    case FETCH_PRODUCT_LIST_BY_TRIP:
      fetchProductListByTripAJAX(action.id, successCB, errorCB);
      return next(action);
    case FETCH_PRODUCT_LIST_BY_PROFILE:
      fetchProductListByProfileAJAX(action.username, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductListMiddleware;
