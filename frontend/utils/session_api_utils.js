export const signupAJAX = (user, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/users',
     data: {user},
     success,
     error
   });
};

export const loginAJAX = (user, success, error) => {
  $.ajax({
     type: 'POST',
     url: 'api/session',
     data: {user},
     success,
     error
   });
};

export const logoutAJAX = (success, error) => {
  $.ajax({
     type: 'DELETE',
     url: 'api/session',
     success,
     error
   });
};
