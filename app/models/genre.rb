# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
    validates :genre, presence: true

    has_many :video_genres,
        foreign_key: :genre_id,
        class_name: :VideoGenre

end
