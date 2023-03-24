class GymsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Gym.all
    end

    def show
        gym = Gym.find_by!(id: params[:id])
        render json: gym
    end

    def create
        gym = Gym.create!(gym_params)
        render json: gym, status: :ok
    end

    def destroy
        gym = Gym.find_by(id: params[:id])
        gym.destroy
        head :no_content
    end

    def update
        gym = Gym.find_by!(id: params[:id])
        render json: gym, status: :ok
    end

    private
    def gym_params 
        params.permit(:name, :state, :insta)
    end

    def render_not_found
        render json: {error: "gym not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
