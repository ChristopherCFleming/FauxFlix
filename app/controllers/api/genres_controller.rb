class Api::GenresController < ApplicationController
    
    def index
        @genres = Genre.all.includes(:videos)
        render :index
    end
end