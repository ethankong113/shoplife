@shops.each do |shop|
  json.set! shop.id do
    json.extract! shop, :id, :shopname, :img_url
  end
end
