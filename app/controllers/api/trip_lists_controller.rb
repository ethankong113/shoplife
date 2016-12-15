class Api::TripListsController < ApplicationController
  def find_by_username
    user = User.find_by_username(params[:username])
    @trips = user.trips
    if @trips.nil? == false
      render 'api/trip_lists/index'
    else
      render json: ["Could not find trips."], status: 400
    end
  end

  def find_by_follower
    user = User.find_by_username(params[:username])
    @trips = user.followed_trips
    if @trips.nil? == false
      render 'api/trip_lists/index'
    else
      render json: ["Could not find trips."], status: 400
    end
  end

  def find_by_sidebar
    user = User.find_by_username(params[:username])
    @trips = user.trips.order('updated_at DESC').limit(5)
    if @trips.nil? == false
      render 'api/trip_lists/index'
    else
      render json: ["Could not find trips."], status: 400
    end
  end

end
