window.dataLayer = window.dataLayer || [];
function track(eventName, params = {}) {
  window.dataLayer.push({ event: eventName, ...params });
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("btnFakeBuy").addEventListener("click", () => {
  track("add_to_cart", { item_name: "Pumpa + Linsgryta" });
  alert("✅ Lades i varukorg (fejk).");
});

document.getElementById("btnSubscribe").addEventListener("click", () => {
  track("subscribe_click", { plan: "monthly" });
  alert("✅ Prenumeration (fejk).");
});

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-track]");
  if (!el) return;
  track(el.getAttribute("data-track"), { text: (el.innerText || "").trim().slice(0, 80) });
});

const form = document.getElementById("leadForm");
const msg = document.getElementById("formMsg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  track("lead_submit");
  msg.textContent = "✅ Tack! (fejk).";
  form.reset();
});

