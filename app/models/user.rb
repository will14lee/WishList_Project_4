class User < ApplicationRecord
    has_many :recipients
    has_many :items, through: :recipients
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
