const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll + close menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');

    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth'
      });

      navLinks.classList.remove("active");
    }
  });
});
