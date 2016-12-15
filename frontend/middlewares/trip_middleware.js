import { CREATE_TRIP, READ_TRIP, UPDATE_TRIP, DELETE_TRIP, READ_TRIP_TO_UPDATE, CREATE_TRIP_TO_PIN, FOLLOW_TRIP, UNFOLLOW_TRIP, receiveTrip, receiveNewTrip, receiveErrors, receiveTripToUpdate } from '../actions/trip_actions';
import { renewTrip, removeTrip, appendTripToSideBar, removeTripFromSideBar } from '../actions/trip_list_actions';
import { appendPin } from '../actions/pin_actions';
import { createTripAJAX, readTripAJAX, updateTripAJAX, deleteTripAJAX, followTripAJAX, unfollowTripAJAX } from '../utils/trip_api_utils';
import { updateTripCount } from '../actions/profile_actions';

const TripMiddleware = ({getState, dispatch}) => next => action => {

  const createTripCB = (trip) => {
    dispatch(receiveNewTrip(trip));
    dispatch(appendTripToSideBar(trip));
  };
  const readTripCB = (trip) => {dispatch(receiveTrip(trip));};
  const renewTripCB = (trip) => {
    dispatch(renewTrip(trip));
    dispatch(receiveNewTrip(trip));
  };
  const deleteTripCB = (trip) => {
    dispatch(removeTrip(trip));
    dispatch(receiveNewTrip(trip));
    dispatch(updateTripCount(-1));
    dispatch(removeTripFromSideBar(trip));
  };
  const createTripToPinCB = (trip) => {
    dispatch(receiveNewTrip(trip));
    dispatch(appendPin(trip));
    dispatch(appendTripToSideBar(trip));
  };
  const readTripToUpdateCB = (trip) => {dispatch(receiveTripToUpdate(trip));};
  const errorCB = (err) => {dispatch(receiveErrors(err.responseJSON));};

  switch(action.type) {
    case CREATE_TRIP:
      createTripAJAX(action.trip, createTripCB, errorCB);
      return next(action);
    case READ_TRIP:
      readTripAJAX(action.id, readTripCB, errorCB);
      return next(action);
    case UPDATE_TRIP:
      updateTripAJAX(action.trip, renewTripCB, errorCB);
      return next(action);
    case DELETE_TRIP:
      deleteTripAJAX(action.id, deleteTripCB, errorCB);
      return next(action);
    case READ_TRIP_TO_UPDATE:
      readTripAJAX(action.id, readTripToUpdateCB, errorCB);
      return next(action);
    case CREATE_TRIP_TO_PIN:
      createTripAJAX(action.trip, createTripToPinCB, errorCB);
      return next(action);
    case FOLLOW_TRIP:
      followTripAJAX(action.id, readTripCB, errorCB);
      return next(action);
    case UNFOLLOW_TRIP:
      unfollowTripAJAX(action.id, readTripCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};


export default TripMiddleware;
