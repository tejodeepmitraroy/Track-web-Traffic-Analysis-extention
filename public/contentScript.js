// Listen for messages from the dashboard
window.addEventListener('message', (event) => {
  // console.log('Message received in content script:', event.data);
  if (event.data?.type === 'GET_TAB_URL') {
    // Get the current tab URL and send it back
    chrome.runtime.sendMessage({type: 'GET_TAB_URL'}, (response) => {
      if (response?.url) {
        // Send to the parent window (dashboard)
        window.postMessage({type: 'TAB_URL', url: response.url}, '*');
        
        // Also send to the iframe if it exists
        const iframe = document.querySelector('#traffic-extension-panel iframe');
        if (iframe?.contentWindow) {
          iframe.contentWindow.postMessage(
            { type: 'TAB_URL', url: response.url },
            '*'
          );
        }
      }
    });
  }
});