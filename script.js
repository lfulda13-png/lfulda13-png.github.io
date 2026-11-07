// script.js – die wenigen interaktiven Teile der Seite.
// Ohne dieses Skript funktioniert die Seite trotzdem; es ist nur Komfort.

// 1) Hell/Dunkel-Umschalter: merkt sich die Wahl im Browser (localStorage).
const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

toggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) { /* z. B. privates Fenster */ }
});

// 2) Aktuelles Jahr in der Fußzeile.
document.getElementById("year").textContent = new Date().getFullYear();

// 3) Navigation: den Abschnitt hervorheben, der gerade sichtbar ist.
const links = document.querySelectorAll(".nav-list a");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
    });
  });
}, { rootMargin: "-40% 0px -55% 0px" });

document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
