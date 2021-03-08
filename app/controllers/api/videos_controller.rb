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
        # render "api/videos/show"
        render :show
        #    here, no difference. BUT, if wanted to render a different show page from a different controller, must use the above version.
    end

end
