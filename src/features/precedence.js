import { $, esc } from '../core/dom.js';
import { nextSpeaker, otherStance, recordSpeech, sortByPrecedence, undoSpeech } from '../core/precedence.js';
import { saveState } from '../core/storage.js';

export function initPrecedence(state) {
  function render() {
    const sorted = sortByPrecedence(state.legs);
    $('#legBody').innerHTML = sorted
      .map(
        (l) => `<tr><td>${esc(l.name)}</td><td>${esc(l.school)}</td><td>${l.session}</td><td>${l.item}</td>
<td>${l.last ? new Date(l.last).toLocaleTimeString() : '—'}</td>
<td><button data-action="spoke" data-id="${l.id}">Spoke</button>
<button data-action="undo" data-id="${l.id}">Undo</button>
<button data-action="del" data-id="${l.id}" aria-label="Remove ${esc(l.name)}">✕</button></td></tr>`,
      )
      .join('');

    const next = nextSpeaker(state.legs);
    $('#nextBox').innerHTML = next
      ? `<b>Recognize next (${state.stance}):</b> ${esc(next.name)} ${next.school ? `(${esc(next.school)})` : ''}
<div class="note">Fewest speeches on this item, then fewest this session, then least recent.</div>`
      : 'Add legislators to get a recommendation.';
    $('#stance').value = state.stance;
    saveState(state);
  }

  function update(id, fn) {
    state.legs = state.legs.map((l) => (l.id === id ? fn(l) : l));
  }

  function add() {
    const name = $('#legName').value.trim();
    if (!name) return;
    state.legs.push({ id: ++state.seq, name, school: $('#legSchool').value.trim(), session: 0, item: 0, last: 0, prev: null });
    $('#legName').value = '';
    render();
  }

  $('#addLeg').addEventListener('click', add);
  $('#legName').addEventListener('keydown', (e) => e.key === 'Enter' && add());

  $('#legBody').addEventListener('click', (e) => {
    const { action, id } = e.target.dataset;
    if (!action) return;
    const legId = Number(id);
    if (action === 'spoke') {
      update(legId, (l) => recordSpeech(l));
      state.stance = otherStance(state.stance);
    } else if (action === 'undo') {
      update(legId, undoSpeech);
    } else if (action === 'del') {
      state.legs = state.legs.filter((l) => l.id !== legId);
    }
    render();
  });

  $('#clearLeg').addEventListener('click', () => {
    if (confirm('Remove all legislators?')) {
      state.legs = [];
      render();
    }
  });
  $('#newItem').addEventListener('click', () => {
    state.legs = state.legs.map((l) => ({ ...l, item: 0 }));
    state.stance = 'Affirmative';
    render();
  });
  $('#stance').addEventListener('change', (e) => {
    state.stance = e.target.value;
    saveState(state);
  });
  $('#flip').addEventListener('click', () => {
    state.stance = otherStance(state.stance);
    render();
  });

  render();
}
