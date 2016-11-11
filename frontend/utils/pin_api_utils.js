export const pinItemAJAX = (tripId, productId, success, error) => {
  $.ajax({
     type: 'POST',
     url: `api/pins/${tripId}/${productId}`,
     success,
     error
   });
};

export const unpinItemAJAX = (tripId, productId, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/pins/${tripId}/${productId}`,
     success,
     error
   });
};

export const fetchPinListAJAX  = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/pins/${id}`,
     success,
     error
   });
};
