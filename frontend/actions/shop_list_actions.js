export const FETCH_SHOP_LIST_BY_USER = "FETCH_SHOP_LIST_BY_USER";
export const FETCH_SHOP_LIST_BY_QUERY = "FETCH_SHOP_LIST_BY_QUERY";
export const FETCH_SHOP_LIST_BY_LOCATION = "FETCH_SHOP_LIST_BY_LOCATION";
export const FETCH_SHOP_LIST_BY_FOLLOWER = "FETCH_SHOP_LIST_BY_FOLLOWER";
export const RECEIVE_SHOP_LIST = "RECEIVE_SHOP_LIST";
export const CLEAR_SHOP_LIST = "CLEAR_SHOP_LIST";
export const APPEND_SHOP = "APPEND_SHOP";
export const RENEW_SHOP = "RENEW_SHOP";
export const REMOVE_SHOP = "REMOVE_SHOP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchShopListByUser = username => ({
  type: FETCH_SHOP_LIST_BY_USER,
  username
});

export const fetchShopListByFollower = profilename => ({
  type: FETCH_SHOP_LIST_BY_FOLLOWER,
  profilename
});

export const receiveShopList = shops => ({
  type: RECEIVE_SHOP_LIST,
  shops
});

export const clearShopList = () => ({
  type: CLEAR_SHOP_LIST
});

export const appendShop = shop => ({
  type: APPEND_SHOP,
  shop
});

export const renewShop = shop => ({
  type: RENEW_SHOP,
  shop
});

export const removeShop = shop => ({
  type: REMOVE_SHOP,
  shop
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
