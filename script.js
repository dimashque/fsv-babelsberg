// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const open = !mobileMenu.classList.contains('hidden');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Header scroll effect
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// Simple form validation helper (no fake submit)
document.querySelectorAll('form[data-validate]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let ok = true;
    required.forEach((el) => {
      if (!el.value.trim()) {
        ok = false;
        el.classList.add('ring-2', 'ring-red-400');
      } else {
        el.classList.remove('ring-2', 'ring-red-400');
      }
    });
    const msg = form.querySelector('[data-form-message]');
    if (msg) {
      if (ok) {
        msg.textContent = 'Vielen Dank. Bitte senden Sie die Anfrage per E-Mail an die angegebenen Adressen – dieses Formular speichert keine Daten (Demo).';
        msg.className = 'mt-4 text-sm text-club-green font-medium';
      } else {
        msg.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
        msg.className = 'mt-4 text-sm text-red-600 font-medium';
      }
    }
  });
});
