class RecipientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :relationship, :image_url
  has_many :items
  belongs_to :user
end
