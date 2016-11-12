@profile.followees.each do |followee|
  json.set! followee.id do
    json.extract! followee, :id, :username, :img_url, :firstname, :lastname
  end
end
