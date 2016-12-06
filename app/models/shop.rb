class Shop < ActiveRecord::Base
  validates :shopname, :location, :lat, :lng, :owner_id, presence: true
  validate :description_length_limit
  after_initialize :auto_fill_coords, :ensure_shop_picture

  belongs_to :user,
  foreign_key: :owner_id

  has_many :products,
  dependent: :destroy

  def auto_fill_coords
    if self.lat.nil? || self.lng.nil?
      self.lat = 37.7811
      self.lng = 122.4115
    end
  end

  def ensure_shop_picture
    if self.img_url.nil? || self.img_url == ""
      self.img_url = "http://freedesignfile.com/upload/2012/07/000b_134162855718134.jpg"
    end
  end

  def description_length_limit
    return true if self.description.nil?
    self.description.length <= 140
  end

  has_many :followings,
  foreign_key: :shop_id,
  class_name: "ShopFollow",
  dependent: :destroy,
  inverse_of: :shop

  has_many :followers,
  through: :followings

end
