class FighterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :nickname, :email, :gender, :wins, :losses, :draw, :headshot, :insta, :status, :gym_id, :division_id, :gym, :division

    # has_many :fights, serializer: FightSerializer
end
