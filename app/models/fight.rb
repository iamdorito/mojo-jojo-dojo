class Fight < ApplicationRecord
  belongs_to :fighter1, class_name: 'Fighter'
  belongs_to :fighter2, class_name: 'Fighter'
  belongs_to :event

  # need to add that fighters cannot fight themselves & fighter cannot fight same event
end