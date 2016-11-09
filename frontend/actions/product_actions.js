export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const READ_PRODUCT = "READ_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_NEW_PRODUCT = "RECEIVE_NEW_PRODUCT";
export const CLEAR_PRODUCT = "CLEAR_PRODUCT";
export const CLEAR_PRODUCT_MESSAGE = "CLEAR_PRODUCT_MESSAGE";
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

export const receiveNewProduct = product => ({
  type: RECEIVE_NEW_PRODUCT,
  product
});

export const clearProduct = () => ({
  type: CLEAR_PRODUCT
});

export const clearProductMessage = () => ({
  type: CLEAR_PRODUCT_MESSAGE
});

export const receiveErrors = errors => ({
  type: RECEIVE_PRODUCT,
  errors
});
