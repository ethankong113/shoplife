export const fetchProductListByShopAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlist/shop_id/${id}`,
     success,
     error
   });
};
