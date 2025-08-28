chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;

  // toggle: remove the panel if it already exists
  await chrome.scripting
    .executeScript({
      target: { tabId: tab.id },
      func: () => {
        const existing = document.getElementById("traffic-extension-panel");
        if (existing) {
          existing.remove();
          return true;
        }
        return false;
      },
    })
    .then(async (results) => {
      const removed = results?.[0]?.result;
      if (removed) return;

      // create the panel container and slide it in
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.js"],
      });
    });
});
