import { CREATE_SHOP, READ_SHOP, UPDATE_SHOP, DELETE_SHOP, READ_SHOP_TO_UPDATE, FOLLOW_SHOP, UNFOLLOW_SHOP, receiveShop, receiveNewShop, receiveErrors, receiveShopToUpdate } from '../actions/shop_actions';
import { renewShop, removeShop } from '../actions/shop_list_actions';
import { createShopAJAX, readShopAJAX, updateShopAJAX, deleteShopAJAX, followShopAJAX, unfollowShopAJAX } from '../utils/shop_api_utils';
import { updateShopCount } from '../actions/profile_actions';

const ShopMiddleware = ({getState, dispatch}) => next => action => {

  const createShopCB = (shop) => {dispatch(receiveNewShop(shop));};
  const readShopCB = (shop) => {dispatch(receiveShop(shop));};
  const renewShopCB = (shop) => {
    dispatch(renewShop(shop));
    dispatch(receiveNewShop(shop));
  };
  const deleteShopCB = (shop) => {
    dispatch(removeShop(shop));
    dispatch(receiveNewShop(shop));
    dispatch(updateShopCount(-1));
  };
  const readShopToUpdateCB = (shop) => {dispatch(receiveShopToUpdate(shop));};
  const errorCB = (err) => {dispatch(receiveErrors(err.responseJSON));};

  switch(action.type) {
    case CREATE_SHOP:
      createShopAJAX(action.shop, createShopCB, errorCB);
      return next(action);
    case READ_SHOP:
      readShopAJAX(action.id, readShopCB, errorCB);
      return next(action);
    case UPDATE_SHOP:
      updateShopAJAX(action.shop, renewShopCB, errorCB);
      return next(action);
    case DELETE_SHOP:
      deleteShopAJAX(action.id, deleteShopCB, errorCB);
      return next(action);
    case READ_SHOP_TO_UPDATE:
      readShopAJAX(action.id, readShopToUpdateCB, errorCB);
      return next(action);
    case FOLLOW_SHOP:
      followShopAJAX(action.id, readShopCB, errorCB);
      return next(action);
    case UNFOLLOW_SHOP:
      unfollowShopAJAX(action.id, readShopCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};


export default ShopMiddleware;
