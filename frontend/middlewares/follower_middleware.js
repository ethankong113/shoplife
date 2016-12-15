import { GET_FOLLOWERS, GET_SHOP_FOLLOWERS, receiveFollowerList, receiveFollower } from '../actions/follower_actions';
import { getFollowersAJAX, getShopFollowersAJAX } from '../utils/follower_api_utils';

const FollowerMiddleware = ({getState, dispatch}) => next => action => {

  const receiveFollowersCB = followers => {dispatch(receiveFollowerList(followers));};
  const failCB = err => {console.log(err);};

  switch(action.type) {
    case GET_FOLLOWERS:
      getFollowersAJAX(action.username, receiveFollowersCB, failCB);
      return next(action);
    case GET_SHOP_FOLLOWERS:
      getShopFollowersAJAX(action.shopId, receiveFollowersCB, failCB);
      return next(action);
    default:
      return next(action);
  }
};
export default FollowerMiddleware;
