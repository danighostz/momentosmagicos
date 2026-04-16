// servicios.js - Momentos Mágicos

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

  // Manejo de errores para imágenes de servicios
  const imagenesServicio = document.querySelectorAll('.servicio-img');
  imagenesServicio.forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%231a3a5c"/%3E%3Ctext x="200" y="160" font-size="24" fill="white" text-anchor="middle"%3E📸 Foto próximamente%3C/text%3E%3C/svg%3E';
    });
  });

  // Actualizar año en footer
  const footerYear = document.querySelector('.footer-note p');
  if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
  }

  console.log('🌊 Servicios | Momentos Mágicos Acapulco');
});

// ==================== ANIMACIÓN DE PRECIOS AL HACER HOVER ====================
document.querySelectorAll('.precio-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = '0.2s';
  });
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});