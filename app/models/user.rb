class User < ApplicationRecord
    has_many :recipients
    has_many :items, through: :recipients
    has_secure_password
    validates :user, presence: true, uniqueness: true
end
