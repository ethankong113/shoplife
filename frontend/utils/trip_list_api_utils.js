export const fetchTripListByUserAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/triplist/username/${username}`,
     success,
     error
   });
};

export const fetchTripListByFollowerAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/triplist/follower/${username}`,
     success,
     error
   });
};

export const fetchTripListBySideBarAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/triplist/sidebar/${username}`,
     success,
     error
   });
};
