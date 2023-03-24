class Gym < ApplicationRecord
    has_many :fighters
    
    validates :name, uniqueness: true
end
