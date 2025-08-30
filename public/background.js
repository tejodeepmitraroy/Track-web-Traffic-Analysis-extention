
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "GET_TAB_URL") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ url: tabs[0]?.url || null });
    });
    return true; // keep channel open for async sendResponse
  }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "FETCH_API") {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => {
        sendResponse(data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        sendResponse({ error: err.message });
      });
    return true; // IMPORTANT: keeps sendResponse async
  }
});