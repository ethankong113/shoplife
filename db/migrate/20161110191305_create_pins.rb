class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.integer :trip_id
      t.integer :product_id
      t.timestamps null: false
    end
  end
end
