class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_number, :name, :location, :date, :poster_img, :fights

  has_many :fights, serializer: FightSerializer
end
