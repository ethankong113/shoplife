json.array! @products do |product|
  json.set! product.id do
    json.extract! product, :id, :productname, :img_url, :price, :shop_id
  end
end
