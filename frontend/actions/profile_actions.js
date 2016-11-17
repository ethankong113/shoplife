export const READ_PROFILE = "READ_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const CLEAR_PROFILE = "CLEAR_PROFILE";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

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
