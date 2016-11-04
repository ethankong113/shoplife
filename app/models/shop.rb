class Shop < ActiveRecord::Base
  validates :shopname, :location, :lat, :lng, :owner_id, presence: true
  validate :description_length_limit
  after_initialize :auto_fill_coords

  belongs_to :user,
  foreign_key: :owner_id

  def auto_fill_coords
    if self.lat.nil? || self.lng.nil?
      self.lat = 37.7811
      self.lng = 122.4115
    end
  end

  def description_length_limit
    return true if self.description.nil?
    self.description.length <= 140
  end

end
