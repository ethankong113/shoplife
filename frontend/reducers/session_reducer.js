import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RECEIVE_LOGOUT_MESSAGE }
  from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: [],
  msg: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state, {currentUser: action.user});
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    case RECEIVE_LOGOUT_MESSAGE:
      newState = merge(_nullUser, {msg: action.msg});
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
