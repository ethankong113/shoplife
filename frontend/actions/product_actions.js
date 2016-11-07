export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const READ_PRODUCT = "READ_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_LIST = "RECEIVE_PRODUCT_LIST";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createProduct = product => ({
  type: CREATE_PRODUCT,
  product
});

export const readProduct = id => ({
  type: READ_PRODUCT,
  id
});

export const updateProduct = product => ({
  type: UPDATE_PRODUCT,
  product
});

export const deleteProduct = id => ({
  type: DELETE_PRODUCT,
  id
});

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const receiveProductList = products => ({
  type: RECEIVE_PRODUCT_LIST,
  products
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  product
});

export const receiveErrors = errors => ({
  type: RECEIVE_PRODUCT,
  errors
});
