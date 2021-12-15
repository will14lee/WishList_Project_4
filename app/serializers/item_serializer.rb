class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :occasion, :image_url, :recipient
end
