export const GET_FOLLOWERS = "GET_FOLLOWERS";
export const RECEIVE_FOLLOWER_LIST = "RECEIVE_FOLLOWER_LIST";
export const RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";
export const CLEAR_FOLLOWERS = "CLEAR_FOLLOWERS";

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
