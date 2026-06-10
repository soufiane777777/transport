/* ═══════════════════════════════════════════════════
   KARBOLOG — Composants partagés (Header + Footer)
═══════════════════════════════════════════════════ */

const KARBOLOG_HEADER = `
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html" onclick="closeMobileMenu()">Accueil</a>
  <a href="about.html" onclick="closeMobileMenu()">À propos</a>
  <a href="services.html" onclick="closeMobileMenu()">Services</a>
  <a href="contact.html" onclick="closeMobileMenu()">Contact</a>
  <a href="contact.html#devis" class="btn-primary" onclick="closeMobileMenu()">Demander un devis gratuit</a>
</div>

<header id="header">
  <div class="nav-inner">
    <a href="index.html" class="logo">
      <div class="logo-icon">
        <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
      </div>
      KARBO<span class="accent">LOG</span>
    </a>
    <nav class="nav-links">
      <a href="index.html">Accueil</a>
      <a href="about.html">À propos</a>
      <a href="services.html">Services</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="https://wa.me/212600000000" class="btn-whatsapp">
        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        WhatsApp
      </a>
      <a href="contact.html#devis" class="btn-primary">Devis gratuit</a>
    </div>
    <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const KARBOLOG_FOOTER = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo">
        <div class="logo-icon" style="width:34px;height:34px;">
          <svg viewBox="0 0 24 24" style="width:19px;height:19px;"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="white"/></svg>
        </div>
        <div class="footer-logo-text">KARBO<span>LOG</span></div>
      </div>
      <div class="footer-tagline">Votre marchandise, notre priorité. Partout au Maroc. Transport & Logistique Connectée depuis Casablanca.</div>
      <div class="footer-socials">
        <a href="#" class="social-btn">in</a>
        <a href="#" class="social-btn">f</a>
        <a href="#" class="social-btn">ig</a>
        <a href="https://wa.me/212600000000" class="social-btn">wa</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Services</div>
      <div class="footer-links">
        <a href="services.html">Transport National</a>
        <a href="services.html">Distribution Régionale</a>
        <a href="services.html">Transport de Palettes</a>
        <a href="services.html">Messagerie Pro</a>
        <a href="services.html">Transport Dédié</a>
        <a href="services.html">Solutions Logistiques</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Entreprise</div>
      <div class="footer-links">
        <a href="about.html">À propos</a>
        <a href="services.html">Nos services</a>
        <a href="contact.html">Contact</a>
        <a href="contact.html#devis">Demander un devis</a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Coordonnées</div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">📍</div>
        <div class="footer-contact-text">123 Boulevard Zerktouni<br>Casablanca 20000, Maroc</div>
      </div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">📞</div>
        <div class="footer-contact-text"><a href="tel:+212600000000">+212 600 000 000</a></div>
      </div>
      <div class="footer-contact-item">
        <div class="footer-contact-icon">✉️</div>
        <div class="footer-contact-text"><a href="mailto:contact@karbolog.ma">contact@karbolog.ma</a></div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">© 2025 KARBOLOG — Tous droits réservés</div>
    <div class="footer-legal">
      <a href="#">Mentions légales</a>
      <a href="#">Politique de confidentialité</a>
    </div>
  </div>
</footer>

<a href="https://wa.me/212600000000" class="whatsapp-float" aria-label="WhatsApp">
  <div class="whatsapp-float-tooltip">💬 Écrivez-nous sur WhatsApp</div>
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
</a>`;

/* ── Inject header + footer ── */
document.addEventListener('DOMContentLoaded', () => {
  const headerEl = document.getElementById('header-placeholder');
  if (headerEl) headerEl.outerHTML = KARBOLOG_HEADER;

  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.outerHTML = KARBOLOG_FOOTER;
});
