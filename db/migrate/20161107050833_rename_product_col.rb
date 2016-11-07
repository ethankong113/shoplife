class RenameProductCol < ActiveRecord::Migration
  def change
    rename_column :products, :image_url, :img_url
  end
end
