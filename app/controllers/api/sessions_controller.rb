class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if (@user.nil?)
      render json: ["Could not find users. Please try again!"], status: 401
    elsif (@user && @user.valid?)
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    logout
    render json: ["Logged out successfully. See you again!"]
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
