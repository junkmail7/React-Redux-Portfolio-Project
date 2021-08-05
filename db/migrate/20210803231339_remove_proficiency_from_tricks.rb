class RemoveProficiencyFromTricks < ActiveRecord::Migration[6.1]
  def change
    remove_column :tricks, :proficiency, :integer
  end
end
