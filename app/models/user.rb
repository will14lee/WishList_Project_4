class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    has_secure_password
    has_many :recipients
    has_many :items, through: :recipients
end
