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

demoUser = User.create(email:"testing0@gmail.com", password: "testing0");

sabrina = Video.create!(title: "The Chilling Adventures of Sabrina", description: "Magic and mischief collide as half-human, half-witch Sabrina navigates between two worlds: mortal teen life and her family's legacy, the Church of Night")
sabrinav = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sabrina_final.mp4')
sabrina.video.attach(io: sabrinav, filename: 'sabrina_final.mp4')
sabrina_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sabrina.jpg')
sabrina.thumbnail_url.attach(io: sabrina_t, filename: "sabrina.jpg")

sense8 = Video.create!(title: "Sense 8", description: "Eight strangers from cities around the globe begin having experiences that defy explanation.")
sense8v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sense8_final.mp4')
sense8.video.attach(io: sense8v, filename: 'sense8_final.mp4')
sense8_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sense8.jpg')
sense8.thumbnail_url.attach(io: sense8_t, filename: "sense8.jpg")

becoming = Video.create!(title: "Becoming", description: "Joyful. Honest. Inspiring. Michelle Obama brings us up clsoe and behind the scenes of her history-making book tour.")
becomingv = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/becoming_final.mp4')
becoming.video.attach(io: becomingv, filename: 'becoming_final.mp4')
becoming_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/becoming.jpg')
becoming.thumbnail_url.attach(io: becoming_t, filename: "becoming.jpg")

hill_house = Video.create!(title: "The Haunting of Hill House", description: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.")
hill_housev = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/hill_house_final.mp4')
hill_house.video.attach(io: hill_housev, filename: 'hill_house_final.mp4')
hill_house_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/haunting.jpg')
hill_house.thumbnail_url.attach(io: hill_house_t, filename: "haunting.jpg")

house_of_cards = Video.create!(title: "House of Cards", description: "With Frank out of the pictures, Claire Underwood steps fully into her own as the first woman president, but faces formidable threats to her legacy.")
house_of_cards_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/house_of_cards_final.mp4')
house_of_cards.video.attach(io: house_of_cards_v, filename: 'house_of_cards_final.mp4')
house_of_cards_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/house_of_cards.jpg')
house_of_cards.thumbnail_url.attach(io: house_of_cards_t, filename: "house_of_cards.jpg")

maniac = Video.create!(title: "Maniac", description: "Two struggling strangers connect during a mind-bending pharmaceutical trial involving a doctor with mother issues and an emotionally complex computer.")
maniac_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/maniac_final.mp4')
maniac.video.attach(io: maniac_v, filename: 'maniac_final.mp4')
maniac_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/maniac.jpg')
maniac.thumbnail_url.attach(io: maniac_t, filename: "maniac.jpg")

queens_gambit = Video.create!(title: "Queens Gambit", description: "Sent to an orphanage at age 9, Beth develps an uncanny knack for chess -- and a growing dependence on the green tranquilizers given to the children.")
queens_gambit_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/queens_gambit_final.mp4')
queens_gambit.video.attach(io: queens_gambit_v, filename: 'queens_gambit_final.mp4')
queens_gambit_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/queens_gambit.jpg')
queens_gambit.thumbnail_url.attach(io: queens_gambit_t, filename: "queens_gambit.jpg")

ratched = Video.create!(title: "Ratched", description: "Nurse Mildred Ratched seeks employment at Lucia State Hospital as it prepares to admit a new psychiatric patient: notorious killer Edmund Tolleson.")
ratched_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/ratched_final.mp4')
ratched.video.attach(io: ratched_v, filename: 'ratched_final.mp4')
ratched_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/ratched.jpg')
ratched.thumbnail_url.attach(io: ratched_t, filename: "ratched.jpg")

russian_doll = Video.create!(title: "Russian Doll", description: "On the night of her 36th birthday, Nadia meets an untimely end... then suddenly finds herself back at the party her friends threw for her.")
russian_doll_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/russian_doll_final.mp4')
russian_doll.video.attach(io: russian_doll_v, filename: 'russian_doll_final.mp4')
russian_doll_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/russian_doll.jpg')
russian_doll.thumbnail_url.attach(io: russian_doll_t, filename: "russian_doll.jpg")

sense8 = Video.create!(title: "Sense 8", description: "Eight strangers from different parts of the world discover that they are sensates, human beings who are mentally and emotionally linked.")
sense8_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sense8_final.mp4')
sense8.video.attach(io: sense8_v, filename: 'sense8_final.mp4')
sense8_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/sense8.jpg')
sense8.thumbnail_url.attach(io: sense8_t, filename: "sense8.jpg")

space_force = Video.create!(title: "Space Force", description: "General Mark Naird (Steve Carell) is tasked with establishing the sixth branch of the United States Armed Forces, the United States Space Force.")
space_force_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/space_force_final.mp4')
space_force.video.attach(io: space_force_v, filename: 'space_force_final.mp4')
space_force_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/space_force.jpg')
space_force.thumbnail_url.attach(io: space_force_t, filename: "space_force.jpg")

stranger_things = Video.create!(title: "Stranger Things", description: "As everyone in Hawkinds searches for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces, and one very strange little girl.")
stranger_things_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/stranger_things_final.mp4')
stranger_things.video.attach(io: stranger_things_v, filename: 'stranger_things_final.mp4')
stranger_things_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/stranger_things.jpg')
stranger_things.thumbnail_url.attach(io: stranger_things_t, filename: "stranger_things.jpg")

tidying_up = Video.create!(title: "Tidying Up with Marie Kondo", description: "When people lead busy lives, their homes sometimes become cluttered with things piling up over time. In this series, renowned tidying expert Marie Kondo tries to help folks declutter their homes -- and their lives.")
tidying_up_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/tidying_up_with_marie_kondo_final.mp4')
tidying_up.video.attach(io: tidying_up_v, filename: 'tidying_up_with_marie_kondo_final.mp4')
tidying_up_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/tidying_up.jpg')
tidying_up.thumbnail_url.attach(io: tidying_up_t, filename: "tidying_up.jpg")

tidying_up = Video.create!(title: "Tidying Up with Marie Kondo", description: "When people lead busy lives, their homes sometimes become cluttered with things piling up over time. In this series, renowned tidying expert Marie Kondo tries to help folks declutter their homes -- and their lives.")
tidying_up_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/tidying_up_with_marie_kondo_final.mp4')
tidying_up.video.attach(io: tidying_up_v, filename: 'tidying_up_with_marie_kondo_final.mp4')
tidying_up_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/tidying_up.jpg')
tidying_up.thumbnail_url.attach(io: tidying_up_t, filename: "tidying_up.jpg")

unbreakable = Video.create!(title: "Unbreakable Kimmy Schmidt", description: "Rescued after 15 years in a cult, Kimmy Schmidt decides to reclaim her life by venturing to New York, where she experiences everyday life with wide-eyed enthusiasm.")
unbreakable_v = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/unbreakable_kimmy_schmidt_final.mp4')
unbreakable.video.attach(io: unbreakable_v, filename: 'unbreakable_kimmy_schmidt_final.mp4')
unbreakable_t = open('https://fauxflix-seeds.s3.us-east-2.amazonaws.com/unbreakable.jpg')
unbreakable.thumbnail_url.attach(io: unbreakable_t, filename: "unbreakable.jpg")



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