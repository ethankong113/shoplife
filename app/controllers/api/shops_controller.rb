class Api::ShopsController < ApplicationController

  def create
    @shop = Shop.new(shop_params)
    if @shop.save
      render "api/shops/show"
    else
      render json: @shop.errors.full_messages, status: 400
    end
  end

  def show
    @shop = Shop.find(params[:id])
    if @shop
      render "api/shops/show"
    elsif @shop.nil?
      render json: ["Could not find this product"], status: 400
    end
  end

  def update
  end

  def destroy
  end

  private
  def shop_params
    params.require(:shop).permit(:shopname, :description, :location, :lat, :lng, :img_url, :owner_id)
  end
end
