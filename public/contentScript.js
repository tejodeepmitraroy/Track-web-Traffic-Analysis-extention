(function () {
  if (document.getElementById("traffic-extension-panel")) return;

  const panel = document.createElement("div");
  panel.id = "traffic-extension-panel";
  Object.assign(panel.style, {
    position: "fixed",
    top: "0",
    right: "-420px",
    width: "420px",
    height: "100vh",
    zIndex: "2147483647",
    boxShadow: "0 0 20px rgba(0,0,0,0.25)",
    borderLeft: "1px solid #e5e7eb",
    background: "white",
    transition: "right 300ms ease",
  });

  const iframe = document.createElement("iframe");
  iframe.src = chrome.runtime.getURL("index.html"); // your React build
  Object.assign(iframe.style, {
    width: "100%",
    height: "100%",
    border: "none",
  });

  panel.appendChild(iframe);
  document.body.appendChild(panel);

  // slide in
  requestAnimationFrame(() => {
    panel.style.right = "0";
  });

  // close on ESC
  const onKey = (e) => {
    if (e.key === "Escape") {
      panel.style.right = "-420px";
      setTimeout(() => panel.remove(), 300);
      window.removeEventListener("keydown", onKey);
    }
  };
  window.addEventListener("keydown", onKey);
})();
