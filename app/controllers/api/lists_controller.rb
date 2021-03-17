class Api::ListsController < ApplicationController
    before_action :ensure_signed_in, only: [:index, :create, :destroy]

    def index
       if params[:user_id]
            @lists = List.where(user_id: params[:user_id])
            render :index
       else
        my_render(422, "Nothing to process!")
        # render json: ["Nothing to process!"], status: 422
       end
    end

    def create 
        @list = list.new(list_params)
        if @list.save!
            render :show
        else
            my_render(422, @list.errors.full_messages)
            # render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        
        @list = List.find_by(video_id: list_params[:video_id], user_id: list_params[:user_id])
        if List.destroy(@list.id)
            my_render(200)
        else
            my_render(404, @list.errors.full_messages)
        end
    end

    private
    def list_params
        params.require(:list).permit(:video_id, :user_id)
    end
    
end