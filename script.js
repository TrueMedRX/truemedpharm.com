// Init AOS (Animate On Scroll)
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
const index = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 2) % tips.length;
document.getElementById("wellness-tip").textContent = tips[index];

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Mark active
      document.querySelectorAll('nav a').forEach(a => a.classList.remove("active"));
      this.classList.add("active");
    }
  });
});

// Simple testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.testimonial-dot');
let currentTestimonial = 0;
function showTestimonial(index) {
  testimonials.forEach((el, i) => {
    el.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentTestimonial = index;
}
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showTestimonial(i));
});
// Auto-slide every 7 seconds
setInterval(() => {
  let next = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(next);
}, 7000);

 
