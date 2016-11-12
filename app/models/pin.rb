class Pin < ActiveRecord::Base
  validates :trip, :product, presence: true
  validates :trip, uniqueness: {scope: :product}

  belongs_to :trip
  belongs_to :product
end
