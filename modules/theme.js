// Trocar tema
const theme = document.querySelector('.theme-select');
theme.addEventListener('click', function () {
  const root = document.querySelector(':root');
  if (theme.dataset.theme === 'dark') {
    document.querySelector('link[type="image/x-icon"]').setAttribute('href', './images/favicon-light.ico');
    root.style.setProperty('--color-primary', '#f1f5f9');
    root.style.setProperty('--color-secundary', '#212529');
    root.style.setProperty('--color-primary-strong', '#fff');
    root.style.setProperty('--color-secundary-strong', '#000');
    theme.dataset.theme = 'light';
  } else {
    document.querySelector('link[type="image/x-icon"]').setAttribute('href', './images/favicon-dark.ico');
    root.style.setProperty('--color-primary', '#212529');
    root.style.setProperty('--color-secundary', '#f1f5f9');
    root.style.setProperty('--color-primary-strong', '#000');
    root.style.setProperty('--color-secundary-strong', '#fff');
    theme.dataset.theme = 'dark';
  }
});