class UserTrickSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :trick_id, :proficiency, :id
  belongs_to :user
  belongs_to :trick
end
