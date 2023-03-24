class CreateFights < ActiveRecord::Migration[7.0]
  def change
    create_table :fights do |t|
      t.references :fighter1, null: false, foreign_key: { to_table: :fighters }
      t.references :fighter2, null: false, foreign_key: { to_table: :fighters }
      t.references :event, null: false, foreign_key: true
    end
  end
end
