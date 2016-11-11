import { GET_FOLLOWERS, receiveFollowerList, receiveFollower } from '../actions/follower_actions';
import { getFollowersAJAX } from '../utils/follower_api_utils';

const FollowerMiddleware = ({getState, dispatch}) => next => action => {

  const successCB = followers => {dispatch(receiveFollowerList(followers));};
  const failCB = err => {console.log(err);};

  switch(action.type) {
    case GET_FOLLOWERS:
      getFollowersAJAX(action.username, successCB, failCB);
      return next(action);
    default:
      return next(action);
  }
};
export default FollowerMiddleware;
