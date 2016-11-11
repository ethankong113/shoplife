class ShopFollow < ActiveRecord::Base
  validates :follower, :shop, presence: true
  validates :follower, uniqueness: {scope: :shop}

  belongs_to :follower,
  class_name: "User"

  belongs_to :shop,
  class_name: "Shop"
end
