class Product < ActiveRecord::Base
  validates :productname, :shop_id, presence: true
  validate :description_length_limit
  before_save :ensure_product_picture, :ensure_product_price

  belongs_to :shop
  has_one :user,
  through: :shop,
  source: :user

  has_many :pins,
  dependent: :destroy

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
    self.img_url = "https://res.cloudinary.com/dmvxkwwde/image/upload/v1483742076/assets/Super-Mario-Question-Mark-Sound-Plush.jpg" if self.img_url == "" || self.img_url.nil?
  end

  def ensure_product_price
    self.price ||= 0
  end
end
