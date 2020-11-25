# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description, null: false

    has_many :video_genres,
        foreign_key: :video_id,
        class_name: :VideoGenre

    has_many :genres,
        through: :video_genres,
        source: :genre

    has_one_attached :video

end
