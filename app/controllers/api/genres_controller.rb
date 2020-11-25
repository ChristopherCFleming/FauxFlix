class Api::GenresController < ApplicationController
    
    # def index   #Maybe for later when you have videos up and running
    #     @genres = Genre.all 
    #     render :index
    # end
    
    def show
        @genre = Genre.find_by(params[:id])
        @videos_in_genre = @genre.video_ids
        render "api/genre/id"
    end
end