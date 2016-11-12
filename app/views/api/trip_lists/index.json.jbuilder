@trips.each do |trip|
  json.set! trip.id do
    json.extract! trip, :id, :tripname, :img_url, :user_id
  end
end
