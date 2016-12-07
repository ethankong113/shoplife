import { RECEIVE_PROFILE, CLEAR_PROFILE } from '../actions/profile_actions';
import { UPDATE_PIN_COUNT, UPDATE_TRIP_COUNT, UPDATE_SHOP_COUNT } from '../actions/profile_actions';
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
    case UPDATE_PIN_COUNT:
      newState = merge({}, state);
      newState.detail.pinCount += action.change;
      return newState;
    case UPDATE_TRIP_COUNT:
      newState = merge({}, state);
      newState.detail.tripCount += action.change;
      return newState;
    case UPDATE_SHOP_COUNT:
      newState = merge({}, state);
      newState.detail.shopCount += action.change;
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;
