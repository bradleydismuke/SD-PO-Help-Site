import { $, esc } from '../core/dom.js';
import { MOTIONS } from '../data/motions.js';

export function initMotions() {
  function render() {
    const q = $('#msearch').value.toLowerCase();
    $('#mbody').innerHTML = MOTIONS.filter((m) => Object.values(m).join(' ').toLowerCase().includes(q))
      .map((m) => `<tr><td><b>${esc(m.name)}</b></td><td>${esc(m.second)}</td><td>${esc(m.debate)}</td><td>${esc(m.vote)}</td><td>${esc(m.notes)}</td></tr>`)
      .join('');
  }
  $('#msearch').addEventListener('input', render);
  render();
}
