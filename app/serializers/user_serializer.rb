class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tricks
  has_many :tricks
  has_many :user_tricks
end
