class FightersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Fighter.all
    end

    def show
        fighter = Fighter.find_by!(id: params[:id])
        render json: fighter
    end

    def create
        fighter = Fighter.create!(fighter_params)
        render json: fighter, status: :ok
    end

    def destroy
        fighter = Fighter.find_by!(id: params[:id])
        fighter.destroy
        head :no_content
    end

    def update
        #byebug
        fighter = Fighter.find_by(id: params[:id])
        fighter.update!(fighter_params)
        render json: fighter, status: :ok
    end

    private
    def fighter_params 
        params.permit(:id, :first_name, :last_name, :email, :gender, :gym_id, :division_id, :wins, :losses, :draw, :status, :password_digest)
    end

    def render_not_found
        render json: {error: "fighter not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
