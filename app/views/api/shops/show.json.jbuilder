json.extract! @shop, :id, :shopname, :description, :location, :lat, :lng, :img_url, :owner_id
json.user_img @shop.user.img_url
json.username @shop.user.username
json.productCount @shop.products.count
json.followerCount @shop.followers.count
if current_user
  json.followed current_user.follows_shop?(@shop)
else
  json.followed false
end
