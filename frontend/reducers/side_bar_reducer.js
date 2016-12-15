import { merge, isEmpty } from 'lodash';
import { RECEIVE_SIDE_BAR_TRIP_LIST, CLEAR_SIDE_BAR, APPEND_TRIP_TO_SIDE_BAR, REMOVE_TRIP_FROM_SIDE_BAR } from '../actions/trip_list_actions';

const _nullSideBar = {
  trips: {}
};

const SideBarReducer = (state = _nullSideBar, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SIDE_BAR_TRIP_LIST:
      newState = merge({}, state, {trips: action.trips});
      return newState;
    case CLEAR_SIDE_BAR:
      return _nullSideBar;
    case APPEND_TRIP_TO_SIDE_BAR:
      newState = merge({}, state);
      if (Object.keys(newState.trips).length < 5) {
        newState.trips[action.trip.id] = action.trip;
      }
      return newState;
    case REMOVE_TRIP_FROM_SIDE_BAR:
      newState = merge({}, state);
      delete newState.trips[action.trip.id];
      return newState;
    default:
      return state;
  }
};

export default SideBarReducer;
