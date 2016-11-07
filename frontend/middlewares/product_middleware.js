import { CREATE_PRODUCT, READ_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, receiveProduct, receiveProductList, removeProduct, receiveErrors } from '../actions/product_actions';
import { createProductAJAX, readProductAJAX, updateProductAJAX, deleteProductAJAX } from '../utils/product_api_utils';

export const ProductMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = product => {dispatch(receiveProduct(product));};
  const removeProductCB = product => {dispatch(removeProduct(product));};
  const errorCB = err => {dispatch(receiveErrors(err));};
  switch(action.type) {
    case CREATE_PRODUCT:
      createProductAJAX(action.product, successCB, errorCB);
      return next(action);
    case READ_PRODUCT:
      readProductAJAX(action.id, successCB, errorCB);
      return next(action);
    case UPDATE_PRODUCT:
      updateProductAJAX(action.product, successCB, errorCB);
      return next(action);
    case DELETE_PRODUCT:
      deleteProductAJAX(action.id, removeProductCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductMiddleware;
