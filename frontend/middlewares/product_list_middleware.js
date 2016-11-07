import { FETCH_PRODUCT_LIST_BY_SHOP, receiveProductList, receiveErrors } from '../actions/product_list_actions';
import { fetchProductListByShopAJAX } from '../utils/product_list_api_utils';

const ProductListMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = products => {dispatch(receiveProductList(products));};
  const errorCB = err => {dispatch(receiveErrors(err));};

  switch(action.type) {
    case FETCH_PRODUCT_LIST_BY_SHOP:
      fetchProductListByShopAJAX(action.id, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductListMiddleware;
