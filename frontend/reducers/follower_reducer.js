import { RECEIVE_FOLLOWER_LIST, RECEIVE_FOLLOWER, APPEND_FOLLOWER, REMOVE_FOLLOWER, CLEAR_FOLLOWERS } from '../actions/follower_actions';
import { merge, isEmpty } from 'lodash';

const _nullFollowers = {
  list: {},
  errors: []
};

const FollowerReducer = (state = _nullFollowers, action) => {
  Object.freeze(state);
  let newState;
  let key;
  switch(action.type) {
    case RECEIVE_FOLLOWER_LIST:
      newState = merge({}, _nullFollowers, {list: action.followers});
      return newState;
    case APPEND_FOLLOWER:
      key = action.follower.id;
      newState = merge({}, state);
      newState.list[key] = action.follower;
      return newState;
    case REMOVE_FOLLOWER:
      key = action.follower.id;
      newState = merge({}, state);
      delete newState.list[key];
      return newState;
    case CLEAR_FOLLOWERS:
      return _nullFollowers;
    default:
      return state;
  }
};

export default FollowerReducer;
