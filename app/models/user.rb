class User < ApplicationRecord
    has_many :user_tricks
    has_many :tricks, :through => :user_tricks
end
