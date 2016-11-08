class Api::ShopListsController < ApplicationController
  def find_by_user_id
    @shops = Shop.where("owner_id = ?", params[:user_id])
    if @shops.nil? == false
      render 'api/shop_lists/find_by_user_id'
    else
      render json: ["Could not find shops."], status: 400
    end
  end
end
