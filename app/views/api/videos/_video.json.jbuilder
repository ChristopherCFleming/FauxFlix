# 
json.id video.id
json.title video.title
json.thumbnailUrl video.thumbnail_url.attached? ? url_for(video.thumbnail_url) : ""
# 
if full_details
    json.videoUrl  video.video_url.attached? ? url_for(video.video_url) : ""
    json.description video.description
    json.createdAt video.created_at
end
json.genreIds video.genres.ids 


