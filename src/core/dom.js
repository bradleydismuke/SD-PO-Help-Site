export const $ = (selector, root = document) => root.querySelector(selector);

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ESCAPES[c]);

export const formatClock = (seconds) => {
  const abs = Math.abs(seconds);
  return `${seconds < 0 ? '-' : ''}${Math.floor(abs / 60)}:${String(abs % 60).padStart(2, '0')}`;
};
