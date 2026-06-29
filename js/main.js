// ─── GUPTA ENTERPRISES — MAIN JS ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {

  // ── Navbar scroll effect ──────────────────────────────────────────────────
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  // ── Hamburger menu ────────────────────────────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { navLinks.classList.remove("open"); });
  });

  // ── Product filter buttons ────────────────────────────────────────────────
  renderProducts("all");
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });

  // ── Scroll reveal ─────────────────────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  const observer  = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach(function (el) { observer.observe(el); });

  // ── Contact form submit ───────────────────────────────────────────────────
  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      success.style.display = "block";
      form.reset();
      setTimeout(function () { success.style.display = "none"; }, 5000);
    });
  }

  // ── Smooth anchor offset (accounts for fixed nav height) ─────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
    });
  });

});
