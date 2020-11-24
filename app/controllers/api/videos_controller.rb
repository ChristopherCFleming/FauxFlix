class API::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render "api/videos/show"
        # render :show   what's difference?
    end

    #trying to render all from genre
    # def show
    #     @videos = Video.all.select(video => video.genre == params[:genre])
    #     render "api/videos/show"
    # end

    def index
        @videos = Video.all
        render "api/videos"
        #render :index   
    end
end
