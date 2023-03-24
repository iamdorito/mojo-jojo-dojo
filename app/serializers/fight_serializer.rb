class FightSerializer < ActiveModel::Serializer
  attributes :id, :fighter1_id, :fighter2_id, :event_id, :fighter1, :fighter2, :event
  
  def hello
   'hello'
  end
end
