class Trick < ApplicationRecord
    has_many :user_tricks
    has_many :users, :through => :user_tricks
end
