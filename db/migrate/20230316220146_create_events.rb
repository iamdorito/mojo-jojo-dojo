class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :event_number
      t.string :name
      t.string :location
      t.string :date
      t.string :poster_img
    end
  end
end
