$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if (height >= 72) {
    $('#tall, #medium, #short').addClass("highlighter");
  } else if (height >= 50) {
    $('#medium, #short').addClass("highlighter");
  } else if (height < 30) {
    $('#short').addClass("highlighter");
  }

});
