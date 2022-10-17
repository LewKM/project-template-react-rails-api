class ChartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :trading_pair, :comment, :image_url

  belongs_to :user
  has_many :reviews
end
