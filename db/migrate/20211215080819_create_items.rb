class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.float :price
      t.text :description
      t.string :occasion
      t.string :image_url
      t.string :recipient

      t.timestamps
    end
  end
end
