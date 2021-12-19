class ItemsController < ApplicationController
    before_action :authorize
  
    # recipients/:recipient_id/items/
    def index 
        recipient= current_user
        render json: recipient.items
    end
    
    def show
        item= current_user.items.find_by(id: params[:id])
        render json: item 
    end
    
    def update
        item= current_user.items.find_by(id: params[:id])
        item.update(item_params, user_id: User.find_by(session[:user_id]))
        render json: item
    end
    
    def create
        item= current_user.create(item_params, user_id: User.find_by(session[:user_id]))
        render json: item, status: :created
    end
    
    def destroy
        item= current_user.items.find_by(id: params[:id])
        item.destroy
        head :no_content
    end
    
    private
    def current_user
        user= User.find_by(id: session[:user_id])
        user.recipients.find_by(id: params[:recipient_id])
    end
    
    def item_params
        params.permit(:name, :price, :description, :occasion, :image_url, :user_id, :recipient_id)
    end
    
    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
