json.extract! user, :id, :email
json.favorite_benches user.favorite_benches.pluck(:id)
