import _ from 'lodash';

export const getCurrentUser = (session) => {
  if (!_.isEmpty(session)) {
    return session.currentUser;
  }
  return null;
};

export const getProductList = (list) => {
  if (list && !_.isEmpty(list.products)) {
    return _.values(list.products);
  }
};
