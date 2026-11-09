import { $, formatClock } from '../core/dom.js';

const WARN_AT = 30;

function beep(count) {
  try {
    const ctx = new AudioContext();
    for (let i = 0; i < count; i++) {
      const osc = ctx.createOscillator();
      osc.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.start(ctx.currentTime + i * 0.3);
      osc.stop(ctx.currentTime + i * 0.3 + 0.2);
    }
  } catch {
    /* audio unavailable */
  }
}

export function initTimer() {
  let phases = [180, 120];
  let phase = 0;
  let left = phases[0];
  let interval = null;

  const clock = $('#clock');

  function render() {
    clock.textContent = formatClock(left);
    clock.className = `clock${left < 0 ? ' over' : left <= WARN_AT ? ' warn' : ''}`;
    const name = phases.length > 1 ? (phase === 0 ? 'Speech' : 'Questioning') : 'Timer';
    $('#phaseLabel').textContent = `${name} – ${interval ? 'running' : 'paused'}`;
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  function reset() {
    phases = $('#preset').value.split(',').map(Number);
    const custom = Number($('#custom').value);
    if (custom >= 10) phases[0] = custom;
    phase = 0;
    left = phases[0];
    stop();
    render();
  }

  function toggle() {
    if (interval) {
      stop();
    } else {
      interval = setInterval(() => {
        left--;
        if (left === 0) beep(phase === phases.length - 1 ? 3 : 1);
        render();
      }, 1000);
    }
    render();
  }

  $('#preset').addEventListener('change', reset);
  $('#custom').addEventListener('input', reset);
  $('#start').addEventListener('click', toggle);
  $('#reset').addEventListener('click', reset);
  $('#skip').addEventListener('click', () => {
    if (phase < phases.length - 1) {
      phase++;
      left = phases[phase];
      render();
    } else {
      reset();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && $('#timer').classList.contains('active') && !['INPUT', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      toggle();
    }
  });

  render();
}
