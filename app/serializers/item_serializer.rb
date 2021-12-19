class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :occasion, :image_url, :recipient
  belongs_to :recipient
  belongs_to :user
end
