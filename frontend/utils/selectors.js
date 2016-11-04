import _ from 'lodash';

export const getCurrentUser = (session) => {
  if (!_.isEmpty(session)) {
    return session.currentUser;
  }
  return null;
};
