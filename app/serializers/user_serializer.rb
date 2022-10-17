class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :profile_image

  has_many :charts
end
