@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin.product, :id, :productname, :img_url, :price, :shop_id
  end
end
