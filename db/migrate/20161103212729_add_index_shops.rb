class AddIndexShops < ActiveRecord::Migration
  def change
    add_index :shops, :location
    add_index :shops, :lat
    add_index :shops, :lng
  end
end
