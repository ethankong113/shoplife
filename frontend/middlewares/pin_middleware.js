import { PIN_ITEM, UNPIN_ITEM, FETCH_PIN_LIST, receivePinList } from '../actions/pin_actions';
import { pinItemAJAX, unpinItemAJAX, fetchPinListAJAX } from '../utils/pin_api_utils';

const PinMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = pins => {dispatch(receivePinList(pins));};
  const errorCB = err => {console.log(err);};
  switch(action.type) {
    case PIN_ITEM:
      pinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case UNPIN_ITEM:
      unpinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case FETCH_PIN_LIST:
      fetchPinListAJAX(action.id, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default PinMiddleware;
