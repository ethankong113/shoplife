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

export const unpinItemFromBoardAJAX = (tripId, productId, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/pins/from_board/${tripId}/${productId}`,
     success,
     error
   });
};

export const unpinItemFromPinsAJAX = (tripId, productId, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/pins/from_pins/${tripId}/${productId}`,
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
