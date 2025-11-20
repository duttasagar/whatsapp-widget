// (function () {
//   const script = document.getElementById("my-wa-widget");

//   const phone = script.getAttribute("phone");
//   const message = encodeURIComponent(script.getAttribute("message") || "");
//   const color = script.getAttribute("color") || "#25D366";
//   const label = script.getAttribute("label") || "Chat Now";

//   // 1️⃣ Create the floating button (AiSensy style)
//   const floatBtn = document.createElement("div");
//   floatBtn.id = "wa-floating-btn";
//   floatBtn.style.cssText = `
//     position: fixed;
//     bottom: 25px;
//     right: 25px;
//     background: ${color};
//     color: white;
//     padding: 14px 20px;
//     border-radius: 50px;
//     cursor: pointer;
//     font-family: inherit;
//     font-size: 16px;
//     box-shadow: 0 4px 12px rgba(0,0,0,.2);
//     z-index: 999999;
//   `;
//   floatBtn.innerText = label;

//   document.body.appendChild(floatBtn);

//   // 2️⃣ Create the popup box
//   const popup = document.createElement("div");
//   popup.id = "wa-popup";
//   popup.style.cssText = `
//     position: fixed;
//     bottom: 90px;
//     right: 25px;
//     width: 260px;
//     padding: 16px;
//     background: white;
//     border-radius: 14px;
//     box-shadow: 0 4px 20px rgba(0,0,0,.15);
//     display: none;
//     z-index: 999999;
//     font-family: inherit;
//   `;

//   popup.innerHTML = `
//     <div style="display:flex;justify-content:space-between;align-items:center;">
//       <h4 style="margin:0;font-size:16px;font-weight:bold;">Chat With Us</h4>
//       <span id="wa-close" style="cursor:pointer;font-size:18px;">×</span>
//     </div>

//     <p style="margin:10px 0;">
//       ${decodeURIComponent(message)}
//     </p>

//     <a 
//       href="https://wa.me/${phone}?text=${message}"
//       target="_blank"
//       style="
//         display:block;
//         text-align:center;
//         padding:10px;
//         background:${color};
//         color:white;
//         border-radius:10px;
//         text-decoration:none;
//         margin-top:10px;
//       "
//     >
//       Start Chat
//     </a>
//   `;

//   document.body.appendChild(popup);

//   // 3️⃣ togglePopup() function
//   window.togglePopup = function () {
//     popup.style.display = popup.style.display === "none" ? "block" : "none";
//   };

//   // 4️⃣ Floating button opens popup
//   floatBtn.addEventListener("click", togglePopup);

//   // 5️⃣ Close button
//   popup.querySelector("#wa-close").addEventListener("click", togglePopup);
// })();











1st Code//
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


