class ItemsController < ApplicationController
     
    def index
        items=Item.all
        render json: items
    end
    
    def show
        item= this_item
        render json: item
    end
    
    def update
        item= this_item
        item.update(item_params)
        render json: item
    end
    
    def create
        item=Item.create(item_params)
        render json: item, status: :created
    end
    
    def destroy
        item=this_item
        item.destroy
        head :no_content
    end

    private

    def this_item
        Item.find_by(params[id: params[:id]])
    end
    def item_params
        params.permit(:name, :price, :description, :occasion, :image_url, :user_id, :recipient_id)
    end

end
