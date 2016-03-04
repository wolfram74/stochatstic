class WelcomeController < ApplicationController
  def index
  end

  def message
    p params
    reply = params['text'].upcase + '?'
    render json: {status: 200, text: reply}
  end
end
