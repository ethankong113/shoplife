class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :tripname, null: false
      t.string :purpose
      t.string :date
      t.string :img_url
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end
