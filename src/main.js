const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('#navigation');
function closeNavigation() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNavigation(); });
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-category]').forEach(dish => {
      dish.hidden = button.dataset.filter !== 'all' && dish.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
