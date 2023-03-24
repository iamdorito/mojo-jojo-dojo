class GymsSerializer < ActiveModel::Serializer
  attributes :id
  
  has_many :fighters
end
