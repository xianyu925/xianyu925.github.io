const root = document.documentElement;
const button = document.querySelector('[data-theme-toggle]');
const saved = localStorage.getItem('xianyu-theme');
const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (saved === 'dark' || (!saved && preferredDark)) root.dataset.theme = 'dark';

function syncLabel() {
  if (!button) return;
  const dark = root.dataset.theme === 'dark';
  button.textContent = dark ? '☀' : '☾';
  button.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
}

button?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('xianyu-theme', next);
  syncLabel();
});

syncLabel();
