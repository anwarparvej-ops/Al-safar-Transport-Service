const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Transport enquiry — Al-Safar Transport Service',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Pickup & destination: ${data.get('route')}`,
    `Cargo / job details: ${data.get('details') || 'Not provided'}`
  ].join('\n');
  window.open(`https://wa.me/8801402079408?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
