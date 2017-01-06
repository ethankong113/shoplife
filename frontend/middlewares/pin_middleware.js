import { PIN_ITEM, UNPIN_ITEM, UNPIN_ITEM_FROM_TABLE, UNPIN_ITEM_FROM_PINS, FETCH_PIN_LIST, receivePinList } from '../actions/pin_actions';
import { pinItemAJAX, unpinItemAJAX, unpinItemFromBoardAJAX, unpinItemFromPinsAJAX, fetchPinListAJAX } from '../utils/pin_api_utils';
import { removeProduct, removeProductFromPins } from '../actions/product_list_actions';
import { removeMarker } from '../actions/map_actions';
import { updateTripProductCount } from '../actions/trip_actions';
import { updatePinCount } from '../actions/profile_actions';

const PinMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = pins => {dispatch(receivePinList(pins));};
  const removeProductCB = product => {
    dispatch(removeProduct(product));
    dispatch(updateTripProductCount(-1));
    dispatch(removeMarker(product.id));
  };
  const removePinCB = pin => {
    dispatch(removeProductFromPins(pin));
    dispatch(updatePinCount(-1));
  };
  const errorCB = err => {console.log(err);};
  switch(action.type) {
    case PIN_ITEM:
      pinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case UNPIN_ITEM:
      unpinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case UNPIN_ITEM_FROM_TABLE:
      unpinItemFromBoardAJAX(action.tripId, action.productId, removeProductCB, errorCB);
      return next(action);
    case UNPIN_ITEM_FROM_PINS:
      unpinItemFromPinsAJAX(action.tripId, action.productId, removePinCB, errorCB);
      return next(action);
    case FETCH_PIN_LIST:
      fetchPinListAJAX(action.id, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default PinMiddleware;
