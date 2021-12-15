class RecipientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :relationship, :image_url
end
