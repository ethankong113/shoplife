class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  # validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token

  has_many :shops,
  foreign_key: :owner_id,
  dependent: :destroy

  has_many :trips,
  dependent: :destroy

  has_many :products,
  through: :trips,
  source: :products

  has_many :pins,
  through: :trips,
  source: :pins

  attr_reader :password;

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.is_password?(password)
    user
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  has_many :in_follows,
  foreign_key: :followee_id,
  class_name: "Following",
  dependent: :destroy,
  inverse_of: :followee

  has_many :followers,
  through: :in_follows,
  source: :follower

  has_many :out_follows,
  foreign_key: :follower_id,
  class_name: "Following",
  dependent: :destroy,
  inverse_of: :follower

  has_many :followees,
  through: :out_follows,
  source: :followee

  def follows?(followee)
    out_follows.exists?(followee_id: followee.id)
  end


end
