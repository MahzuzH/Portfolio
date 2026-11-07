/* ── Mobile menu ──────────────────────────────────────────── */

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const menuLabel = menuToggle?.querySelector<HTMLElement>(".sr-only");

function setMenu(open: boolean, restoreFocus = false) {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;

  if (menuLabel) menuLabel.textContent = open ? "Close menu" : "Open menu";
  if (!open && restoreFocus) menuToggle.focus();
}

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
    setMenu(false, true);
  }
});

const desktopQuery = window.matchMedia("(min-width: 980px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

/* ── Project carousel ─────────────────────────────────────── */

document.querySelectorAll<HTMLElement>("[data-projects]").forEach((root) => {
  const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-project-slide]"));
  const dots = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-project-dot]"));
  if (slides.length === 0) return;

  let current = 0;

  const show = (index: number) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.dataset.active = String(i === current);
    });
    dots.forEach((dot, i) => {
      dot.dataset.active = String(i === current);
      dot.setAttribute("aria-selected", String(i === current));
      dot.tabIndex = i === current ? 0 : -1;
    });
  };

  root.querySelector("[data-project-prev]")?.addEventListener("click", () => show(current - 1));
  root.querySelector("[data-project-next]")?.addEventListener("click", () => show(current + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));

  root.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    show(current + (event.key === "ArrowRight" ? 1 : -1));
  });

  show(0);
});

/* ── Reveal on scroll ────────────────────────────────────── */

const revealElements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -7% 0px", threshold: 0.04 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

/* ── Word reveal ─────────────────────────────────────────── */

const wordElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal-words .word"));

if ("IntersectionObserver" in window && wordElements.length > 0 && !prefersReducedMotion) {
  const wordObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-lit");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -35% 0px", threshold: 0 },
  );

  wordElements.forEach((word) => wordObserver.observe(word));
} else {
  wordElements.forEach((word) => word.classList.add("is-lit"));
}