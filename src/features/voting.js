import { $ } from '../core/dom.js';
import { tally } from '../core/voting.js';

export function initVoting() {
  const counts = { yes: 0, no: 0, abs: 0 };

  function render() {
    for (const key in counts) $(`#${key}`).textContent = counts[key];
    const threshold = $('#thresh').value;
    const { cast, needed, passes } = tally(counts, threshold);
    $('#vresult').innerHTML = cast === 0
      ? 'No votes yet.'
      : `<b style="color:var(${passes ? '--ok' : '--bad'})">${passes ? 'PASSES' : 'FAILS'}</b> – ${counts.yes} yes / ${counts.no} no / ${counts.abs} abstain
(${cast} votes cast; ${threshold === 'two' ? 'two-thirds' : 'majority'} needs ${needed} yes)`;
  }

  document.querySelectorAll('[data-v]').forEach((btn) =>
    btn.addEventListener('click', () => {
      const key = btn.dataset.v;
      counts[key] = Math.max(0, counts[key] + Number(btn.dataset.d));
      render();
    }),
  );
  $('#thresh').addEventListener('change', render);
  $('#vreset').addEventListener('click', () => {
    counts.yes = counts.no = counts.abs = 0;
    render();
  });
  render();
}
