class FightSerializer < ActiveModel::Serializer
  attributes :id, :fighter1, :fighter2, :event
  
  # belongs_to :fighter1, serializer: FighterSerializer
  # belongs_to :fighter2, serializer: FighterSerializer
end
