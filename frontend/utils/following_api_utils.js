export const fetchFolloweesAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/following/users/${username}`,
     success,
     error
   });
};
