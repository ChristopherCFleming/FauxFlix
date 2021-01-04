# 
json.id video.id
json.title video.title
json.thumbnail video.thumbnail.attached? ? url_for(video.thumbnail) : ""
# 
if full_details
    json.video  video.video.attached? ? url_for(video.video) : ""
    json.description video.description
    json.createdAt video.created_at
end
json.genreIds video.genres.ids 


