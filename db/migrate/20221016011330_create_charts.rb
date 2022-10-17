class CreateCharts < ActiveRecord::Migration[6.1]
  def change
    create_table :charts do |t|
      t.integer :user_id
      t.string :trading_pair
      t.string :comment
      t.string :image_url

      t.timestamps
    end
  end
end
