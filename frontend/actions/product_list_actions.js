export const FETCH_PRODUCT_LIST_BY_SHOP = "FETCH_PRODUCT_LIST_BY_SHOP";
export const FETCH_PRODUCT_LIST_BY_TRIP = "FETCH_PRODUCT_LIST_BY_TRIP";
export const FETCH_PRODUCT_LIST_BY_PROFILE = "FETCH_PRODUCT_LIST_BY_PROFILE";
export const FETCH_PRODUCT_LIST_BY_SEARCH = "FETCH_PRODUCT_LIST_BY_SEARCH";
export const FETCH_PRODUCT_LIST_BY_LOCATION = "FETCH_PRODUCT_LIST_BY_LOCATION";
export const RECEIVE_PRODUCT_LIST = "RECEIVE_PRODUCT_LIST";
export const CLEAR_PRODUCT_LIST = "CLEAR_PRODUCT_LIST";
export const APPEND_PRODUCT = "APPEND_PRODUCT";
export const RENEW_PRODUCT = "RENEW_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchProductListByShop = id => ({
  type: FETCH_PRODUCT_LIST_BY_SHOP,
  id
});

export const fetchProductListByTrip = id => ({
  type: FETCH_PRODUCT_LIST_BY_TRIP,
  id
});

export const fetchProductListByProfile = username => ({
  type: FETCH_PRODUCT_LIST_BY_PROFILE,
  username
});

export const fetchProductListBySearch = query => ({
  type: FETCH_PRODUCT_LIST_BY_SEARCH,
  query
});

export const receiveProductList = products => ({
  type: RECEIVE_PRODUCT_LIST,
  products
});

export const clearProductList = () => ({
  type: CLEAR_PRODUCT_LIST
});

export const appendProduct = product => ({
  type: APPEND_PRODUCT,
  product
});

export const renewProduct = product => ({
  type: RENEW_PRODUCT,
  product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
