import test from 'node:test';
import assert from 'node:assert/strict';
import { nextSpeaker, recordSpeech, sortByPrecedence, undoSpeech } from '../src/core/precedence.js';
import { tally } from '../src/core/voting.js';

const leg = (id, item, session, last) => ({ id, item, session, last, prev: null });

test('fewest item speeches wins, then session, then least recent', () => {
  const order = sortByPrecedence([leg(1, 1, 0, 5), leg(2, 0, 2, 9), leg(3, 0, 1, 8), leg(4, 0, 1, 3)]).map((l) => l.id);
  assert.deepEqual(order, [4, 3, 2, 1]);
});

test('nextSpeaker handles empty list', () => assert.equal(nextSpeaker([]), null));

test('recordSpeech and undoSpeech round-trip', () => {
  const l = leg(1, 0, 0, 0);
  const spoke = recordSpeech(l, 100);
  assert.deepEqual([spoke.item, spoke.session, spoke.last], [1, 1, 100]);
  const undone = undoSpeech(spoke);
  assert.deepEqual([undone.item, undone.session, undone.last], [0, 0, 0]);
});

test('majority ignores abstentions and ties fail', () => {
  assert.equal(tally({ yes: 5, no: 4 }, 'maj').passes, true);
  assert.equal(tally({ yes: 4, no: 4 }, 'maj').passes, false);
  assert.equal(tally({ yes: 0, no: 0 }, 'maj').passes, false);
});

test('two-thirds threshold', () => {
  assert.deepEqual(tally({ yes: 6, no: 3 }, 'two'), { cast: 9, needed: 6, passes: true });
  assert.equal(tally({ yes: 5, no: 3 }, 'two').passes, false);
});
