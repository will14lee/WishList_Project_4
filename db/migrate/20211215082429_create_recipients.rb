class CreateRecipients < ActiveRecord::Migration[6.1]
  def change
    create_table :recipients do |t|
      t.string :user_id
      t.string :name
      t.string :age
      t.string :relationship
      t.string :image_url

      t.timestamps
    end
  end
end
