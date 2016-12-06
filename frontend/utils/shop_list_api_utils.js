export const fetchShopListByUserAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/shoplist/username/${username}`,
     success,
     error
   });
};

export const fetchShopListByFollowerAJAX = (profilename, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/shoplist/follower/${profilename}`,
     success,
     error
   });
};
