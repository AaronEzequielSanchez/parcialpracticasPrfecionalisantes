// Scroll suave entre secciones
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Menú móvil
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Animaciones al hacer scroll
const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});

