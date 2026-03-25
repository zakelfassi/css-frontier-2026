/* ============================================
   Main JS — Minimal interactivity layer.
   Highlight.js init + View Transition triggers.
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize syntax highlighting
  if (typeof hljs !== "undefined") {
    hljs.highlightAll();
  }
});

/* --- View Transitions helper --- */
function viewTransition(callback) {
  if (document.startViewTransition) {
    document.startViewTransition(callback);
  } else {
    callback();
  }
}

/* --- Tab switching for View Transitions demo --- */
document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-vt-tab]");
  if (!tab) return;

  const group = tab.closest("[data-vt-group]");
  if (!group) return;

  const targetId = tab.dataset.vtTab;
  const tabs = group.querySelectorAll("[data-vt-tab]");
  const panels = group.querySelectorAll("[data-vt-panel]");

  viewTransition(() => {
    tabs.forEach((t) => t.classList.toggle("active", t === tab));
    panels.forEach((p) =>
      p.classList.toggle("active", p.dataset.vtPanel === targetId)
    );
  });
});

/* --- @starting-style toggle demo --- */
document.addEventListener("click", (e) => {
  const toggle = e.target.closest("[data-toggle-cards]");
  if (!toggle) return;

  const section = toggle.closest(".experiment");
  const cards = section?.querySelectorAll(".ss-card");
  cards?.forEach((card) => {
    card.hidden = !card.hidden;
  });
});

/* --- @property slider demo --- */
document.addEventListener("input", (e) => {
  const slider = e.target.closest("[data-prop-slider]");
  if (!slider) return;

  const prop = slider.dataset.propSlider;
  const target = slider.closest(".experiment__demo");
  if (target && prop) {
    target.style.setProperty(prop, slider.value);
  }

  // Update value display
  const control = slider.closest(".prop-control");
  const valueEl = control?.querySelector(".prop-control__value");
  if (valueEl) {
    valueEl.textContent = slider.value;
  }
});
