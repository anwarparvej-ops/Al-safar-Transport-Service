const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.textContent = open ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) { menuButton.textContent = '☰'; menuButton.setAttribute('aria-label', 'Open navigation'); }
}));
document.getElementById('year').textContent = new Date().getFullYear();

const quoteForm = document.getElementById('quoteForm');
quoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const data = new FormData(quoteForm);
  const lines = [
    'Hello Al-Safar Transport Service, I would like to request a transport quote.',
    '',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Container size: ${data.get('container')}`,
    `Pickup: ${data.get('pickup')}`,
    `Delivery: ${data.get('delivery')}`,
    `Preferred date: ${data.get('date') || 'Not specified'}`,
    `Company: ${data.get('company') || 'Not specified'}`,
    `Additional details: ${data.get('details') || 'None'}`
  ];
  const url = 'https://wa.me/8801402079408?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener,noreferrer');
});
