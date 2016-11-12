import { FETCH_FOLLOWEES, receiveFolloweeList, receiveFollowee } from '../actions/following_actions';
import { fetchFolloweesAJAX } from '../utils/following_api_utils';

const FollowingMiddleware = ({getState, dispatch}) => next => action => {
  const receiveFolloweeListCB = (followees) => {dispatch(receiveFolloweeList(followees));};
  const errorCB = (err) => {console.log(err);};

  switch(action.type) {
    case FETCH_FOLLOWEES:
      fetchFolloweesAJAX(action.username, receiveFolloweeListCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default FollowingMiddleware;
