json.extract! @product, :id, :productname, :description, :price, :shop_id, :img_url
json.shop_img @product.shop.img_url
json.shopname @product.shop.shopname
