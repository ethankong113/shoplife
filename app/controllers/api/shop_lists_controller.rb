class Api::ShopListsController < ApplicationController
  def find_by_username
    user = User.find_by_username(params[:username])
    @shops = user.shops
    if @shops.nil? == false
      render 'api/shop_lists/index'
    else
      render json: ["Could not find shops."], status: 400
    end
  end

  def find_by_follower
    user = User.find_by_username(params[:username])
    @shops = user.followed_shops
    if @shops.nil? == false
      render 'api/shop_lists/index'
    else
      render json: ["Could not find shops."], status: 400
    end
  end
end
