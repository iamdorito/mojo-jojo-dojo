class Event < ApplicationRecord
    has_many :fights
    has_many :fighters, through: :fights

    validates :event_number, uniqueness: true
end
