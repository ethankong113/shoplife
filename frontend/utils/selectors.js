import _ from 'lodash';

export const getCurrentUser = (session) => {
  if (!_.isEmpty(session)) {
    return session.currentUser;
  }
  return null;
};

export const getShopList = (list) => {
  if (list && !_.isEmpty(list.shops)) {
    return _.values(list.shops);
  }
  return {};
};

export const getProductList = (list) => {
  if (list && !_.isEmpty(list.products)) {
    return _.values(list.products);
  }
  return {};
};

export const getProfileId = (profile) => {
  if (profile && !_.isEmpty(profile.detail)) {
    return profile.detail.id;
  }
  return null;
};
