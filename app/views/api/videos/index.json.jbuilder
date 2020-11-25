json.extract! @video, :title, :description
json.videoURL url_for(@video.video)
