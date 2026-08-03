document.addEventListener('DOMContentLoaded', () => {
  /* Marquee: rellena el ancho de pantalla sin dejar huecos ni repetir de más */
  const marqueeStrip = document.querySelector('.marquee-strip');
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (marqueeStrip && marqueeTrack) {
    const buildMarquee = () => {
      const firstGroup = marqueeTrack.querySelector('.marquee-group');
      if (!firstGroup) return;
      const phrase = firstGroup.querySelector('span');
      if (!phrase) return;

      marqueeTrack.style.animation = 'none';
      marqueeTrack.innerHTML = '';

      const group = document.createElement('div');
      group.className = 'marquee-group';
      group.appendChild(phrase.cloneNode(true));
      marqueeTrack.appendChild(group);

      const targetWidth = marqueeStrip.clientWidth;
      let guard = 0;
      while (group.scrollWidth < targetWidth && guard < 40) {
        group.appendChild(phrase.cloneNode(true));
        guard += 1;
      }

      marqueeTrack.appendChild(group.cloneNode(true));
      // Forzar reflow antes de reactivar la animación
      void marqueeTrack.offsetWidth;
      marqueeTrack.style.animation = '';
    };

    buildMarquee();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildMarquee, 200);
    });
  }

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

  /* Reviews carousel (scroll-snap + flechas) */
  const reviewsTrack = document.getElementById('reviewsTrack');
  if (reviewsTrack) {
    document.querySelectorAll('.reviews-nav [data-scroll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const slide = reviewsTrack.querySelector('.review-slide');
        const step = slide ? slide.getBoundingClientRect().width + 20 : 300;
        reviewsTrack.scrollBy({ left: step * Number(btn.dataset.scroll), behavior: 'smooth' });
      });
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
