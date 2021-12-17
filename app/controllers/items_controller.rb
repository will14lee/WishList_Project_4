class ItemsController < ApplicationController
    before_action :authorize
  
    def index
        items= users_items.all
        render json: items
    end
    
    def show
        item= this_item
        render json: item
    end
    
    def update
        item= this_item
        item.update(item_params, user_id: User.find_by(session[:user_id]))
        render json: item
    end
    
    def create
        item= users_items.create(item_params, user_id: User.find_by(session[:user_id]))
        render json: item, status: :created
    end
    
    def destroy
        item=this_item
        item.destroy
        head :no_content
    end
    
    private
    def users_items
        user= User.find_by(id: session[:user_id]).recipients.first
        user.items
    end
    
    def this_item
        users_items.find_by(params[id: params[:id]])
    end
    
    def item_params
        params.permit(:name, :price, :description, :occasion, :image_url, :user_id, :recipient_id)
    end
    
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
