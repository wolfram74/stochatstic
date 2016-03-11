class ChatInterface
  def self.shout (string)
    input = string
    address = Rails.root.to_s + '/app/assets/python/shoutBot.py'
    %x(python #{address} #{input})
  end
end
