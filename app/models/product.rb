class Product < ActiveRecord::Base
  validates :productname, :shop_id, presence: true
  validate :description_length_limit

  belongs_to :shop
  has_one :user,
  through: :shop,
  source: :user

  def description_length_limit
    return true if self.description.nil?
    self.description.length <= 140
  end

  def verify_price_format
    return true unless self.price
  end

  def round_price
  end
end
