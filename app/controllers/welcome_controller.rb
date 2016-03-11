class WelcomeController < ApplicationController
  def index
  end

  def message
    p params
    reply = params['text'].upcase + '?'
    ChatInterface.shout(params['text'])
    render json: {status: 200, text: reply}
  end
end
