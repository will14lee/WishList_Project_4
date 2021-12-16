class RecipientsController < ApplicationController
    def index
        recipients= users_recipients.all
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
        recipient= users_recipients.create(recipient_params)
        render json: recipient, status: :created
    end
    
    def destroy
        recipient=this_recipient
        recipient.destroy
        head :no_content
    end

    private
    def users_recipients
        user= User.find_by(id: session[:user_id])
        user.recipients
    end

    def this_recipient
        users_recipients.find_by(params[id: params[:id]])
    end
    def recipient_params
        params.permit(:user_id, :name, :age, :relationship, :image_url)
    end
end
