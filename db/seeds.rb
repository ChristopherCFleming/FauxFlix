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
sense8 = Video.create!(title: "Sense 8", description: "Eight strangers from cities around the globe begin having experiences that defy explanation.")
becoming = Video.create!(title: "Becoming", description: "Joyful. Honest. Inspiring. Michelle Obama brings us up clsoe and behind the scenes of her history-making book tour.")
hill_house = Video.create!(title: "The Haunting of Hill House", description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.")

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