// Abstentions are not counted as votes cast. A tie fails.
export function tally({ yes, no }, threshold) {
  const cast = yes + no;
  const needed = threshold === 'two' ? Math.ceil((cast * 2) / 3) : Math.floor(cast / 2) + 1;
  const passes = cast > 0 && (threshold === 'two' ? yes * 3 >= cast * 2 : yes > no);
  return { cast, needed, passes };
}
