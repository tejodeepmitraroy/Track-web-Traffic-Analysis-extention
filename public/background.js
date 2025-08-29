// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;
  console.log(tab);
  
  // Toggle the side panel
  chrome.sidePanel.setOptions({
    enabled: true,
    path: 'index.html'
  }).then(() => {
    return chrome.sidePanel.open({ windowId: tab.windowId });
  }).catch(err => {
    console.error("Error toggling side panel:", err);
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_TAB_URL") {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        sendResponse({ url: tabs[0].url });
      } else {
        sendResponse({ error: 'Could not get tab URL' });
      }
    });
    // Return true to indicate we'll send a response asynchronously
    return true;
  }
});