import { RECEIVE_MARKERS, REMOVE_MARKER, CLEAR_MARKERS } from '../actions/map_actions';
import { merge } from 'lodash';

const _nullMarkers = {
  list: {},
  errors: []
};

const MapReducer = (state = _nullMarkers, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_MARKERS:
      newState = merge({}, _nullMarkers, {list: action.markers});
      return newState;
    case CLEAR_MARKERS:
      return _nullMarkers;
    case REMOVE_MARKER:
      newState = merge({}, state);
      let key = action.markerId;
      delete newState.list[key];
      return newState;
    default:
      return state;
  }
};

export default MapReducer;
