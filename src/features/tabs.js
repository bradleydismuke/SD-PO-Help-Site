import { $ } from '../core/dom.js';

export function initTabs(defaultId = 'timer') {
  const nav = $('#tabs');
  const sections = [...document.querySelectorAll('main > section')];

  function show(id) {
    if (!sections.some((s) => s.id === id)) id = defaultId;
    sections.forEach((s) => s.classList.toggle('active', s.id === id));
    nav.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b.dataset.id === id));
    history.replaceState(null, '', `#${id}`);
  }

  sections.forEach((s) => {
    const btn = document.createElement('button');
    btn.textContent = s.dataset.tab;
    btn.dataset.id = s.id;
    btn.addEventListener('click', () => show(s.id));
    nav.append(btn);
  });

  show(location.hash.slice(1));
}
