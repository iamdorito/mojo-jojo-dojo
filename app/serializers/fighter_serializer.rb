class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :gender, :gym_id, :division_id, :wins, :losses, :image, :status, :username, :gym, :division

    # has_many :fights, serializer: FightSerializer
end
