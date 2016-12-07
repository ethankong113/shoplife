import { APPEND_PIN, RECEIVE_PIN_LIST, CLEAR_PIN_LIST } from '../actions/pin_actions';
import { merge } from 'lodash';

const _nullPins = {
  list: {},
  errors: []
};

const PinReducer = (state = _nullPins, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case APPEND_PIN:
      newState = merge({}, state);
      newState.list[action.pin.id] = action.pin;
      return newState;
    case RECEIVE_PIN_LIST:
      newState = merge({}, _nullPins, {list: action.pins});
      return newState;
    case CLEAR_PIN_LIST:
      return _nullPins;
    default:
      return state;
  }
};

export default PinReducer;
