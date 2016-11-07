export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGOUT_MESSAGE = "RECEIVE_LOGOUT_MESSAGE";

export const signup = (user) => ({
  type: SIGN_UP,
  user
});

export const login = (user) => ({
  type: LOG_IN,
  user
});

export const logout = () => ({
  type: LOG_OUT
});

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogoutMessage = msg => ({
  type: RECEIVE_LOGOUT_MESSAGE,
  msg
});
