json.extract! @trip, :id, :tripname, :purpose, :date, :img_url, :user_id
json.user_img @trip.user.img_url
json.username @trip.user.username
json.productCount @trip.products.count
json.followerCount @trip.followers.count
if current_user
  json.followed current_user.follows_trip?(@trip)
else
  json.followed false
end
