// script.js - Momentos Mágicos

// ==================== INICIALIZAR AOS ====================
AOS.init({
  duration: 900,
  once: false,
  mirror: true,
  offset: 40,
  easing: 'ease-out-cubic'
});

// ==================== EVENTOS AL CARGAR ====================
window.addEventListener('DOMContentLoaded', () => {
  
  // Manejo de errores para el logo
  const logo = document.querySelector('.logo-solo-img');
  if (logo) {
    logo.addEventListener('error', function() {
      this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%23d4af37"/%3E%3Ctext x="50" y="67" font-size="50" text-anchor="middle" fill="white"%3E📷%3C/text%3E%3C/svg%3E';
      this.style.objectFit = 'cover';
    });
  }

  // Actualizar año en footer
  const footerYear = document.querySelector('.footer-note p');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
  }

  console.log('🌴 Momentos Mágicos | Acapulco, Guerrero. ¡Capturamos tu esencia! 📸');
});

// ==================== EFECTO SCROLL BANNER ====================
window.addEventListener('scroll', () => {
  const banner = document.querySelector('.banner-principal-container');
  if (banner) {
    if (window.scrollY > 50) {
      banner.style.boxShadow = '0 40px 50px -5px #000000, 0 0 0 4px #ffeabb';
    } else {
      banner.style.boxShadow = '0 30px 40px #000000dd, 0 0 0 4px #ffeabb';
    }
  }
});