class ChartsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        charts = Chart.all
        render json: charts;
    end

    def show
        user = find_user
        render json: user
    end

    def create
        # create! exceptions will be handled by the rescue_from ActiveRecord::RecordInvalid code
        chart = Chart.create!(chart_params)
        render json: chart, status: :created
    end

    private

    def find_user
        Chart.find(params[:id])
    end

    def chart_params
        params.permit(:user_id, :trading_pair, :image_url, :comment )
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
