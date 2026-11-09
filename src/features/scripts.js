import { $, esc } from '../core/dom.js';
import { SCRIPTS } from '../data/scripts.js';

export function initScripts() {
  $('#scriptList').innerHTML = SCRIPTS.map(([title, text]) => `<h3>${esc(title)}</h3><div class="script">${esc(text)}</div>`).join('');
}
