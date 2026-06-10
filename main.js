/* ═══════════════════════════════════════════════════
   KARBOLOG — JavaScript principal
   Transport & Logistique Connectée — Maroc
═══════════════════════════════════════════════════ */

/* ── Header scroll ── */
const header = document.getElementById('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* ── Active nav link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path);
  });
}
document.addEventListener('DOMContentLoaded', setActiveNav);

/* ── Scroll reveal ── */
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
});

/* ── Counter animation ── */
function animateCounter(el, target) {
  let start = 0;
  const duration = 1800;
  const suffix = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.floor(eased * target);
    el.innerHTML = val.toLocaleString('fr-MA') + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.innerHTML = target.toLocaleString('fr-MA') + suffix;
  };
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target);
        animateCounter(e.target, target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
});

/* ── Form : Devis ── */
function submitDevis() {
  const required = ['f-societe','f-contact','f-tel','f-email','f-depart','f-arrivee'];
  let ok = true;
  required.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (!el.value.trim()) { el.style.borderColor = '#ef4444'; ok = false; }
      else el.style.borderColor = '';
    }
  });
  if (!ok) { alert('Veuillez remplir tous les champs obligatoires (*)'); return; }
  const successEl = document.getElementById('devis-success');
  if (successEl) successEl.classList.add('show');
  required.forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
  ['f-service','f-poids','f-date','f-commentaires','f-frequence','f-marchandise','f-source'].forEach(id => {
    const el = document.getElementById(id); if(el) el.value = '';
  });
  const textarea = document.querySelector('#devis-form textarea');
  if (textarea) textarea.value = '';
}

/* ── Form : Contact ── */
function submitContact() {
  const c = document.getElementById('c-nom');
  const e = document.getElementById('c-email');
  const m = document.getElementById('c-message');
  if (!c || !e || !m) return;
  if (!c.value.trim() || !e.value.trim() || !m.value.trim()) {
    alert('Veuillez remplir les champs obligatoires (*)'); return;
  }
  const successEl = document.getElementById('contact-success');
  if (successEl) successEl.classList.add('show');
  ['c-nom','c-societe','c-email','c-tel','c-message'].forEach(id => {
    const el = document.getElementById(id); if(el) el.value = '';
  });
}

/* ── Smooth scroll for anchor links ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMobileMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
