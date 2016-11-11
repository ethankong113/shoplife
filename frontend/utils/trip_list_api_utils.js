export const fetchTripListByUserAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/triplist/username/${username}`,
     success,
     error
   });
};
