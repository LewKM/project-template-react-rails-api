class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :chart_id
      t.integer :user_id
      t.string :review

      t.timestamps
    end
  end
end
