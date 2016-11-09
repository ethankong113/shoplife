export const CREATE_SHOP = "CREATE_SHOP";
export const READ_SHOP = "READ_SHOP";
export const UPDATE_SHOP = "UPDATE_SHOP";
export const DELETE_SHOP = "DELETE_SHOP";
export const READ_SHOP_TO_UPDATE = "READ_SHOP_TO_UPDATE";
export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_NEW_SHOP = "RECEIVE_NEW_SHOP";
export const RECEIVE_SHOP_TO_UPDATE = "RECEIVE_SHOP_TO_UPDATE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SHOP = "CLEAR_SHOP";
export const CLEAR_SHOP_MESSAGE = "CLEAR_SHOP_MESSAGE";

export const createShop = (shop) => ({
  type: CREATE_SHOP,
  shop
});

export const readShop = (id) => ({
  type: READ_SHOP,
  id
});

export const readShopToUpdate = (id) => ({
  type: READ_SHOP_TO_UPDATE,
  id
});

export const updateShop = shop => ({
  type: UPDATE_SHOP,
  shop
});

export const deleteShop = id => ({
  type: DELETE_SHOP,
  id
});

export const receiveShop = shop => ({
  type: RECEIVE_SHOP,
  shop
});

export const receiveShopToUpdate = shop => ({
  type: RECEIVE_SHOP_TO_UPDATE,
  shop
});

export const receiveNewShop = shop => ({
  type: RECEIVE_NEW_SHOP,
  shop
});

export const receiveErrors = errors => ({
  type: RECEIVE_SHOP,
  errors
});

export const clearShop = () => ({
  type: CLEAR_SHOP
});

export const clearShopMessage = () => ({
  type: CLEAR_SHOP_MESSAGE
});
