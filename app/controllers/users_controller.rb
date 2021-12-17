class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :record_not_found

    def create
        user= User.create(user_params)
        if user.valid?&user.password=user.password_confirmation
            session[:user_id]= user.id
            render json: user, status: :created
        else
            render json: { errors: "Password confirmation does not match" }
        end
    end

    def show
        user= User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

    def record_not_found
        return render json: { errors: "Not authorized"}, status: :unauthorized
    end
end
