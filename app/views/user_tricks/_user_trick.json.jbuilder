json.extract! user_trick, :id, :user_id, :trick_id, :created_at, :updated_at
json.url user_trick_url(user_trick, format: :json)
