json.id video.id
json.title video.title
json.thumbnail url_for(video.thumbnail)
json.video url_for(video.video)
json.description video.description
json.createdAt video.created_at
json.genreIds video.genres.ids
