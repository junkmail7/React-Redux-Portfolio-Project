class CreateTricks < ActiveRecord::Migration[6.1]
  def change
    create_table :tricks do |t|
      t.string :name
      t.integer :difficulty
      t.string :type_of_trick

      t.timestamps
    end
  end
end
