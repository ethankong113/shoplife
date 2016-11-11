class Api::TripsController < ApplicationController
  def create
    @trip = Trip.new(trip_params)
    if @trip.save
      render "api/trips/show"
    else
      render json: ["Something went bad. Please try again"], status: 400
    end
  end

  def show
    @trip = Trip.find(params[:id])
    if @trip
      render "api/trips/show"
    elsif @trip.nil?
      render json: ["Could not find this trip"], status: 400
    end
  end

  def update
    @trip = Trip.find(params[:id])
    if @trip.update(trip_params) && @trip.nil? == false
      render "api/trips/show"
    elsif @trip.nil?
      render json: ["Could not find this trip"], status: 400
    else
      render json: @trip.errors.full_messages, status: 400
    end
  end

  def destroy
    @trip = Trip.find(params[:id])
    if @trip.destroy && @trip.nil? == false
      render "api/trips/show"
    elsif @trip.nil?
      render json: ["Could not find this trip"], status: 400
    else
      render json: @trip.errors.full_messages, status: 400
    end
  end

  private
  def trip_params
    params.require(:trip).permit(:tripname, :purpose, :date, :img_url, :user_id)
  end
end
