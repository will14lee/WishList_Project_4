class RecipientsController < ApplicationController
    def index
        recipients=Recipient.all
        render json: recipients
    end
    
    def show
        recipient= this_recipient
        render json: recipient
    end
    
    def update
        recipient= this_recipient
        recipient.update(recipient_params)
        render json: recipient
    end
    
    def create
        recipient=Recipient.create(recipient_params)
        render json: recipient, status: :created
    end
    
    def destroy
        recipient=this_recipient
        recipient.destroy
        head :no_content
    end

    private

    def this_recipient
        Recipient.find_by(params[id: params[:id]])
    end
    def recipient_params
        params.permit(:user_id, :name, :age, :relationship, :image_url)
    end
end
