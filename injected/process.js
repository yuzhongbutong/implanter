$('#loginMessage').modal('close');
$('#input-text').val('skype');
$('#send').click();
$(document).ajaxSuccess(function (event, xhr, options) {
  var text = xhr.responseJSON.output.text;
  if (text.indexOf('こんにちは、Watsonです') !== -1) {
  } else if (text.indexOf('お使いの機器の種類はどちらでしょうか') !== -1) {
    $('#input-text').val('PC');
  } else if (text.indexOf('やりたいことのゴールは何ですか') !== -1) {
    $('#input-text').val('終了する');
  }
  $('#send').click();
});