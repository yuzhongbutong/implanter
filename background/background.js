var isChecked = false;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (isChecked && changeInfo.status == "complete") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {});
    });
  }
});