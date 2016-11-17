import { READ_PROFILE, UPDATE_PROFILE, FOLLOW_USER, UNFOLLOW_USER, receiveProfile } from '../actions/profile_actions';
import { readProfileAJAX, updateProfileAJAX, followUserAJAX, unfollowUserAJAX } from '../utils/profile_api_utils';
import { appendFollower, removeFollower } from '../actions/follower_actions';

const ProfileMiddleware = ({getState, dispatch}) => next => action => {

  const receiveProfileCB = profile => {dispatch(receiveProfile(profile));};
  const appendFollowerCB = data => {
    dispatch(receiveProfile(data.profile));
    dispatch(appendFollower(data.follower));
  };
  const removeFollowerCB = data => {
    dispatch(receiveProfile(data.profile));
    dispatch(removeFollower(data.follower));
  };
  const readProfileErrorCB = err => {console.log(err);};
  const updateProfileErrorCB = err => {console.log(err);};
  const followUserErrorCB = err => {console.log(err);};
  const unfollowUserErrorCB = err => {console.log(err);};

  switch(action.type) {
    case READ_PROFILE:
      readProfileAJAX(action.username, receiveProfileCB, readProfileErrorCB);
      return next(action);
    case UPDATE_PROFILE:
      updateProfileAJAX(action.profile, receiveProfileCB, updateProfileErrorCB);
      return next(action);
    case FOLLOW_USER:
      followUserAJAX(action.id, appendFollowerCB, followUserErrorCB);
      return next(action);
    case UNFOLLOW_USER:
      unfollowUserAJAX(action.id, removeFollowerCB, unfollowUserErrorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
