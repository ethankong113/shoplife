class CreateShops < ActiveRecord::Migration
  def change
    create_table :shops do |t|
      t.string :shopname, null: false
      t.string :description
      t.string :location, null: false
      t.decimal :lat, null: false
      t.decimal :lng, null: false
      t.string :img_url
      t.integer :owner_id, null: false
      t.timestamps null: false
    end
  end
end
