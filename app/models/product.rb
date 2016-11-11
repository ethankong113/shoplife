class Product < ActiveRecord::Base
  validates :productname, :shop_id, presence: true
  validate :description_length_limit
  after_initialize :ensure_product_picture

  belongs_to :shop
  has_one :user,
  through: :shop,
  source: :user

  has_many :pins
  has_many :trips,
  through: :pins

  def description_length_limit
    return true if self.description.nil?
    self.description.length <= 140
  end

  def verify_price_format
    return true unless self.price
  end

  def round_price
  end

  def ensure_product_picture
    self.img_url = "http://cdn.techgyd.com/2015/11/cute-robot.jpg" if self.img_url == ""
  end
end
