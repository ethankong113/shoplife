import { RECEIVE_FOLLOWEE_LIST, RECEIVE_FOLLOWEE, CLEAR_FOLLOWINGS } from '../actions/following_actions';
import { merge } from 'lodash';

const _nullFollowing = {
  followees: {},
  trips: {},
  shops: {},
  errors: []
};

const FollowingReducer = (state = _nullFollowing, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FOLLOWEE_LIST:
      newState = merge({}, _nullFollowing, {followees: action.followees});
      return newState;
    case CLEAR_FOLLOWINGS:
      return _nullFollowing;
    default:
      return state;
  }
};

export default FollowingReducer;
