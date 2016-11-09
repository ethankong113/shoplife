class Api::ShopListsController < ApplicationController
  def find_by_username
    user_id = User.find_by_username(params[:username])
    @shops = Shop.where("owner_id = ?", user_id)
    if @shops.nil? == false
      render 'api/shop_lists/find_by_username'
    else
      render json: ["Could not find shops."], status: 400
    end
  end
end
