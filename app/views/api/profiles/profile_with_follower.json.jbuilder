json.profile do
  json.extract! @profile, :id, :username, :firstname, :lastname, :img_url
  if current_user
    json.followed current_user.follows?(@profile)
  else
    json.followed false
  end
  json.tripCount Trip.where("user_id = ?", @profile.id).count
  json.shopCount Shop.where("owner_id = ?", @profile.id).count
  json.pinCount @profile.products.count
  json.followerCount @profile.in_follows.count
  json.followingCount @profile.out_follows.count
end

json.follower do
  json.extract! current_user, :id, :username, :img_url, :firstname, :lastname
end
