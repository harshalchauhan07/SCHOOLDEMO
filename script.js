/* ===== NEW FEATURES JS — script.js ke baad load hota hai ===== */

// Scroll progress bar
const progressBar = document.getElementById('scroll-progress');

if (progressBar) {
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Testimonials slider (auto + dots)
const cards = document.querySelectorAll('.testi-card');
const dots = document.querySelectorAll('.testi-dots .dot');
let current = 0;
let timer;

function showTesti(i) {
  cards.forEach(c => c.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  cards[i].classList.add('active');
  dots[i].classList.add('active');
  current = i;
}

function startTesti() {
  timer = setInterval(() => showTesti((current + 1) % cards.length), 5000);
}

dots.forEach((d, i) => d.addEventListener('click', () => {
  clearInterval(timer);
  showTesti(i);
  startTesti();
}));

if (cards.length) startTesti();