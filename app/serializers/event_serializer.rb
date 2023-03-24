class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :fights

  has_many :fights, serializer: FightSerializer
end
