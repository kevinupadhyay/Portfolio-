const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
const revealItems = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll("[data-count]");
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

const setActiveNav = () => {
  const current = sections
    .slice()
    .reverse()
    .find((section) => section.getBoundingClientRect().top <= 130);

  if (!current) return;

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current.id}`);
  });
};

updateHeader();
setActiveNav();

window.addEventListener(
  "scroll",
  () => {
    updateHeader();
    setActiveNav();
  },
  { passive: true }
);

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  const duration = 1100;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    counter.textContent = Math.round(target * eased);

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    counter.textContent = `${target}${counter.dataset.suffix || ""}`;
  };

  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.75 }
);

counters.forEach((counter) => counterObserver.observe(counter));
