// Mobile nav
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Smooth scrolling + active link
document.querySelectorAll('.nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    nav.classList.remove('open');
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Highlight active section on scroll
const links = document.querySelectorAll('.nav a[href^="#"]');
const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));

const setActive = () => {
  let index = sections.findIndex(sec => {
    if (!sec) return false;
    const rect = sec.getBoundingClientRect();
    return rect.top <= 120 && rect.bottom >= 120;
  });
  links.forEach(l => l.classList.remove('active'));
  if (index >= 0) links[index].classList.add('active');
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Rotate wellness tip (changes daily)
const tips = [
  "Stay hydrated! Water supports every function in your body.",
  "Take a 10-minute walk after meals to support digestion.",
  "Get 7–8 hours of sleep to maintain strong immunity.",
  "Wash your hands often to prevent illness.",
  "Manage stress with deep breathing or stretching.",
  "Stand and stretch each hour if you work at a desk.",
  "Aim for colorful fruits & veggies for more vitamins."
];
const tipEl = document.getElementById('wellness-tip');
if (tipEl) {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  tipEl.textContent = tips[dayOfYear % tips.length];
}
