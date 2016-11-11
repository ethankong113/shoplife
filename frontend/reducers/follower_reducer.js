import { RECEIVE_FOLLOWER_LIST, RECEIVE_FOLLOWER, CLEAR_FOLLOWERS } from '../actions/follower_actions';
import { merge } from 'lodash';

const _nullFollowers = {
  list: {},
  errors: []
};

const FollowerReducer = (state = _nullFollowers, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_FOLLOWER_LIST:
      newState = merge({}, _nullFollowers, {list: action.followers});
      return newState;
    case CLEAR_FOLLOWERS:
      return _nullFollowers;
    default:
      return state;
  }
};

export default FollowerReducer;
