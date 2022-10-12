class Chart < ApplicationRecord

    belongs_to :user

    validates :pair, presence: true
    validates :comment, length: { minimum: 50 }
end
