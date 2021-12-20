class ItemsController < ApplicationController
    before_action :authorize

    # recipients/:recipient_id/items/
    def index 
        items= Recipient.find_by(id: params[:recipients_id]).items
        render json: items
    end

    def show
        item= Recipient.find_by(id: params[:recipients_id]).items
        render json: item 
    end

    def update
        item= Recipient.find_by(id: params[:recipients_id]).items
        item.find_by(id: params[:id]).update(item_params)
        render json: item
    end

    def create
        item= Recipient.find_by(id: params[:recipients_id]).items
        item.create(item_params)
        render json: item, status: :created    end

    def destroy
        item= Recipient.find_by(id: params[:recipients_id]).items
        item.find_by(id: params[:id]).destroy
        head :no_content
    end

    private

    def item_params
        params.permit(:name, :price, :description, :occasion, :image_url)
    end

    def authorize
      render json: { errors: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end
end
