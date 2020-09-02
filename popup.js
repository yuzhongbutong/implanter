$(function () {
  chrome.storage.sync.get('isEnabled', function({isEnabled}) {
    $('#switchID').attr('checked', isEnabled);
  });
  $('#switchID').click(function () {
    chrome.storage.sync.set({isEnabled: this.checked});
  });
});