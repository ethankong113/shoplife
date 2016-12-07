export const READ_PROFILE = "READ_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const UPDATE_PIN_COUNT = "UPDATE_PIN_COUNT";
export const UPDATE_TRIP_COUNT = "UPDATE_TRIP_COUNT";
export const UPDATE_SHOP_COUNT = "UPDATE_SHOP_COUNT";

export const readProfile = username => ({
  type: READ_PROFILE,
  username
});

export const updateProfile = profile => ({
  type: READ_PROFILE,
  profile
});

export const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});

export const followUser = id => ({
  type: FOLLOW_USER,
  id
});

export const unfollowUser = id => ({
  type: UNFOLLOW_USER,
  id
});

export const updatePinCount = (change) => ({
  type: UPDATE_PIN_COUNT,
  change
});

export const updateTripCount = (change) => ({
  type: UPDATE_TRIP_COUNT,
  change
});

export const updateShopCount = (change) => ({
  type: UPDATE_SHOP_COUNT,
  change
});
