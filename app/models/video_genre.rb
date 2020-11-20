class VideoGenre < ApplicationRecord
    validates :video_id, :genre_id, presence: true

    belongs_to :Video,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :Genre,
        foreign_key: :genre_id,
        class_name: :Genre
end
