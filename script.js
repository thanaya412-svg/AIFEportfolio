// ===== Custom cursor =====
const cursorDot = document.getElementById('cursorDot');
if (cursorDot) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== Hero terminal typing effect =====
const typedEl = document.getElementById('typedLine1');
const caret1 = document.getElementById('caret1');
const outputBlock = document.getElementById('outputBlock');
const fullText = 'whoami()';

function typeText(el, text, speed = 90) {
  return new Promise((resolve) => {
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function runHeroAnimation() {
  if (!typedEl) return;
  await typeText(typedEl, fullText);
  if (caret1) caret1.style.display = 'none';
  if (outputBlock) {
    outputBlock.style.transition = 'opacity 0.6s ease';
    outputBlock.style.opacity = '1';
  }
}
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(runHeroAnimation, 400);
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(
  '.about-grid, .skills-grid, .project-card, .cert-grid, .contact-grid, .section h2, .section-sub'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ===== Navbar background on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(11, 13, 18, 0.92)';
  } else {
    navbar.style.background = 'rgba(11, 13, 18, 0.75)';
  }
});
