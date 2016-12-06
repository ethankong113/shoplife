export const CREATE_TRIP = "CREATE_TRIP";
export const CREATE_TRIP_TO_PIN = "CREATE_TRIP_TO_PIN";
export const READ_TRIP = "READ_TRIP";
export const UPDATE_TRIP = "UPDATE_TRIP";
export const DELETE_TRIP = "DELETE_TRIP";
export const READ_TRIP_TO_UPDATE = "READ_TRIP_TO_UPDATE";
export const RECEIVE_TRIP = "RECEIVE_TRIP";
export const RECEIVE_NEW_TRIP = "RECEIVE_NEW_TRIP";
export const RECEIVE_TRIP_TO_UPDATE = "RECEIVE_TRIP_TO_UPDATE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_TRIP = "CLEAR_TRIP";
export const CLEAR_TRIP_MESSAGE = "CLEAR_TRIP_MESSAGE";
export const FOLLOW_TRIP = "FOLLOW_TRIP";
export const UNFOLLOW_TRIP = "UNFOLLOW_TRIP";
export const UPDATE_TRIP_PRODUCT_COUNT = "UPDATE_TRIP_PRODUCT_COUNT";
export const UPDATE_TRIP_FOLLOWER_COUNT = "UPDATE_TRIP_FOLLOWER_COUNT";

export const createTrip = (trip) => ({
  type: CREATE_TRIP,
  trip
});

export const createTripToPin = (trip) => ({
  type: CREATE_TRIP_TO_PIN,
  trip
});

export const readTrip = (id) => ({
  type: READ_TRIP,
  id
});

export const readTripToUpdate = (id) => ({
  type: READ_TRIP_TO_UPDATE,
  id
});

export const updateTrip = trip => ({
  type: UPDATE_TRIP,
  trip
});

export const deleteTrip = id => ({
  type: DELETE_TRIP,
  id
});

export const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

export const receiveTripToUpdate = trip => ({
  type: RECEIVE_TRIP_TO_UPDATE,
  trip
});

export const receiveNewTrip = trip => ({
  type: RECEIVE_NEW_TRIP,
  trip
});

export const receiveErrors = errors => ({
  type: RECEIVE_TRIP,
  errors
});

export const clearTrip = () => ({
  type: CLEAR_TRIP
});

export const clearTripMessage = () => ({
  type: CLEAR_TRIP_MESSAGE
});

export const followTrip = (id) => ({
  type: FOLLOW_TRIP,
  id
});

export const unfollowTrip = (id) => ({
  type: UNFOLLOW_TRIP,
  id
});

export const updateTripProductCount = (change) => ({
  type: UPDATE_TRIP_PRODUCT_COUNT,
  change
});

export const updateTripFollowerCount = (change) => ({
  type: UPDATE_TRIP_FOLLOWER_COUNT,
  change
});
