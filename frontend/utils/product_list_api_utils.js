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

export const fetchProductListBySearchAJAX = (query, limit, offset, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/query/${query}/limit/${limit}/offset/${offset}`,
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
