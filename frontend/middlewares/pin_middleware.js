import { PIN_ITEM, UNPIN_ITEM, UNPIN_ITEM_FROM_BOARD, FETCH_PIN_LIST, receivePinList } from '../actions/pin_actions';
import { pinItemAJAX, unpinItemAJAX, unpinItemFromBoardAJAX, fetchPinListAJAX } from '../utils/pin_api_utils';
import { removeProduct } from '../actions/product_list_actions';

const PinMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = pins => {dispatch(receivePinList(pins));};
  const removeProductCB = product => {dispatch(removeProduct(product));};
  const errorCB = err => {console.log(err);};
  switch(action.type) {
    case PIN_ITEM:
      pinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case UNPIN_ITEM:
      unpinItemAJAX(action.tripId, action.productId, successCB, errorCB);
      return next(action);
    case UNPIN_ITEM_FROM_BOARD:
      unpinItemFromBoardAJAX(action.tripId, action.productId, removeProductCB, errorCB);
      return next(action);
    case FETCH_PIN_LIST:
      fetchPinListAJAX(action.id, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default PinMiddleware;
