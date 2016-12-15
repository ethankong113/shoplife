@followers.each do |follower|
  json.set! follower.id do
    json.extract! follower, :id, :username, :img_url
  end
end
