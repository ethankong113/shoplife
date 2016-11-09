export const fetchShopListByUserAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/shoplist/username/${username}`,
     success,
     error
   });
};
