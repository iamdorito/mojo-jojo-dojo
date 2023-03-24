class CreateFighters < ActiveRecord::Migration[7.0]
  def change
    create_table :fighters do |t|
      t.string :name
      t.string :nickname
      t.string :gender
      t.integer :gym_id
      t.integer :division_id
      t.integer :wins
      t.integer :losses
      t.string :image
      t.string :status
      t.string :username
      t.string :password_digest
    end
  end
end
