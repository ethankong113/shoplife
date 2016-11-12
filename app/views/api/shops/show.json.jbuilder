json.extract! @shop, :id, :shopname, :description, :location, :lat, :lng, :img_url, :owner_id
json.user_img @shop.user.img_url
json.username @shop.user.username
json.productCount @shop.products.count
