class Api::ListsController < ApplicationController
    before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        # @lists = List.where(user_id: params[:user_id])
        @lists = current_user.lists
       if @lists
            render :index
       else
        render json: ["Nothing Here"], status: 422
       end
    end

    def create 
        @list = List.new(list_params)
        # removed bang from below for Heroku
        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show 
        @list = List.find(params[:id])
        if @list 
            render :show
       else
            render json: ["Nothing Here"], status: 422
       end
    end

    def destroy
        @list = List.find_by(video_id: list_params[:video_id], user_id: list_params[:user_id])
        if List.destroy(@list.id)
            # Not sure about also adding the status below. Necessary?
            render :show, status: 200
        else
            # Just copied from line 18. Is correct?
            render json: @list.errors.full_messages, status: 422
        end
    end

    private
    def list_params
        params.require(:list).permit(:video_id, :user_id)
    end
    
end