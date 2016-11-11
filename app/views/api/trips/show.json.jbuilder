json.extract! @trip, :id, :tripname, :purpose, :date, :img_url, :user_id
json.user_img @trip.user.img_url
json.username @trip.user.username
json.productCount @trip.products.count
