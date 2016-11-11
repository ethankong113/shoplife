class Api::PinsController < ApplicationController

  def index
    if current_user
      @product = Product.find(params[:id])
      render "api/trip_lists/has_pin.json.jbuilder"
    else
      render json: ["Ooops. Something went wrong. Can't get the pin list"], status: 400
    end
  end

  def create
    @trip = Trip.find(params[:trip_id])
    @product = Product.find(params[:product_id])
    pin = @trip.pins.new(product_id: params[:product_id])
    if pin.save
      render "api/trip_lists/has_pin.json.jbuilder"
    else
      render json: ["Ooops. Something went wrong. Can't pin the product"], status: 400
    end
  end

  def destroy
    @trip = Trip.find(params[:trip_id])
    @product = Product.find(params[:product_id])
    pin = @trip.pins.find_by(product_id: params[:product_id])
    if pin.destroy
      render "api/trip_lists/has_pin.json.jbuilder"
    else
      render json: ["Ooops. Something went wrong. Can't unpin the product"], status: 400
    end
  end

end
