export const FETCH_PRODUCT_LIST_BY_SHOP = "FETCH_PRODUCT_LIST_BY_SHOP";
export const FETCH_PRODUCT_LIST_BY_QUERY = "FETCH_PRODUCT_LIST_BY_QUERY";
export const FETCH_PRODUCT_LIST_BY_LOCATION = "FETCH_PRODUCT_LIST_BY_LOCATION";
export const RECEIVE_PRODUCT_LIST = "RECEIVE_PRODUCT_LIST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchProductListByShop = id => ({
  type: FETCH_PRODUCT_LIST_BY_SHOP,
  id
});

export const receiveProductList = products => ({
  type: RECEIVE_PRODUCT_LIST,
  products
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
