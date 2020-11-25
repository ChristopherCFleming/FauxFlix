require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Video.destroy_all   
Genre.destroy_all
User.destroy_all
VideoGenre.destroy_all

sabrina = Video.create!(title: "The Chilling Adventures of Sabrina", description: "Magic and mischief collide as half-human, half-witch Sabrina navigates between two worlds: mortal teen life and her family's legacy, the Church of Night")
sabrinav = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sabrina_final.mp4')
sabrina.video.attach(io: sabrinav, filename: 'sabrina_final.mp4')

sense8 = Video.create!(title: "Sense 8", description: "Eight strangers from cities around the globe begin having experiences that defy explanation.")
sense8v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sense8_final.mp4')
sense8.video.attach(io: sense8v, filename: 'sense8_final.mp4')

becoming = Video.create!(title: "Becoming", description: "Joyful. Honest. Inspiring. Michelle Obama brings us up clsoe and behind the scenes of her history-making book tour.")
becomingv = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/becoming_final.mp4')
becoming.video.attach(io: becomingv, filename: 'becoming_final.mp4')

hill_house = Video.create!(title: "The Haunting of Hill House", description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.")
hill_housev = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/hill_house_final.mp4')
hill_house.video.attach(io: hill_housev, filename: 'hill_house_final.mp4')




horror = Genre.create!(genre: "Horror")
dark = Genre.create!(genre: "Dark")
comedy = Genre.create!(genre: "Comedy")
sci_fi = Genre.create!(genre: "Sci-Fi")
drama = Genre.create!(genre: "Drama")
fantasy = Genre.create!(genre: "Fantasy")
psychological = Genre.create!(genre: "Psychological Thriller")
politics = Genre.create!(genre: "Politics")
reality_tv = Genre.create!(genre: "Reality Television")

VideoGenre.create!(video_id: sabrina.id, genre_id: horror.id)
VideoGenre.create!(video_id: sabrina.id, genre_id: dark.id)
VideoGenre.create!(video_id: sabrina.id, genre_id: comedy.id)
VideoGenre.create!(video_id: sabrina.id, genre_id: drama.id)

VideoGenre.create!(video_id: sense8.id, genre_id: sci_fi.id)
VideoGenre.create!(video_id: sense8.id, genre_id: drama.id)
VideoGenre.create!(video_id: sense8.id, genre_id: fantasy.id)

VideoGenre.create!(video_id: becoming.id, genre_id: politics.id)

VideoGenre.create!(video_id: hill_house.id, genre_id: horror.id)
VideoGenre.create!(video_id: hill_house.id, genre_id: dark.id)
VideoGenre.create!(video_id: hill_house.id, genre_id: psychological.id)