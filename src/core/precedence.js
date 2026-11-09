// Pure precedence/recency logic: fewest speeches on the item, then fewest in
// the session, then least recent speaker.
export function sortByPrecedence(legislators) {
  return [...legislators].sort(
    (a, b) => a.item - b.item || a.session - b.session || a.last - b.last,
  );
}

export function nextSpeaker(legislators) {
  return sortByPrecedence(legislators)[0] ?? null;
}

export function recordSpeech(leg, now = Date.now()) {
  return { ...leg, prev: { session: leg.session, item: leg.item, last: leg.last }, session: leg.session + 1, item: leg.item + 1, last: now };
}

export function undoSpeech(leg) {
  return leg.prev ? { ...leg, ...leg.prev, prev: null } : leg;
}

export const otherStance = (s) => (s === 'Affirmative' ? 'Negative' : 'Affirmative');
