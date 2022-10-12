class ChartSerializer < ActiveModel::Serializer
  attributes :id, :trading_pair, :image_url, :comment
end
