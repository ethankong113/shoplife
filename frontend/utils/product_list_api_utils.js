export const fetchProductListByShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlist/shop_id/${id}`,
     success,
     error
   });
};

export const fetchProductListByTripAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlist/trip_id/${id}`,
     success,
     error
   });
};

export const fetchProductListByProfileAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlist/profile/${username}`,
     success,
     error
   });
};

export const fetchProductListBySearchAJAX = (query, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlist/query/${query}`,
     success,
     error
   });
};
