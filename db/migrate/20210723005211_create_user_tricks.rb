class CreateUserTricks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_tricks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :trick, null: false, foreign_key: true

      t.timestamps
    end
  end
end
