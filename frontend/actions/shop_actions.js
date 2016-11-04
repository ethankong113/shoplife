export const CREATE_SHOP = "CREATE_SHOP";
export const READ_SHOP = "READ_SHOP";
export const UPDATE_SHOP = "UPDATE_SHOP";
export const DELETE_SHOP = "DELETE_SHOP";
export const RECEIVE_SHOP = "RECEIVE_SHOP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_SHOP = "REMOVE_SHOP";

export const createShop = (shop) => ({
  type: CREATE_SHOP,
  shop
});

export const readShop = (id) => ({
  type: READ_SHOP,
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

export const removeShop = shop => ({
  type: REMOVE_SHOP,
  shop
});

export const receiveErrors = errors => ({
  type: RECEIVE_SHOP,
  errors
});
