$('#loginMessage').modal('close');
$('#input-text').val('skype');
$('#send').click();
$(document).ajaxSuccess(function (event, xhr, options) {
  if (!xhr || !xhr.responseJSON || !xhr.responseJSON.output || !xhr.responseJSON.output.text) {
    return;
  }console.log(JSON.stringify(xhr.responseJSON))
  var text = xhr.responseJSON.output.text;
  if (text.indexOf('こんにちは、Watsonです') !== -1) {
  } else if (text.indexOf('"PC"') !== -1) {
    $('#input-text').val('PC');
  } else if (text.indexOf('"終了する"') !== -1) {
    $('#input-text').val('終了する');
  } else if (text.indexOf('［終了(X)］を選択する') !== -1) {
    $('#tohelpdesk').click();
    $('#help_desk_name_txt').focus();
    $('#help_desk_name_txt').val('桃　太郎');
    $('#help_desk_address_txt').focus();
    $('#help_desk_address_txt').val('126@126.com');
    $('#help_desk_no_txt').focus();
    $('#help_desk_no_txt').val('050-77887788');
    $('#modalHelpDeskInfoTextarea').focus();
    $('#modalHelpDeskInfoTextarea').val('PC時刻表示横のタスクトレイの▲ボタンをクリック。　※ポインタを合わせると「隠れているインジケーターを表示します」と表示');
  }
  $('#send').click();
});