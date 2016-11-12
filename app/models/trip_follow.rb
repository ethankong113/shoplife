class TripFollow < ActiveRecord::Base
  validates :follower, :trip, presence: true
  validates :follower, uniqueness: {scope: :trip}

  belongs_to :follower,
  class_name: "User"

  belongs_to :trip,
  class_name: "Trip"
end
