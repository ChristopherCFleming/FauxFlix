class API::VideosController < ApplicationController
    def show
        @video = Video.find_by(params[:id])
        render "api/videos/show"
        # render :show   here, no difference. BUT, if wanted to render a different show page from a different controller, must use the above version.
    end

    def index
        @videos = Video.all
        render "api/videos"
        #render :index   
    end
end
