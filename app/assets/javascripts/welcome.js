$('document').ready(function(){
  console.log('loaded')
  $('.chat-input').on('submit', 'form', chatHandler)
})

var chatHandler = function(event){
  event.preventDefault()
  var $target = $(event.target)
  var data = $target.serializeArray()
  chatUpdate('You', {text:data[0].value})
  $target.find('input[type=text]').val('')
  var call = $.ajax({
    url: './message',
    type: 'post',
    data: data
  })
  call.done(responseHandler)
}

var responseHandler = function(response){
  console.log('things happened!')
  console.log(response)
  chatUpdate('SHOUT-BOT', response)
}

var chatUpdate = function(name, content){
  console.log(content)
  var $line = $('<div></div>')
  $line.attr('class', name)
  $line.text(name +' : '+content.text)
  $('.chat-log').append($line)
}
