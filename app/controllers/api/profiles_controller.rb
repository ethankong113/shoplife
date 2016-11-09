class Api::ProfilesController < ApplicationController

  def show
    @profile = User.find_by_username(params[:username])
    if @profile
      render 'api/profiles/show'
    else
      render json: ["Ooops. Could not find the user"], status: 400
    end
  end

  def follow_user
    @following = User.find(params[:following_id])
  end


end