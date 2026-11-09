const KEY = 'po-helper:v1';
const DEFAULTS = { legs: [], seq: 0, stance: 'Affirmative' };

export function loadState() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY)) };
  } catch {
    return { ...DEFAULTS };
  }
}

export const saveState = (state) => localStorage.setItem(KEY, JSON.stringify(state));
export const clearState = () => localStorage.removeItem(KEY);
