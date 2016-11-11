import { RECEIVE_TRIP_LIST, CLEAR_TRIP_LIST, RECEIVE_ERRORS, APPEND_TRIP, RENEW_TRIP, REMOVE_TRIP } from '../actions/trip_list_actions';
import { merge } from 'lodash';

const _nullTripList = {
  trips: {},
  errors: []
};

const TripListReducer = (state = _nullTripList, action ) => {
  Object.freeze(state);
  let newState;
  let tripId;
  switch(action.type) {
    case RECEIVE_TRIP_LIST:
      newState = merge({}, state, {trips: action.trips, errors: []});
      return newState;
    case CLEAR_TRIP_LIST:
      return _nullTripList;
    case APPEND_TRIP:
      newState = merge({}, state);
      tripId = action.trip.id;
      newState.trips[tripId] = action.trip;
      return newState;
    case RENEW_TRIP:
      newState = merge({}, state);
      tripId = action.trip.id;
      newState.trips[tripId] = action.trip;
      return newState;
    case REMOVE_TRIP:
      newState = merge({}, state);
      tripId = action.trip.id;
      delete newState.trips[tripId];
      return newState;
    default:
      return state;
  }
};

export default TripListReducer;
