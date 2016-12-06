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
      render json: ["Could not find this shop"], status: 400
    end
  end

  def update
    @shop = Shop.find(params[:id])
    if @shop.update(shop_params) && @shop.nil? == false
      render "api/shops/show"
    elsif @shop.nil?
      render json: ["Could not find this shop"], status: 400
    else
      render json: @shop.errors.full_messages, status: 400
    end
  end

  def destroy
    @shop = Shop.find(params[:id])
    if @shop.destroy && @shop.nil? == false
      render "api/shops/show"
    elsif @shop.nil?
      render json: ["Could not find this shop"], status: 400
    else
      render json: @shop.errors.full_messages, status: 400
    end
  end

  def follow
    if current_user
      @shop = Shop.find(params[:id])
      follow = current_user.shop_follows.new(shop_id: @shop.id)
      if follow.save
        render "api/shops/show"
      else
        render json: ["Could not follow this shop"], status: 400
      end
    else
      render json: ["Could not follow this shop"], status: 400
    end
  end

  def unfollow
    if current_user
      @shop = Shop.find(params[:id])
      follow = current_user.shop_follows.find_by(shop_id: @shop.id)
      if follow.destroy
        render "api/shops/show"
      else
        render json: ["Could not follow this shop"], status: 400
      end
    else
      render json: ["Could not follow this shop"], status: 400
    end
  end

  private
  def shop_params
    params.require(:shop).permit(:shopname, :description, :location, :lat, :lng, :img_url, :owner_id)
  end
end
