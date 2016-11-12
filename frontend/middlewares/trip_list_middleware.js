import { FETCH_TRIP_LIST_BY_USER, FETCH_TRIP_LIST_BY_FOLLOWER, receiveTripList, receiveErrors } from '../actions/trip_list_actions';
import { fetchTripListByUserAJAX, fetchTripListByFollowerAJAX } from '../utils/trip_list_api_utils';

const TripListMiddleware = ({getState, dispatch}) => next => action => {
  const successCB = trips => {dispatch(receiveTripList(trips));};
  const errorCB = err => {dispatch(receiveErrors(err));};
  switch(action.type) {
    case FETCH_TRIP_LIST_BY_USER:
      fetchTripListByUserAJAX(action.username, successCB, errorCB);
      return next(action);
    case FETCH_TRIP_LIST_BY_FOLLOWER:
      fetchTripListByFollowerAJAX(action.username, successCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default TripListMiddleware;
