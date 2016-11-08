class ChangeUserImage < ActiveRecord::Migration
  def change
    rename_column :users, :image_url, :img_url
  end
end
