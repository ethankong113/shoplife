class ChangeColNames < ActiveRecord::Migration
  def change
    rename_column :trip_follows, :user_id, :follower_id
    rename_column :shop_follows, :user_id, :follower_id
  end
end
