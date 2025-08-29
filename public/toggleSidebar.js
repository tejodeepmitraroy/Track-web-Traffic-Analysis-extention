// (function () {
//   if (document.getElementById("my-extension-sidebar")) {
//     document.getElementById("my-extension-sidebar").remove();
//     return;
//   }

//   const sidebar = document.createElement("div");
//   sidebar.id = "my-extension-sidebar";
//   sidebar.style.position = "fixed";
//   sidebar.style.top = "0";
//   sidebar.style.right = "0";
//   sidebar.style.width = "400px";
//   sidebar.style.height = "100%";
//   sidebar.style.background = "#fff";
//   sidebar.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
//   sidebar.style.zIndex = "999999";
//   sidebar.style.transition = "transform 0.3s ease-in-out";
//   sidebar.style.transform = "translateX(100%)";

//   document.body.appendChild(sidebar);

//   setTimeout(() => {
//     sidebar.style.transform = "translateX(0)";
//   }, 50);

  
//   const script = document.createElement("script");
//   script.src = chrome.runtime.getURL("main.tsx");
//   document.body.appendChild(script);
// })();

(function () {
  const IFRAME_ID = "track-web-sidebar-iframe";

  // If already present, remove it (toggle)
  const existing = document.getElementById(IFRAME_ID);
  if (existing) {
    existing.remove();
    return;
  }

  // Create container for overlay (so we can animate and click outside to close)
  const container = document.createElement("div");
  container.id = "track-web-sidebar-container";
  Object.assign(container.style, {
    position: "fixed",
    top: "0",
    right: "0",
    width: "0",             // start collapsed for animation
    height: "100%",
    zIndex: 999999,
    transition: "width 240ms ease-in-out",
    pointerEvents: "auto"
  });

  // overlay to cover page when sidebar open (optional closable layer)
  const overlay = document.createElement("div");
  overlay.id = "track-web-sidebar-overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.12)",
    zIndex: 999998,
    opacity: "0",
    transition: "opacity 200ms ease-in-out"
  });

  overlay.addEventListener("click", () => {
    // clicking overlay removes the sidebar
    const iframe = document.getElementById(IFRAME_ID);
    if (iframe) {
      iframe.remove();
    }
    container.remove();
    overlay.remove();
  });

  // Create the iframe
  const iframe = document.createElement("iframe");
  iframe.id = IFRAME_ID;
  iframe.src = chrome.runtime.getURL("index.html");
  Object.assign(iframe.style, {
    width: "500px",
    height: "100%",
    border: "none",
    boxShadow: "0 0 16px rgba(0,0,0,0.25)",
    background: "white",
    display: "block",
    float: "right"
  });

  // Add elements to document
  document.body.appendChild(overlay);
  container.appendChild(iframe);
  document.body.appendChild(container);

  // Force a small delay to trigger CSS transition
  setTimeout(() => {
    overlay.style.opacity = "1";
    container.style.width = "400px";
  }, 20);

  // Clean up if the iframe gets removed externally
  const obs = new MutationObserver(() => {
    if (!document.getElementById(IFRAME_ID)) {
      overlay.remove();
      container.remove();
      obs.disconnect();
    }
  });
  obs.observe(document.body, { childList: true, subtree: false });
})();