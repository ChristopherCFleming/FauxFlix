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

    def self.find_all
        Video.with_attached_thumbnail_url.all.includes(:genres)
    end

    def self.find_by_id(id)
        Video.with_attached_video_url.with_attached_thumbnail_url.find_by(id: id)
    end

    def self.find_all_by_genre(id)
        Video.joins(:Video_genre).with_attached_thumbnail_url.where('video_type= ? AND genreslinks.genre_id = ?', type, genre_id).includes(:genres)
    end

end
