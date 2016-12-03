export const GET_FOLLOWERS = "GET_FOLLOWERS";
export const RECEIVE_FOLLOWER_LIST = "RECEIVE_FOLLOWER_LIST";
export const RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";
export const CLEAR_FOLLOWERS = "CLEAR_FOLLOWERS";
export const APPEND_FOLLOWER = "APPEND_FOLLOWER";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";

export const getFollowers = username => ({
  type: GET_FOLLOWERS,
  username
});

export const receiveFollowerList = followers => ({
  type: RECEIVE_FOLLOWER_LIST,
  followers
});

export const receiveFollower = follower => ({
  type: RECEIVE_FOLLOWER,
  follower
});

export const clearFollowers = () => ({
  type: CLEAR_FOLLOWERS
});

export const appendFollower = (follower) => ({
  type: APPEND_FOLLOWER,
  follower
});

export const removeFollower = (follower) => ({
  type: REMOVE_FOLLOWER,
  follower
});
