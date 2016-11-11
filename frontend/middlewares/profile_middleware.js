import { READ_PROFILE, UPDATE_PROFILE, FOLLOW_USER, UNFOLLOW_USER, receiveProfile } from '../actions/profile_actions';
import { readProfileAJAX, updateProfileAJAX, followUserAJAX, unfollowUserAJAX } from '../utils/profile_api_utils';

const ProfileMiddleware = ({getState, dispatch}) => next => action => {

  const successCB = profile => {
    dispatch(receiveProfile(profile));
  };
  const readProfileErrorCB = err => {console.log(err);};
  const updateProfileErrorCB = err => {console.log(err);};
  const followUserErrorCB = err => {console.log(err);};
  const unfollowUserErrorCB = err => {console.log(err);};

  switch(action.type) {
    case READ_PROFILE:
      readProfileAJAX(action.username, successCB, readProfileErrorCB);
      return next(action);
    case UPDATE_PROFILE:
      updateProfileAJAX(action.profile, successCB, updateProfileErrorCB);
      return next(action);
    case FOLLOW_USER:
      followUserAJAX(action.id, successCB, followUserErrorCB);
      return next(action);
    case UNFOLLOW_USER:
      unfollowUserAJAX(action.id, successCB, unfollowUserErrorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
