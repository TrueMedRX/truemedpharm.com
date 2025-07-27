// AOS animation init
AOS.init();

// Daily rotating wellness tip
const tips = [
  "Stay hydrated! Water supports every function in your body.",
  "Take a 10-minute walk after meals to support digestion.",
  "Get 7–8 hours of sleep to maintain strong immunity.",
  "Wash your hands often to prevent illness.",
  "Manage stress with deep breathing or stretching."
];

const today = new Date();
const index =
  Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 2) % tips.length;
document.getElementById("wellness-tip").textContent = tips[index];

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
