import { RECEIVE_PROFILE } from '../actions/profile_actions';
import { merge } from 'lodash';

const _nullProfile = null;

const ProfileReducer = (state = _nullProfile, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROFILE:
      let newState = merge({}, state, {detail: action.profile});
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;
