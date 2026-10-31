/* ── Mobile menu ──────────────────────────────────────────── */

const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const menuLabel = menuToggle?.querySelector<HTMLElement>(".sr-only");

function setMenu(open: boolean, restoreFocus = false) {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.hidden = !open;
  document.body.classList.toggle("menu-open", open);

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

const desktopQuery = window.matchMedia("(min-width: 880px)");
desktopQuery.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

/* ── Media tabs ──────────────────────────────────────────── */

const mediaTabs = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-media-tab]"),
);
const mediaPanels = Array.from(
  document.querySelectorAll<HTMLElement>("[data-media-panel]"),
);

function activateMediaTab(name: string, moveFocus = false) {
  mediaTabs.forEach((tab) => {
    const isActive = tab.dataset.mediaTab === name;
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    if (isActive && moveFocus) tab.focus();
  });

  mediaPanels.forEach((panel) => {
    panel.hidden = panel.dataset.mediaPanel !== name;
  });
}

if (mediaTabs.length > 0 && mediaPanels.length > 0) {
  const initialTab = window.location.hash === "#letterboxd" ? "letterboxd" : "spotify";
  activateMediaTab(initialTab);

  mediaTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      activateMediaTab(tab.dataset.mediaTab ?? "");
    });

    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();

      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % mediaTabs.length;
      if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + mediaTabs.length) % mediaTabs.length;
      }
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = mediaTabs.length - 1;

      const nextTab = mediaTabs[nextIndex];
      if (nextTab) activateMediaTab(nextTab.dataset.mediaTab ?? "", true);
    });
  });

  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#spotify" || window.location.hash === "#letterboxd") {
      activateMediaTab(window.location.hash.slice(1));
    }
  });
}

/* ── Scroll progress ─────────────────────────────────────── */

const progressBar = document.querySelector<HTMLElement>("[data-progress]");
let progressFrame = 0;

function updateProgress() {
  progressFrame = 0;
  if (!progressBar) return;

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  progressBar.style.transform = `scaleX(${progress})`;
}

function requestProgressUpdate() {
  if (!progressFrame) {
    progressFrame = window.requestAnimationFrame(updateProgress);
  }
}

window.addEventListener("scroll", requestProgressUpdate, { passive: true });
window.addEventListener("resize", requestProgressUpdate);
updateProgress();

/* ── Scroll spy ──────────────────────────────────────────── */

const navLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"),
);

const sections = navLinks
  .map((link) => document.getElementById(link.dataset.navLink ?? ""))
  .filter((section): section is HTMLElement => Boolean(section));

const setActiveSection = (id: string) => {
  navLinks.forEach((link) => {
    if (link.dataset.navLink === id) {
      link.dataset.active = "true";
    } else {
      delete link.dataset.active;
    }
  });
};

if ("IntersectionObserver" in window && sections.length > 0) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    },
    { rootMargin: "-38% 0px -52% 0px", threshold: 0 },
  );

  sections.forEach((section) => spy.observe(section));
}

/* ── Reveal on scroll ────────────────────────────────────── */

const revealElements = Array.from(
  document.querySelectorAll<HTMLElement>("[data-reveal]"),
);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

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

/* ── Theme toggle ────────────────────────────────────────── */

const themeToggle = document.querySelector<HTMLButtonElement>(
  "[data-theme-toggle]",
);
const html = document.documentElement;
const themeColorMeta = document.querySelector<HTMLMetaElement>(
  "meta[name='theme-color']",
);

function setTheme(theme: "light" | "dark") {
  html.setAttribute("data-theme", theme);
  themeToggle?.setAttribute("aria-pressed", theme === "dark");
  themeColorMeta?.setAttribute(
    "content",
    theme === "dark" ? "#15140e" : "#f3efe4",
  );
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = html.getAttribute("data-theme") ?? "light";
  setTheme(current === "light" ? "dark" : "light");
}

themeToggle?.addEventListener("click", toggleTheme);

/* ── Copy email ──────────────────────────────────────────── */

const copyButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-copy]"),
);

copyButtons.forEach((button) => {
  const copyText = button.querySelector<HTMLElement>("[data-copy-text]");
  const status = document.querySelector<HTMLElement>("[data-copy-status]");
  const originalLabel = copyText?.textContent ?? "Copy email";
  let resetTimer: number | undefined;

  button.addEventListener("click", async () => {
    const value = button.dataset.copy ?? "";

    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const helper = document.createElement("textarea");
      helper.value = value;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      document.execCommand("copy");
      helper.remove();
    }

    button.classList.add("is-copied");
    if (copyText) copyText.textContent = "Copied!";
    if (status) status.textContent = `${value} copied to clipboard`;

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      button.classList.remove("is-copied");
      if (copyText) copyText.textContent = originalLabel;
      if (status) status.textContent = "";
    }, 2200);
  });
});

/* ── Local time ──────────────────────────────────────────── */

const timeElements = Array.from(
  document.querySelectorAll<HTMLElement>("[data-local-time]"),
);

function updateLocalTimes() {
  timeElements.forEach((element) => {
    const timezone = element.dataset.timezone || "Asia/Jakarta";

    try {
      element.textContent = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: timezone,
      }).format(new Date());
    } catch {
      element.textContent = "—";
    }
  });
}

if (timeElements.length > 0) {
  updateLocalTimes();
  window.setInterval(updateLocalTimes, 30_000);
}
