const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
}

toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const light = document.body.classList.contains('light-theme');
  localStorage.setItem('theme', light ? 'light' : 'dark');
  updateThemeButton();
});

function updateThemeButton() {
  const light = document.body.classList.contains('light-theme');
  if (toggleBtn) {
    toggleBtn.querySelector('.theme-icon').textContent = light ? '☀' : '☾';
    toggleBtn.querySelector('.theme-label').textContent = light ? 'Light' : 'Dark';
  }
}

updateThemeButton();

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const lightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeButton = document.querySelector('.lightbox-close');

document.querySelectorAll('.project-screenshots img').forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('active');
  });
});

closeButton?.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
