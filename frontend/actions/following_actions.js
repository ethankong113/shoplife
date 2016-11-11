export const FETCH_FOLLOWEES = "FETCH_FOLLOWEES";
export const RECEIVE_FOLLOWEE_LIST = "RECEIVE_FOLLOWEE_LIST";
export const RECEIVE_FOLLOWEE = "RECEIVE_FOLLOWEE";
export const CLEAR_FOLLOWINGS = "CLEAR_FOLLOWINGS";

export const fetchFollowees = username => ({
  type: FETCH_FOLLOWEES,
  username
});

export const receiveFolloweeList = followees => ({
  type: RECEIVE_FOLLOWEE_LIST,
  followees
});

export const receiveFollowee = followee => ({
  type: RECEIVE_FOLLOWEE,
  followee
});

export const clearFollowings = () => ({
  type: CLEAR_FOLLOWINGS
});
