export const fetchMarkersAJAX = (tripId, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/productlists/markers/${tripId}`,
     success,
     error
   });
};
