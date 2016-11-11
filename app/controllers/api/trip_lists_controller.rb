class Api::TripListsController < ApplicationController
  def find_by_username
    user_id = User.find_by_username(params[:username])
    @trips = Trip.where("user_id = ?", user_id)
    if @trips.nil? == false
      render 'api/trip_lists/index'
    else
      render json: ["Could not find trips."], status: 400
    end
  end
end
