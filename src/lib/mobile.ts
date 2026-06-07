export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function shouldUseLightweightGraphics() {
  if (prefersReducedMotion()) return true;
  if (window.matchMedia('(max-width: 768px)').matches) return true;
  if (window.matchMedia('(pointer: coarse)').matches) return true;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return true;
  return false;
}

export const formFieldClass =
  'w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-base outline-none transition-colors focus:border-beige-500';
