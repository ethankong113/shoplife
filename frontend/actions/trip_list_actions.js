export const FETCH_TRIP_LIST_BY_USER = "FETCH_TRIP_LIST_BY_USER";
export const FETCH_TRIP_LIST_BY_QUERY = "FETCH_TRIP_LIST_BY_QUERY";
export const FETCH_TRIP_LIST_BY_LOCATION = "FETCH_TRIP_LIST_BY_LOCATION";
export const RECEIVE_TRIP_LIST = "RECEIVE_TRIP_LIST";
export const CLEAR_TRIP_LIST = "CLEAR_TRIP_LIST";
export const APPEND_TRIP = "APPEND_TRIP";
export const RENEW_TRIP = "RENEW_TRIP";
export const REMOVE_TRIP = "REMOVE_TRIP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchTripListByUser = username => ({
  type: FETCH_TRIP_LIST_BY_USER,
  username
});

export const receiveTripList = trips => ({
  type: RECEIVE_TRIP_LIST,
  trips
});

export const clearTripList = () => ({
  type: CLEAR_TRIP_LIST
});

export const appendTrip = trip => ({
  type: APPEND_TRIP,
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
