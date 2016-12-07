@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin.product, :id, :productname, :img_url, :price, :shop_id
    json.trip_id pin.trip.id
    json.pin_id pin.id
  end
end
