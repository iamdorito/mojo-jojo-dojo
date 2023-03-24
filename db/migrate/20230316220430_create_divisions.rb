class CreateDivisions < ActiveRecord::Migration[7.0]
  def change
    create_table :divisions do |t|
      t.string :name
      t.integer :lbs
      t.integer :kg
    end
  end
end
