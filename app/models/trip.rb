class Trip < ActiveRecord::Base
  validates :tripname, :user_id, presence: true
  after_initialize :ensure_trip_picture, :ensure_trip_purpose

  belongs_to :user

  has_many :pins,
  dependent: :destroy

  has_many :products,
  through: :pins

  def ensure_trip_picture
    if self.img_url.nil? || self.img_url == ""
      imageURL = ["https://res.cloudinary.com/dmvxkwwde/image/upload/v1481842966/assets/shopping-trolley-full-of-gifts-image-www.pppcorporate.com_.jpg",
      "https://res.cloudinary.com/dmvxkwwde/image/upload/v1481842824/assets/shopping-bis.jpg",
      "http://res.cloudinary.com/dmvxkwwde/image/upload/v1481842797/assets/puppy-with-shopping-cart.jpg"]
      self.img_url = imageURL[rand(0..2)]
    end
  end

  def ensure_trip_purpose
    if self.purpose.nil?
      self.purpose = ""
    end
  end

  def has_pin?(product)
    pins.exists?(product_id: product.id)
  end

  has_many :followings,
  foreign_key: :trip_id,
  class_name: "TripFollow",
  dependent: :destroy,
  inverse_of: :trip

  has_many :followers,
  through: :followings

end
