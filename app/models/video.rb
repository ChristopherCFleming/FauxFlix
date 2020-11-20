class Video < ApplicationRecord
    validates :title, :description, :genre_id, null: false

    has_many :video_genres,
        foreign_key: :video_id,
        clas_name: :VideoGenre
end
