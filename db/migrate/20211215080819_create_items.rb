class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :occasion
      t.string :image_url
      t.string :user_id
      t.string :recipient_id

      t.timestamps
    end
  end
end
