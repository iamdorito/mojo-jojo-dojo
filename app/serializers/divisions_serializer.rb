class DivisionsSerializer < ActiveModel::Serializer
  attributes :id

  has_many :fighters
end
