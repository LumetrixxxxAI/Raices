document.addEventListener('DOMContentLoaded', () => {
  /* Header scroll state */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav toggle */
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => body.classList.remove('nav-open'));
    });
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* Reviews carousel */
  const track = document.querySelector('.reviews-slides');
  const slides = document.querySelectorAll('.review-slide');
  const dotsWrap = document.querySelector('.reviews-nav');
  if (track && slides.length && dotsWrap) {
    let current = 0;
    const dots = [];
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Ver reseña ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    let autoplay = setInterval(() => goTo(current + 1), 6000);
    dotsWrap.addEventListener('mouseenter', () => clearInterval(autoplay));
    dotsWrap.addEventListener('mouseleave', () => {
      autoplay = setInterval(() => goTo(current + 1), 6000);
    });
  }

  /* Cookie banner */
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieKey = 'raices-cookie-consent';
  if (cookieBanner) {
    if (!localStorage.getItem(cookieKey)) {
      setTimeout(() => cookieBanner.classList.add('show'), 900);
    }
    cookieBanner.querySelectorAll('[data-cookie-action]').forEach((btn) => {
      btn.addEventListener('click', () => {
        localStorage.setItem(cookieKey, btn.dataset.cookieAction);
        cookieBanner.classList.remove('show');
      });
    });
  }

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
