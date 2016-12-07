export const createShopAJAX = (shop, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/shops',
     data: {shop},
     success,
     error
   });
};

export const readShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/shops/${id}`,
     success,
     error
   });
};

export const updateShopAJAX = (shop, success, error) => {
  $.ajax({
     type: 'PATCH',
     url: `api/shops/${shop.id}`,
     data: {shop},
     success,
     error
   });
};

export const deleteShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/shops/${id}`,
     success,
     error
   });
};

export const followShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'POST',
     url: `api/shop_follows/${id}`,
     success,
     error
   });
};

export const unfollowShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/shop_follows/${id}`,
     success,
     error
   });
};
