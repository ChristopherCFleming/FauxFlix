class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :video_genres,
        foreign_key: :genre_id,
        class_name: :VideoGenre

end
