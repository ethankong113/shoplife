import { FETCH_PRODUCT_LIST_BY_SHOP, FETCH_PRODUCT_LIST_BY_TRIP, FETCH_PRODUCT_LIST_BY_PROFILE, FETCH_PRODUCT_LIST_BY_SEARCH, receiveProductList, receiveMoreProducts, receiveErrors } from '../actions/product_list_actions';
import { fetchProductListByShopAJAX, fetchProductListByTripAJAX, fetchProductListByProfileAJAX, fetchProductListBySearchAJAX, fetchProductListByAllAJAX } from '../utils/product_list_api_utils';

const ProductListMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = products => {dispatch(receiveProductList(products));};
  const receiveMoreProductsCB = products => {dispatch(receiveMoreProducts(products));};
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
    case FETCH_PRODUCT_LIST_BY_SEARCH:
      const {query, limit, offset} = action;
      fetchProductListBySearchAJAX(query, limit, offset, receiveMoreProductsCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductListMiddleware;
