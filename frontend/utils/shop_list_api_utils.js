export const fetchShopListByUserAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/shoplist/user_id/${id}`,
     success,
     error
   });
};
