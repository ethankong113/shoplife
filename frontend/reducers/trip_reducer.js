import { RECEIVE_TRIP, RECEIVE_NEW_TRIP, RECEIVE_TRIP_TO_UPDATE, CLEAR_TRIP, CLEAR_TRIP_MESSAGE, RECEIVE_ERRORS } from '../actions/trip_actions';
import { isEmpty, merge } from 'lodash';

const _nullTrip = {
  trip: {},
  errors: [],
  msg: []
};

const TripReducer = (state = _nullTrip, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TRIP:
      newState = merge({}, state, {trip: action.trip});
      return newState;
    case RECEIVE_NEW_TRIP:
      newState = merge({}, state, {trip: action.trip, msg: ["CLOSE_TRIP_MODAL"]});
      return newState;
    case RECEIVE_TRIP_TO_UPDATE:
      newState = merge({}, state, {trip: action.trip, msg: ["SET_TRIP_FIELDS"]});
      return newState;
    case CLEAR_TRIP:
      return _nullTrip;
    case CLEAR_TRIP_MESSAGE:
      newState = merge({}, state);
      newState.msg = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    default:
      return state;
  }
};

export default TripReducer;
