class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :chart_id, :user_id, :review

  # belongs_to :chart
  belongs_to :user

end
