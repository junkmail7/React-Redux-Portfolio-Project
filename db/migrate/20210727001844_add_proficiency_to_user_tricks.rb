class AddProficiencyToUserTricks < ActiveRecord::Migration[6.1]
  def change
    add_column :user_tricks, :proficiency, :integer
  end
end
