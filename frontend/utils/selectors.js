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

export const selectFollowers = (followers) => {
  if (followers && !_.isEmpty(followers.list)) {
    return _.values(followers.list);
  }
  return {};
};

export const getFollowees = (followings) => {
  if (followings && !_.isEmpty(followings.followees)) {
    return _.values(followings.followees);
  }
  return {};
};

export const getTripList = (list) => {
  if (list && !_.isEmpty(list.trips)) {
    return _.values(list.trips);
  }
  return {};
};

export const getPinList = (pins) => {
  if (pins && !_.isEmpty(pins.list)) {
    return _.values(pins.list);
  }
  return null;
};
