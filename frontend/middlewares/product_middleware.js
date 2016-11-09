import { CREATE_PRODUCT, READ_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, receiveProduct, receiveNewProduct, receiveErrors } from '../actions/product_actions';
import { appendProduct, renewProduct, removeProduct } from '../actions/product_list_actions';
import { createProductAJAX, readProductAJAX, updateProductAJAX, deleteProductAJAX } from '../utils/product_api_utils';

export const ProductMiddleware = ({getState, dispatch}) => next => action => {
  const appendProductCB = product => {
    dispatch(appendProduct(product));
    dispatch(receiveNewProduct(product));
  };
  const receiveProductCB = product => {dispatch(receiveProduct(product));};
  const renewProductCB = product => {
    dispatch(renewProduct(product));
    dispatch(receiveNewProduct(product));
  };
  const removeProductCB = product => {
    dispatch(removeProduct(product));
    dispatch(receiveNewProduct(product));
  };
  const errorCB = err => {dispatch(receiveErrors(err));};
  switch(action.type) {
    case CREATE_PRODUCT:
      createProductAJAX(action.product, appendProductCB, errorCB);
      return next(action);
    case READ_PRODUCT:
      readProductAJAX(action.id, receiveProductCB, errorCB);
      return next(action);
    case UPDATE_PRODUCT:
      updateProductAJAX(action.product, renewProductCB, errorCB);
      return next(action);
    case DELETE_PRODUCT:
      deleteProductAJAX(action.id, removeProductCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProductMiddleware;
