export const createProductAJAX = (product, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/products',
     data: {product},
     success,
     error
   });
};

export const readProductAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/products/${id}`,
     success,
     error
   });
};

export const updateProductAJAX = (product, success, error) => {
  $.ajax({
     type: 'PATCH',
     url: `api/products/${product.id}`,
     data: {product},
     success,
     error
   });
};

export const deleteProductAJAX = (id, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/products/${id}`,
     success,
     error
   });
};
