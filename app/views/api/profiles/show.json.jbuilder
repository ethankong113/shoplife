json.extract! @profile, :id, :username, :firstname, :lastname, :img_url
json.shopCount Shop.where("owner_id = ?", @profile.id).count()
