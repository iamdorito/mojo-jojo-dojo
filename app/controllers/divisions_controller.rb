class DivisionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Division.all
    end

    def show
        division = Division.find_by!(id: params[:id])
        render json: division
    end

    private
    def render_not_found
        render json: {error: "division not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
