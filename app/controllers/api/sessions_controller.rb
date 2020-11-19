class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"   #Show isn't defined here. How can we get to show?
    else
      render json: ["Incorrect password. Please try again or you can reset your password."], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      # render json: ["Nobody signed in"], status: 404  #was this, but need to redirect to login page
      render "api/session/create"
    end
  end
end
