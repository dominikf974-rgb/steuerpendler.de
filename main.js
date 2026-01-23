// =========================
// SteuerPendler – main.js
// Nav toggle + UX
// =========================
(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector('nav[role="navigation"]');

  if (toggle && nav) {
    const closeNav = () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };

    const openNav = () => {
      nav.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("open");
      isOpen ? closeNav() : openNav();
    });

    // Close when clicking a nav link (mobile)
    nav.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      closeNav();
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
      if (!clickedInside) closeNav();
    });
  }

  // Optional: smooth scroll for skip link & anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
