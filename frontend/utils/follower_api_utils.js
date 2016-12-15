export const getFollowersAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/get_followers/${username}`,
     success,
     error
   });
};

export const getShopFollowersAJAX = (shopId, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/get_shop_followers/${shopId}`,
     success,
     error
   });
};
