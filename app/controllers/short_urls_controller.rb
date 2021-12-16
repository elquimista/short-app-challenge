class ShortUrlsController < ApplicationController

  # Since we're working on an API, we don't have authenticity tokens
  skip_before_action :verify_authenticity_token

  def index
    respond_to do |format|
      format.json { render json: { urls: ShortUrl.order(click_count: :desc).limit(100) } }
      format.html
    end
  end

  def create
    short_url = ShortUrl.new(short_url_params)
    if short_url.save
      UpdateTitleJob.perform_later(short_url.id)
      render json: { short_code: short_url.short_code }, status: :created
    else
      render json: { errors: short_url.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    short_url = ShortUrl.find_by_short_code(params[:id])
    if short_url.present?
      short_url.update(click_count: short_url.click_count + 1)
      redirect_to short_url.full_url
    else
      head :not_found
    end
  end

  private

  def short_url_params
    params.permit(:full_url)
  end

end
