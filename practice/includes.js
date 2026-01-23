(() => {
  const files = {
    header: "practice/header.html",
    footer: "practice/footer.html",
  };

  async function load(type, el) {
    try {
      const res = await fetch(files[type], { cache: "no-cache" });
      if (!res.ok) throw new Error(res.status);
      el.innerHTML = await res.text();
    } catch (e) {
      el.innerHTML = `<!-- include failed: ${type} -->`;
      console.error("Include error:", type, e);
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const nodes = document.querySelectorAll("[data-include]");
    for (const el of nodes) {
      const type = el.dataset.include;
      if (files[type]) await load(type, el);
    }

    /* Nav toggle (nachdem Header geladen ist) */
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector('nav[role="navigation"]');

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  });
})();
document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file, { cache: "no-cache" });
      if (!res.ok) throw new Error(`HTTP ${res.status} for ${file}`);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error("Include failed:", err);
      el.innerHTML = `<!-- include failed: ${file} -->`;
    }
  }
});
