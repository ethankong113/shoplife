class Trip < ActiveRecord::Base
  validates :tripname, :user_id, presence: true
  after_initialize :ensure_trip_picture

  belongs_to :user

  has_many :pins,
  dependent: :destroy

  has_many :products,
  through: :pins

  def ensure_trip_picture
    if self.img_url == ""
      self.img_url = "http://betanews.com/wp-content/uploads/2014/02/Mobile-shopping-525x600.jpg"
    end
  end

  def has_pin?(product)
    pins.exists?(product_id: product.id)
  end

end
