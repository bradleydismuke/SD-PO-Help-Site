import { $ } from './core/dom.js';
import { clearState, loadState } from './core/storage.js';
import { initMotions } from './features/motions.js';
import { initPrecedence } from './features/precedence.js';
import { initScripts } from './features/scripts.js';
import { initTabs } from './features/tabs.js';
import { initTimer } from './features/timer.js';
import { initVoting } from './features/voting.js';

const state = loadState();

initTabs();
initTimer();
initPrecedence(state);
initMotions();
initVoting();
initScripts();

$('#resetAll').addEventListener('click', () => {
  if (confirm('Erase all saved data?')) {
    clearState();
    location.reload();
  }
});
