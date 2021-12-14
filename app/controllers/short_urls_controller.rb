class ShortUrlsController < ApplicationController

  # Since we're working on an API, we don't have authenticity tokens
  skip_before_action :verify_authenticity_token

  def index
  end

  def create
  end

  def show
    short_url = ShortUrl.find_by_short_code(params[:id])
    if short_url.present?
      redirect_to short_url.full_url
    else
      head :not_found
    end
  end

end
