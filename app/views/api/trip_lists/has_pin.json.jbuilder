current_user.trips.each do |trip|
  json.set! trip.id do
    json.extract! trip, :id, :tripname, :img_url
    json.has_pin trip.has_pin?(@product)
  end
end
