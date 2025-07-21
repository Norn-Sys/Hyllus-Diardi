// Tambahkan di file script.js
window.addEventListener('scroll', function () {
  const btn = document.getElementById('scrollTopBtn');
  btn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

document.getElementById('scrollTopBtn').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
