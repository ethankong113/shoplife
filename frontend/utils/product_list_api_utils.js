export const fetchProductListByShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/shop_id/${id}`,
     success,
     error
   });
};

export const fetchProductListByTripAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/trip_id/${id}`,
     success,
     error
   });
};

export const fetchProductListByProfileAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/profile/${username}`,
     success,
     error
   });
};

export const fetchProductListBySearchAJAX = (query, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/query/${query}`,
     success,
     error
   });
};

export const fetchProductListByAllAJAX = (success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/all`,
     success,
     error
   });
};
