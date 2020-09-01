var background = chrome.extension.getBackgroundPage();

$(function () {
  var isChecked = background.isChecked;
  $('#switchID').attr('checked', isChecked);
  $('#switchID').click(function () {
    background.isChecked = this.checked;
  });
});