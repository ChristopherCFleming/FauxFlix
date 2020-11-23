class Video < ApplicationRecord
    validates :title, :description, :genre_id, null: false

    has_many :video_genres,
        foreign_key: :video_id,
        class_name: :VideoGenre

    has_one_attached :video
end
