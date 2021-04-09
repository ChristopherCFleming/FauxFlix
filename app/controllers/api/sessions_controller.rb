class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
  
    if @user
      login(@user)
      render "api/users/show" 
    else
      render json: ["We can't find an account with this email address. Please try again, create a new account, or use the demo login."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render "api/session/create"
    end
  end
end
