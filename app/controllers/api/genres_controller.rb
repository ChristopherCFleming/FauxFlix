class Api::GenresController < ApplicationController
    
    # def index   #Maybe for later when you have videos up and running
    #     @genres = Genre.all 
    #     render :index
    # end
    
    def index
        @genres = Genre.all.includes(:videos)
        render :index
    end
end