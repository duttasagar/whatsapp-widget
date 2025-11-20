(function () {
  const script = document.getElementById("my-wa-widget");

  const phone = script.getAttribute("phone");
  const message = encodeURIComponent(script.getAttribute("message") || "");
  const color = script.getAttribute("color") || "#25D366";
  const size = script.getAttribute("size") || "medium";
  const shape = script.getAttribute("shape") || "rounded";
  const label = script.getAttribute("label") || "Chat Now";
  const newTab = script.getAttribute("new-tab") === "true";

  const sizeClass =
    size === "small" ? "padding:6px 14px;font-size:12px" :
    size === "large" ? "padding:14px 30px;font-size:18px" :
    "padding:10px 22px;font-size:15px";

  const shapeClass =
    shape === "pill" ? "border-radius:999px" :
    shape === "square" ? "border-radius:0" :
    "border-radius:12px";

  const container = document.createElement("div");
  container.innerHTML = `
    <a 
      href="https://wa.me/${phone}?text=${message}" 
      ${newTab ? 'target="_blank"' : ""}
      style="
        background:${color};
        color:white;
        display:inline-block;
        font-family:inherit;
        text-decoration:none;
        ${sizeClass};
        ${shapeClass};
        box-shadow:0 4px 12px rgba(0,0,0,.15);
      "
    >
      ${label}
    </a>
  `;

  document.body.appendChild(container.firstElementChild);
})();



