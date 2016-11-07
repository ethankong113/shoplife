import { SIGN_UP, LOG_IN, LOG_OUT, receiveCurrentUser, receiveErrors,
  receiveLogoutMessage } from '../actions/session_actions';
import { signupAJAX, loginAJAX, logoutAJAX } from '../utils/session_api_utils';

const SessionMiddleware = ({getState, dispatch}) => next => action => {

  const signupSuccessCB = user => {dispatch(receiveCurrentUser(user));};
  const loginSuccessCB = user => {dispatch(receiveCurrentUser(user));};
  const logoutSuccessCB = msg => {dispatch(receiveLogoutMessage(msg));};
  const errorCB = err => {dispatch(receiveErrors(err.responseJSON));};

  switch(action.type) {
    case SIGN_UP:
      signupAJAX(action.user, signupSuccessCB, errorCB);
      return next(action);
    case LOG_IN:
      loginAJAX(action.user, loginSuccessCB, errorCB);
      return next(action);
    case LOG_OUT:
      logoutAJAX(logoutSuccessCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
