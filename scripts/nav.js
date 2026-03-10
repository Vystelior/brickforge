// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// Start scrolled if not at top
if (window.scrollY > 20) nav.classList.add('scrolled');

// Hamburger menu (mobile)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '68px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(4,6,14,0.98)';
    navLinks.style.padding = '16px 20px';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
    navLinks.style.backdropFilter = 'blur(20px)';
  });
}
