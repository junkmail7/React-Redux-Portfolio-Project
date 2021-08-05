class TrickSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :difficulty, :type_of_trick
  has_many :users
end
