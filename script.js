
document.addEventListener('DOMContentLoaded', function () {
  // Animate scroll reveal on features
  const features = document.querySelectorAll('.feature');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;
      }
    });
  }, { threshold: 0.3 });

  features.forEach(f => {
    f.style.opacity = 0;
    f.style.transform = 'translateY(40px)';
    observer.observe(f);
  });
});
