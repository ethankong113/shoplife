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
    if current_user
      @profile = User.find(params[:followee_id])
      follow = current_user.out_follows.new(followee_id: params[:followee_id])
      if follow.save
        # render 'api/profiles/show'
        render 'api/profiles/profile_with_follower'
      else
        render json: ["Ooops. Something went wrong. Can't follow the user"], status: 400
      end
    else
      render 'api/profiles/show'
    end
  end

  def unfollow_user
    if current_user
      @profile = User.find(params[:followee_id])
      follow = current_user.out_follows.find_by(followee_id: params[:followee_id])
      if follow.destroy
        # render 'api/profiles/show'
        render 'api/profiles/profile_with_follower'
      else
        render json: ["Ooops. Something went wrong. Can't unfollow the user"], status: 400
      end
    else
      render 'api/profiles/show'
    end
  end

  def get_followers
    @profile = User.find_by(username: params[:username])
    if @profile
      render 'api/profiles/follower_list'
    else
      render json: ["Ooops. Something went wrong. Can't get the follower list"], status: 400
    end
  end

  def get_followees
    @profile = User.find_by(username: params[:username])
    if @profile
      render 'api/profiles/followee_list'
    else
      render json: ["Ooops. Something went wrong. Can't get the followee list"], status: 400
    end
  end

end
