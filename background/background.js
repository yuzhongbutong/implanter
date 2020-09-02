chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  chrome.storage.sync.get('isEnabled', function ({ isEnabled }) {
    if (isEnabled && changeInfo.status == "complete") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {});
      });
    }
  });
});