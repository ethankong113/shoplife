export const readProfileAJAX = (username, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/profiles/${username}`,
     success,
     error
   });
};

export const updateProfileAJAX = (profile, success, error) => {
  $.ajax({
     type: 'PATCH',
     url: `api/profiles/${profile.username}`,
     data: {profile},
     success,
     error
   });
};

export const followUserAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/follow_user/${id}`,
     success,
     error
   });
};

export const unfollowUserAJAX = (id, success, error) => {
  $.ajax({
     type: 'GET',
     url: `api/unfollow_user/${id}`,
     success,
     error
   });
};
