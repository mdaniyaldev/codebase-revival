/**
 * Booze Babies Atl — script.js
 * All interactive behavior for the landing page.
 * Sections: Nav | Scroll | Calculator | Form | Copyright | 3D Animations
 * v2: Custom cursor, particles, tilt, parallax, magnetic buttons
 */

'use strict';

/* ============================================================
   CONFIGURABLE ADD-ON PRICING CONSTANTS
   Set these values when the client confirms add-on prices.
   Currently set to 0 as prices are pending confirmation.
   ============================================================ */
const ADDON_LEMONADE_PRICE  = 0;  // TODO: Set Kids Lemonade Bar add-on price (pending client confirmation)
const ADDON_MOCKTAIL_PRICE  = 0;  // TODO: Set Zero-Proof Mocktail Bar add-on price (pending client confirmation)

const BASE_FEE        = 500;
const PER_GUEST_RATE  = 6;

/* ============================================================
   UTILITY HELPERS
   ============================================================ */

/**
 * Format a number as USD currency string.
 * @param {number} amount
 * @returns {string} e.g. "$1,100"
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Smooth-scroll to a target element with optional offset.
 * @param {string} selector - CSS selector or element id
 * @param {number} [offset=80] - px offset from top (for sticky nav)
 */
function bbScrollTo(selector, offset = 80) {
  const el = typeof selector === 'string'
    ? document.querySelector(selector)
    : selector;
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

/* ============================================================
   1. NAVIGATION
   ============================================================ */
(function initNav() {
  const nav        = document.getElementById('mainNav');
  const toggle     = document.getElementById('navToggle');
  const menu       = document.getElementById('navMenu');
  const overlay    = document.getElementById('navOverlay');
  const navLinks   = document.querySelectorAll('.bb-nav__link');
  const sections   = document.querySelectorAll('section[id]');

  if (!nav || !toggle || !menu || !overlay) return;

  /* --- Scrolled state ---------------------------------------- */
  function updateNavScrolled() {
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('is-scrolled', scrolled);
  }
  window.addEventListener('scroll', updateNavScrolled, { passive: true });
  updateNavScrolled();

  /* --- Active nav link on scroll ----------------------------- */
  function updateActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('is-active', href === currentId);
    });
  }
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  /* --- Mobile menu open/close -------------------------------- */
  function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-visible');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  /* Close on nav link click (mobile) */
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) bbScrollTo(target);
      }
    });
  });

  /* Close on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  /* --- CTA in nav -------------------------------------------- */
  const navCta = document.querySelector('.bb-nav__cta');
  if (navCta) {
    navCta.addEventListener('click', (e) => {
      e.preventDefault();
      closeMenu();
      const contact = document.querySelector('#contact');
      if (contact) bbScrollTo(contact);
    });
  }
})();

/* ============================================================
   2. SMOOTH SCROLL — All anchor links
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    if (link.classList.contains('bb-nav__link') || link.classList.contains('bb-nav__cta')) return; // handled above
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      bbScrollTo(target);
    });
  });
})();

/* ============================================================
   3. PRICING CALCULATOR
   ============================================================ */
(function initCalculator() {
  const slider          = document.getElementById('guestSlider');
  const guestDisplay    = document.getElementById('guestDisplay');
  const calcGuestLabel  = document.getElementById('calcGuestLabel');
  const calcPerGuest    = document.getElementById('calcPerGuest');
  const calcTotal       = document.getElementById('calcTotal');
  const lemonadeCheck   = document.getElementById('addonLemonade');
  const mocktailCheck   = document.getElementById('addonMocktail');
  const lemonadeRow     = document.getElementById('lemonadeRow');
  const mocktailRow     = document.getElementById('mocktailRow');
  const calcLemPrice    = document.getElementById('calcLemonadePrice');
  const calcMockPrice   = document.getElementById('calcMocktailPrice');
  const useEstimateBtn  = document.getElementById('useEstimateBtn');

  if (!slider || !guestDisplay || !calcTotal) return;

  /* --- Render add-on price labels with TBC or value ----------- */
  function renderAddonPrice(priceConst, labelEl, priceId) {
    const addon = document.getElementById(priceId);
    if (!addon) return;
    if (priceConst === 0) {
      addon.textContent = 'Price TBC';
      if (labelEl) labelEl.textContent = 'TBC';
    } else {
      addon.textContent = formatCurrency(priceConst);
      if (labelEl) labelEl.textContent = formatCurrency(priceConst);
    }
  }

  renderAddonPrice(ADDON_LEMONADE_PRICE, calcLemPrice, 'lemonade-addon-price');
  renderAddonPrice(ADDON_MOCKTAIL_PRICE, calcMockPrice, 'mocktail-addon-price');

  /* --- Update slider track fill via CSS custom property ------- */
  function updateSliderTrack() {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const val = Number(slider.value);
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.setProperty('--slider-pct', pct + '%');
    slider.setAttribute('aria-valuenow', val);
  }

  /* --- Recalculate and re-render total ----------------------- */
  function recalculate() {
    const guests     = Number(slider.value);
    const addLemon   = lemonadeCheck ? lemonadeCheck.checked : false;
    const addMock    = mocktailCheck ? mocktailCheck.checked : false;

    const perGuest   = guests * PER_GUEST_RATE;
    const lemCost    = addLemon ? ADDON_LEMONADE_PRICE : 0;
    const mockCost   = addMock  ? ADDON_MOCKTAIL_PRICE : 0;
    const total      = BASE_FEE + perGuest + lemCost + mockCost;

    // Guest display
    guestDisplay.textContent = `${guests} guests`;
    if (calcGuestLabel) calcGuestLabel.textContent = guests;
    if (calcPerGuest)   calcPerGuest.textContent = formatCurrency(perGuest);
    if (calcTotal)      calcTotal.textContent = formatCurrency(total);

    // Show/hide add-on rows
    if (lemonadeRow) lemonadeRow.hidden = !addLemon;
    if (mocktailRow) mocktailRow.hidden = !addMock;

    updateSliderTrack();
  }

  /* --- Initial render ----------------------------------------- */
  recalculate();

  /* --- Events ------------------------------------------------- */
  slider.addEventListener('input', recalculate);
  if (lemonadeCheck) lemonadeCheck.addEventListener('change', recalculate);
  if (mocktailCheck) mocktailCheck.addEventListener('change', recalculate);

  /* --- "Use This Estimate & Book Now" button ------------------ */
  if (useEstimateBtn) {
    useEstimateBtn.addEventListener('click', () => {
      const guests    = Number(slider.value);
      const addLemon  = lemonadeCheck ? lemonadeCheck.checked : false;
      const addMock   = mocktailCheck ? mocktailCheck.checked : false;

      const perGuest  = guests * PER_GUEST_RATE;
      const lemCost   = addLemon ? ADDON_LEMONADE_PRICE : 0;
      const mockCost  = addMock  ? ADDON_MOCKTAIL_PRICE : 0;
      const total     = BASE_FEE + perGuest + lemCost + mockCost;

      prefillForm({
        guests,
        budget: formatCurrency(total),
        addLemonade: addLemon,
        addMocktail: addMock,
      });

      const contactSection = document.querySelector('#contact');
      if (contactSection) bbScrollTo(contactSection);
    });
  }
})();

/* ============================================================
   4. FORM PRE-FILL (from calculator)
   ============================================================ */
/**
 * Pre-fill the booking form with values from the calculator.
 * @param {{ guests: number, budget: string, addLemonade: boolean, addMocktail: boolean }} opts
 */
function prefillForm({ guests, budget, addLemonade, addMocktail }) {
  const guestsField    = document.getElementById('fieldGuests');
  const budgetField    = document.getElementById('fieldBudget');
  const svcLemonade    = document.getElementById('svcLemonade');
  const svcMocktail    = document.getElementById('svcMocktail');

  if (guestsField) guestsField.value = guests;
  if (budgetField) budgetField.value = budget;
  if (svcLemonade) svcLemonade.checked = addLemonade;
  if (svcMocktail) svcMocktail.checked = addMocktail;

  // Visual feedback: flash the fields that were filled
  [guestsField, budgetField].forEach(field => {
    if (!field) return;
    field.style.transition = 'background-color 0.4s ease';
    field.style.backgroundColor = 'rgba(201, 168, 76, 0.08)';
    setTimeout(() => { field.style.backgroundColor = ''; }, 1200);
  });
}

/* ============================================================
   5. BOOKING FORM VALIDATION & SUBMISSION
   ============================================================ */
(function initForm() {
  const form       = document.getElementById('bookingForm');
  const submitBtn  = document.getElementById('submitBtn');
  const successEl  = document.getElementById('formSuccess');

  if (!form) return;

  /* --- Validation helpers ------------------------------------ */
  function showError(fieldId, errorId, show) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (field) field.classList.toggle('is-invalid', show);
    if (error) error.hidden = !show;
  }

  function clearError(fieldId, errorId) {
    showError(fieldId, errorId, false);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function isValidPhone(phone) {
    // Allow various US/international formats
    return /^[\d\s\-+().]{7,20}$/.test(phone.trim());
  }

  function isFutureDate(dateString) {
    if (!dateString) return false;
    const selected = new Date(dateString);
    const today    = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }

  /* --- Real-time inline validation on blur ------------------- */
  const inlineValidations = [
    {
      fieldId: 'fieldName',
      errorId: 'errorName',
      validate: () => document.getElementById('fieldName')?.value.trim().length >= 2,
    },
    {
      fieldId: 'fieldEmail',
      errorId: 'errorEmail',
      validate: () => isValidEmail(document.getElementById('fieldEmail')?.value || ''),
    },
    {
      fieldId: 'fieldPhone',
      errorId: 'errorPhone',
      validate: () => isValidPhone(document.getElementById('fieldPhone')?.value || ''),
    },
    {
      fieldId: 'fieldEventType',
      errorId: 'errorEventType',
      validate: () => !!document.getElementById('fieldEventType')?.value,
    },
    {
      fieldId: 'fieldDate',
      errorId: 'errorDate',
      validate: () => isFutureDate(document.getElementById('fieldDate')?.value || ''),
    },
    {
      fieldId: 'fieldGuests',
      errorId: 'errorGuests',
      validate: () => Number(document.getElementById('fieldGuests')?.value) >= 1,
    },
  ];

  inlineValidations.forEach(({ fieldId, errorId, validate }) => {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.addEventListener('blur', () => {
      showError(fieldId, errorId, !validate());
    });
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid')) {
        showError(fieldId, errorId, !validate());
      }
    });
  });

  /* --- Full validation on submit ----------------------------- */
  function validateForm() {
    let valid = true;

    inlineValidations.forEach(({ fieldId, errorId, validate }) => {
      const ok = validate();
      showError(fieldId, errorId, !ok);
      if (!ok) valid = false;
    });

    // Services: at least one checked
    const checkedServices = form.querySelectorAll('input[name="services"]:checked');
    const servicesOk = checkedServices.length > 0;
    showError(null, 'errorServices', !servicesOk);
    const servicesError = document.getElementById('errorServices');
    if (servicesError) servicesError.hidden = servicesOk;
    if (!servicesOk) valid = false;

    return valid;
  }

  /* --- Submit handler ---------------------------------------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstError = form.querySelector('.is-invalid, .bb-form__error:not([hidden])');
      if (firstError) bbScrollTo(firstError, 120);
      return;
    }

    /* --- Collect form data ------------------------------------- */
    const formData = {
      fullName:    document.getElementById('fieldName')?.value.trim(),
      email:       document.getElementById('fieldEmail')?.value.trim(),
      phone:       document.getElementById('fieldPhone')?.value.trim(),
      eventType:   document.getElementById('fieldEventType')?.value,
      eventDate:   document.getElementById('fieldDate')?.value,
      guestCount:  document.getElementById('fieldGuests')?.value,
      services:    [...form.querySelectorAll('input[name="services"]:checked')].map(cb => cb.value),
      budget:      document.getElementById('fieldBudget')?.value.trim(),
      details:     document.getElementById('fieldDetails')?.value.trim(),
      submittedAt: new Date().toISOString(),
    };

    /* -------------------------------------------------------
       BACKEND HOOK — Replace this block to connect a real API.
       Example: await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
       ------------------------------------------------------- */
    console.info('[Booze Babies Atl] Form submission captured (backend not connected):', formData);

    /* --- Show success message --------------------------------- */
    submitBtn.disabled = true;
    submitBtn.textContent = 'Inquiry Captured';

    if (successEl) {
      successEl.hidden = false;
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
})();

/* ============================================================
   6. COPYRIGHT YEAR
   ============================================================ */
(function setCopyrightYear() {
  const el = document.getElementById('copyrightYear');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ============================================================
   7. SCROLL-TRIGGERED REVEAL (class-based, 3D rotateX)
   ============================================================ */
(function initReveal() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const targets = document.querySelectorAll(
    '.bb-about__inner, .bb-exp__content, .bb-service-tile, ' +
    '.bb-port-item, .bb-rates__calculator, .bb-form, ' +
    '.bb-about__stat, .bb-experiences__header, .bb-services__header, ' +
    '.bb-portfolio__header, .bb-rates__intro, .bb-contact__header'
  );

  if (!('IntersectionObserver' in window) || reduced) {
    // Fallback: show everything immediately
    targets.forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    return;
  }

  // Apply sr-ready class (CSS handles the transition)
  targets.forEach(el => el.classList.add('sr-ready'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('sr-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.07,
    rootMargin: '0px 0px -30px 0px',
  });

  targets.forEach(el => observer.observe(el));
})();

/* ============================================================
   8. SET MIN DATE ON EVENT DATE FIELD
   ============================================================ */
(function setMinDate() {
  const dateField = document.getElementById('fieldDate');
  if (!dateField) return;
  const today = new Date();
  const yyyy  = today.getFullYear();
  const mm    = String(today.getMonth() + 1).padStart(2, '0');
  const dd    = String(today.getDate()).padStart(2, '0');
  dateField.setAttribute('min', `${yyyy}-${mm}-${dd}`);
})();

/* ============================================================
   9. SCROLL PROGRESS BAR
   ============================================================ */
(function initProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;
  function updateBar() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width  = pct + '%';
  }
  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
})();

/* ============================================================
   10. GOLD AMBIENT FOLLOWER (Smooth trailing aura without hiding cursor)
   ============================================================ */
(function initCursor() {
  const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasPointer) return;

  const ring = document.getElementById('cursorRing');
  if (!ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let isVisible = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      ringX = mouseX;
      ringY = mouseY;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      ring.style.opacity = '0.85';
      isVisible = true;
    }
  });

  function animateRing() {
    if (isVisible) {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
    }
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state on clickable elements
  const interactives = document.querySelectorAll('a, button, label, [data-tilt], input, select, textarea');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });

  // Hide when mouse exits window
  document.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    isVisible = false;
  });
})();

/* ============================================================
   11. AMBIENT HERO PARTICLES
   ============================================================ */
(function initParticles() {
  const reduced   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const container = document.getElementById('heroParticles');
  if (!container || reduced) return;

  const COUNT = 18;

  for (let i = 0; i < COUNT; i++) {
    const p     = document.createElement('div');
    const isGold = Math.random() > 0.4;
    p.className = `bb-particle ${isGold ? 'bb-particle--gold' : 'bb-particle--white'}`;

    const size     = Math.random() * 80 + 30;         // 30–110px
    const left     = Math.random() * 100;              // % across screen
    const duration = Math.random() * 12 + 10;         // 10–22s
    const delay    = Math.random() * -20;              // stagger start
    const drift    = (Math.random() - 0.5) * 160;     // horizontal drift px

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10%;
      --drift: ${drift}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
  }
})();

/* ============================================================
   12. 3D TILT ON EXPERIENCE STRIPS & PORTFOLIO ITEMS
   Lightweight vanilla implementation — no library needed.
   ============================================================ */
(function initTilt() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  // Add tilt to exp articles and portfolio items programmatically
  const tiltEls = [
    ...document.querySelectorAll('.bb-port-item'),
    ...document.querySelectorAll('.bb-rates__calculator'),
  ];

  tiltEls.forEach(el => {
    // Add shine layer
    const shine = document.createElement('div');
    shine.className = 'tilt-shine';
    el.style.position = 'relative';
    el.appendChild(shine);

    let bounds;
    let rafId;

    function handleMove(e) {
      if (!bounds) bounds = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const x  = clientX - bounds.left;
      const y  = clientY - bounds.top;
      const cx = bounds.width  / 2;
      const cy = bounds.height / 2;

      const rotateY =  ((x - cx) / cx) * 6;  // max ±6deg
      const rotateX = -((y - cy) / cy) * 4;  // max ±4deg

      const pctX = (x / bounds.width  * 100).toFixed(1);
      const pctY = (y / bounds.height * 100).toFixed(1);

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
        shine.style.setProperty('--mouse-x', pctX + '%');
        shine.style.setProperty('--mouse-y', pctY + '%');
      });
    }

    function handleLeave() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = '';
        el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        setTimeout(() => { el.style.transition = ''; }, 500);
      });
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    el.addEventListener('mouseenter', () => {
      bounds = el.getBoundingClientRect();
    });
  });
})();

/* ============================================================
   13. PARALLAX SCROLL — Hero image & experience images
   ============================================================ */
(function initParallax() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  const heroBg  = document.querySelector('.bb-hero__bg-img');
  const expImgs = document.querySelectorAll('.bb-exp__img');

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;

      // Hero parallax — image moves up at 40% scroll speed
      if (heroBg) {
        heroBg.style.transform = `translateY(${sy * 0.38}px) scale(1.08)`;
      }

      // Experience strip images — subtle counter-scroll
      expImgs.forEach((img, i) => {
        const parent = img.closest('.bb-exp');
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const shift    = (progress - 0.5) * 60 * (i % 2 === 0 ? 1 : -1);
        img.style.transform = `translateY(${shift}px) scale(1.08)`;
      });

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initial
})();

/* ============================================================
   14. MAGNETIC BUTTONS — gold CTAs attract to cursor
   ============================================================ */
(function initMagneticButtons() {
  const reduced    = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduced || !hasPointer) return;

  const buttons = document.querySelectorAll('.bb-btn--gold');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * 0.28;
      const dy   = (e.clientY - cy) * 0.28;
      btn.style.transform = `translate(${dx}px, ${dy}px) scale(1.03)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
      setTimeout(() => { btn.style.transition = ''; }, 400);
    });
  });
})();

/* ============================================================
   15. HERO RING — subtle mouse parallax depth
   ============================================================ */
(function initRingParallax() {
  const reduced    = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduced || !hasPointer) return;

  const ring = document.querySelector('.bb-hero__ring');
  if (!ring) return;

  let rafId;
  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx * -14;
      const dy = (e.clientY - cy) / cy * -10;
      ring.style.transform = `translateY(-50%) translate(${dx}px, ${dy}px)`;
    });
  });
})();
