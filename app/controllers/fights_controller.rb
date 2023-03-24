class FightsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Fight.all
    end

    def show
        fight = Fight.find_by!(id: params[:id])
        render json: fight
    end

    def create
        fight = Fight.create!(fight_params)
        render json: fight, status: :ok
    end

    def destroy
        fight = Fight.find_by(id: params[:id])
        fight.destroy
        head :no_content
    end

    def update
        fight = Fight.find_by!(id: params[:id])
        render json: fight, status: :ok
    end

    private
    def fight_params
        # prevent 2 of the same fighters in 1 fight
        if(params[:fighter1_id] == params[:fighter2_id])
            return 'error'
        else
            return params.permit(:fighter1_id, :fighter2_id, :event_id)
        end
    end

    def render_not_found
        render json: {error: "fight not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
