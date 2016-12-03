import { RECEIVE_PROFILE, CLEAR_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash';

const _nullProfile = {
  detail: {},
  errors: []
};

const ProfileReducer = (state = _nullProfile, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      let newState = merge({}, state, {detail: action.profile});
      return newState;
    case CLEAR_PROFILE:
      return _nullProfile;
    default:
      return state;
  }
};

export default ProfileReducer;
