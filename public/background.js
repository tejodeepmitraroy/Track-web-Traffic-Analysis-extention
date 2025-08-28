// // Toggle the side panel when the extension icon is clicked
// chrome.sidePanel.setOptions({
//   enabled: true,
//   path: 'index.html',
//   enabled: true
// });

// chrome.action.onClicked.addListener(async (tab) => {
//   // Toggle the side panel
//   await chrome.sidePanel.setOptions({
//     enabled: true,
//     path: 'index.html',
//     enabled: true
//   });
  
//   // Open the side panel
//   await chrome.sidePanel.open({ windowId: tab.windowId });
// });
chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return;
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["toggleSidebar.js"]
  }).catch(err => {
    console.error("scripting.executeScript failed:", err);
  });
});