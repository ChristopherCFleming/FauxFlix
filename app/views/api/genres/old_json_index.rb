# # Partial: 


# json.id genre.id
# json.name genre.name
# json.videoIds genre.videos.ids 



# Index:
# @genres.each do |genre|
#     json.set! genre.id do
#         json.partial! 'api/genres/genre', genre: genre
#     end
# end