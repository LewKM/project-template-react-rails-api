class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true;

    has_many :charts , dependent: :destroy
    has_many :reviews, through: :charts
end
