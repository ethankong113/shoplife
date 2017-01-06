@products.each do |product|
  json.set! product.id do
    json.extract! product, :id
    json.lat product.shop.lat
    json.lng product.shop.lng
  end
end
