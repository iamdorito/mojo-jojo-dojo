class EventsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Event.all
    end

    def show
        event = Event.find_by!(id: params[:id])
        render json: event
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :ok
    end

    def destroy
        event = Event.find_by(id: params[:id])
        event.destroy
        head :no_content
    end

    def update
        event = Event.find_by!(id: params[:id])
        render json: event, status: :ok
    end

    private
    def event_params 
        params.permit(:event_number, :name, :location, :date, :poster_img)
    end

    def render_not_found
        render json: {error: "event not found"}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
