class VideosController < ApplicationController
    def create(video_params)
        video = Video.new(video_params)
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def video_params(params)
        params.require(:video).permit(:title, :description, :genre_id)
    end
end
