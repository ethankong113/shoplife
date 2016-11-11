export const createTripAJAX = (trip, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/trips',
     data: {trip},
     success,
     error
   });
};

export const readTripAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/trips/${id}`,
     success,
     error
   });
};

export const updateTripAJAX = (trip, success, error) => {
  $.ajax({
     type: 'PATCH',
     url: `api/trips/${trip.id}`,
     data: {trip},
     success,
     error
   });
};

export const deleteTripAJAX = (id, success, error) => {
  $.ajax({
     type: 'DELETE',
     url: `api/trips/${id}`,
     success,
     error
   });
};
