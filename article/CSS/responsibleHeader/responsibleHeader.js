const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons')

const init = () => {
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
  })
}

if (toggleBtn) {
  init();
}