import { RECEIVE_PIN_LIST, CLEAR_PIN_LIST } from '../actions/pin_actions';
import { merge } from 'lodash';

const _nullPins = {
  list: {},
  errors: []
};

const PinReducer = (state = _nullPins, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PIN_LIST:
      let newState = merge({}, _nullPins, {list: action.pins});
      return newState;
    case CLEAR_PIN_LIST:
      return _nullPins;
    default:
      return state;
  }
};

export default PinReducer;
