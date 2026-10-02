'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('open', expanded);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
const dialog = document.querySelector('#store-dialog');
document.querySelectorAll('[data-store]').forEach(button => {
  button.addEventListener('click', () => {
    dialog.querySelector('p').textContent = `O aplicativo MovMed ainda está em desenvolvimento. O link para a ${button.dataset.store} será disponibilizado aqui após a publicação na loja.`;
    dialog.showModal();
  });
});
dialog.querySelectorAll('.dialog-close, .dialog-dismiss').forEach(button => {
  button.addEventListener('click', () => dialog.close());
});
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
