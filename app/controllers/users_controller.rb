class UsersController < ApplicationController
    SECRET_KEY ='w@rr10r$d0r1t0$'
	before_action :authenticate, only: [:show, :me]

    def me 
        render json: {user: @current_user}, status: 200
    end

    def index 
         render json: User.all, status: 200
    end

    def login 
        user = User.find_by!(email: params[:email])
        if user && user.authenticate(params[:password])
            # encode token and send it back
            token = JWT.encode({user_id: user.id, username: user.username}, SECRET_KEY, 'HS256')
			p token
			p'-----token-----'
            #above is the important line
            render json: {user:user, token: token}, status: 200
        else 
            render json: {error: 'invalid email or password'}, status: 422
        end
    end
    def create
        user = User.new(email: params[:email], password: params[:password])
        if user.save
            # create token here
            render json: {user: user, token: nil}, status: 200 
            # there are no params above purposly because we are not passing in the value, which requires params
        else 
            render json: {error: user.errors.full_messages[0], status: 422}
        end
    end
    def show
        # puts @current_user
        user = User.find_by!(id: params[:id])
        if @current_user.id == user.id
            render json: {user: user}, status: 200
        else 
            render json: {error: 'This aint you'}, status: 401
        end
    end

	private 
	def user_params
		params.require(:user).permit(:email,:password)
	end
end
