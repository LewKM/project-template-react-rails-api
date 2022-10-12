class CreateCharts < ActiveRecord::Migration[6.1]
  def change
    create_table :charts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :trading_pair
      t.string :image_url
      t.string :comment

      t.timestamps
    end
  end
end
