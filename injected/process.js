$('#loginMessage').modal('close');
$('#input-text').val('skype');
$('#send').click();
$(document).ajaxSuccess(function (event, xhr, options) {
  var text = xhr.responseJSON.output.text;
  if (text.indexOf('こんにちは、Watsonです') !== -1) {
  } else if (text.indexOf('"PC"') !== -1) {
    $('#input-text').val('PC');
  } else if (text.indexOf('"終了する"') !== -1) {
    $('#input-text').val('終了する');
  }
  $('#send').click();
});