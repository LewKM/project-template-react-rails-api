class Chart < ApplicationRecord
    validates :trading_pair, presence: true
    validates :image_url, presence: true
    validates :comment, presence: true

    belongs_to :user
    has_many :reviews, dependent: :destroy

end
