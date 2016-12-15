export const FETCH_TRIP_LIST_BY_USER = "FETCH_TRIP_LIST_BY_USER";
export const FETCH_TRIP_LIST_BY_FOLLOWER = "FETCH_TRIP_LIST_BY_FOLLOWER";
export const FETCH_TRIP_LIST_BY_QUERY = "FETCH_TRIP_LIST_BY_QUERY";
export const FETCH_TRIP_LIST_BY_LOCATION = "FETCH_TRIP_LIST_BY_LOCATION";
export const FETCH_TRIP_LIST_BY_SIDE_BAR = "FETCH_TRIP_LIST_BY_SIDE_BAR";
export const RECEIVE_TRIP_LIST = "RECEIVE_TRIP_LIST";
export const RECEIVE_SIDE_BAR_TRIP_LIST = "RECEIVE_SIDE_BAR_TRIP_LIST";
export const CLEAR_TRIP_LIST = "CLEAR_TRIP_LIST";
export const CLEAR_SIDE_BAR = "CLEAR_SIDE_BAR";
export const APPEND_TRIP = "APPEND_TRIP";
export const APPEND_TRIP_TO_SIDE_BAR = "APPEND_TRIP_TO_SIDE_BAR";
export const REMOVE_TRIP_FROM_SIDE_BAR = "REMOVE_TRIP_FROM_SIDE_BAR";
export const RENEW_TRIP = "RENEW_TRIP";
export const REMOVE_TRIP = "REMOVE_TRIP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchTripListByUser = username => ({
  type: FETCH_TRIP_LIST_BY_USER,
  username
});

export const fetchTripListByFollower = username => ({
  type: FETCH_TRIP_LIST_BY_FOLLOWER,
  username
});

export const fetchTripListBySideBar = username => ({
  type: FETCH_TRIP_LIST_BY_SIDE_BAR,
  username
});

export const receiveTripList = trips => ({
  type: RECEIVE_TRIP_LIST,
  trips
});

export const receiveSideBarTripList = trips => ({
  type: RECEIVE_SIDE_BAR_TRIP_LIST,
  trips
});

export const clearTripList = () => ({
  type: CLEAR_TRIP_LIST
});

export const clearSideBar = () => ({
  type: CLEAR_SIDE_BAR
});

export const appendTrip = trip => ({
  type: APPEND_TRIP,
  trip
});

export const appendTripToSideBar = trip => ({
  type: APPEND_TRIP_TO_SIDE_BAR,
  trip
});

export const removeTripFromSideBar = trip => ({
  type: REMOVE_TRIP_FROM_SIDE_BAR,
  trip
});

export const renewTrip = trip => ({
  type: RENEW_TRIP,
  trip
});

export const removeTrip = trip => ({
  type: REMOVE_TRIP,
  trip
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
