class Api::VideosController < ApplicationController

    def index 
        if params[:genre_id]
            @videos = Video.find_all_by_genre(params[:genre_id])
            render :index
        else
            @videos = Video.all
            render :index
        end
    end


    def show
        @video = Video.find(params[:id])
        render :show
    end
end
