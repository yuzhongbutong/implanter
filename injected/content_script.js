chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var script = document.createElement('script');
  var url = chrome.extension.getURL('injected/process.js');
  script.src = url;
  document.body.appendChild(script);
});