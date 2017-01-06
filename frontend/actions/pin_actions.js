export const PIN_ITEM = "PIN_ITEM";
export const UNPIN_ITEM = "UNPIN_ITEM";
export const UNPIN_ITEM_FROM_BOARD = "UNPIN_ITEM_FROM_BOARD";
export const UNPIN_ITEM_FROM_PINS = "UNPIN_ITEM_FROM_PINS";
export const UNPIN_ITEM_FROM_TABLE = "UNPIN_ITEM_FROM_TABLE";
export const FETCH_PIN_LIST = "FETCH_PIN_LIST";
export const RECEIVE_PIN_LIST = "RECEIVE_PIN_LIST";
export const CLEAR_PIN_LIST = "CLEAR_PIN_LIST";
export const APPEND_PIN = "APPEND_PIN";

export const pinItem = (tripId, productId) => ({
  type: PIN_ITEM,
  tripId,
  productId
});

export const unpinItem = (tripId, productId) => ({
  type: UNPIN_ITEM,
  tripId,
  productId
});

export const unpinItemFromBoard = (tripId, productId) => ({
  type: UNPIN_ITEM_FROM_BOARD,
  tripId,
  productId
});

export const unpinItemFromTable = (tripId, productId) => ({
  type: UNPIN_ITEM_FROM_TABLE,
  tripId,
  productId
});

export const unpinItemFromPins = (tripId, productId) => ({
  type: UNPIN_ITEM_FROM_PINS,
  tripId,
  productId
});

export const fetchPinList = id => {
  return ({
    type: FETCH_PIN_LIST,
    id
  });
};

export const receivePinList = pins => ({
  type: RECEIVE_PIN_LIST,
  pins
});

export const clearPinList = () => ({
  type: CLEAR_PIN_LIST
});

export const appendPin = (pin) => ({
  type: APPEND_PIN,
  pin
});
