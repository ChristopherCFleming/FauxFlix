class API::VideosController < ApplicationController
    def show
        @video = Video.find(params[:id])
        render "api/videos/show"
        # render :show
    end
end
