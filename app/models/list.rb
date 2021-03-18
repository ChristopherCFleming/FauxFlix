class List < ApplicationRecord
    
    validates :video_id, uniqueness: {scope: :user_id}

    belongs_to :user, 
        class_name: :User, 
        foreign_key: :user_id

    belongs_to :video, 
        class_name: :Video, 
        foreign_key: :video_id

end
