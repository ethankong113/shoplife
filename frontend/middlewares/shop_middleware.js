import { CREATE_SHOP, READ_SHOP, UPDATE_SHOP, DELETE_SHOP, receiveShop, removeShop, receiveErrors } from '../actions/shop_actions';
import { createShopAJAX, readShopAJAX, updateShopAJAX, deleteShopAJAX } from '../utils/shop_api_utils';

const ShopMiddleware = ({getState, dispatch}) => next => action => {

  const createShopSuccessCB = (shop) => {dispatch(receiveShop(shop));};
  const readShopSuccessCB = (shop) => {dispatch(receiveShop(shop));};
  const updateShopSuccessCB = (shop) => {dispatch(receiveShop(shop));};
  const deleteShopSuccessCB = (shop) => {dispatch(removeShop(shop));};
  const errorCB = (err) => {dispatch(receiveErrors(err.responseJSON));};

  switch(action.type) {
    case CREATE_SHOP:
      createShopAJAX(action.shop, createShopSuccessCB, errorCB);
      return next(action);
    case READ_SHOP:
      readShopAJAX(action.id, readShopSuccessCB, errorCB);
      return next(action);
    case UPDATE_SHOP:
      updateShopAJAX(action.shop, updateShopSuccessCB, errorCB);
      return next(action);
    case DELETE_SHOP:
      deleteShopAJAX(action.id, deleteShopSuccessCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};


export default ShopMiddleware;
