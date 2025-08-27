(function () {
  if (document.getElementById("traffic-extension-panel")) return;

  const panel = document.createElement("div");
  panel.id = "traffic-extension-panel";
  panel.style.position = "fixed";
  panel.style.top = "0";
  panel.style.right = "-400px"; // start hidden
  panel.style.width = "400px";
  panel.style.height = "100%";
  panel.style.background = "white";
  panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  panel.style.transition = "right 0.3s ease";
  panel.style.zIndex = "999999";

  document.body.appendChild(panel);

  // load React app bundle into panel
  const iframe = document.createElement("iframe");
  iframe.src = chrome.runtime.getURL("index.html"); // React build
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  panel.appendChild(iframe);

  // Slide in
  requestAnimationFrame(() => {
    panel.style.right = "0px";
  });
})();
