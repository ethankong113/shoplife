export const getFollowersAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/get_followers/${username}`,
     success,
     error
   });
};
