class Lists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer  :user_id
      t.integer :video_id
      t.timestamps
    end
      add_index :lists, [:video_id, :user_id], :unique =>  true
  end
end
