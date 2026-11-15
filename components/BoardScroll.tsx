'use client';
import { useEffect, useRef, useState } from 'react';

/** The discharge board as an honest carousel: arrows, a count, and a soft edge instead of a card cut in half. */
export default function BoardScroll({ children }: { children: React.ReactNode }) {
  const el = useRef<HTMLDivElement>(null);
  const [st, setSt] = useState({ first: 1, last: 4, total: 0, start: true, end: false });
  const upd = () => {
    const b = el.current; if (!b) return;
    const kids = Array.from(b.children) as HTMLElement[]; const r = b.getBoundingClientRect();
    const vis = kids.map((k, i) => { const q = k.getBoundingClientRect(); return q.left >= r.left - 4 && q.right <= r.right + 4 ? i : -1; }).filter(i => i >= 0);
    setSt({ first: (vis[0] ?? 0) + 1, last: (vis[vis.length - 1] ?? 0) + 1, total: kids.length, start: b.scrollLeft < 8, end: b.scrollLeft + b.clientWidth >= b.scrollWidth - 8 });
  };
  useEffect(() => { upd(); const b = el.current; b?.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); return () => { b?.removeEventListener('scroll', upd); removeEventListener('resize', upd); }; }, []);
  const go = (d: number) => { const b = el.current; if (!b) return; const w = (b.children[0] as HTMLElement)?.getBoundingClientRect().width ?? 260; b.scrollBy({ left: d * (w + 24) * 2, behavior: 'smooth' }); };
  return (
    <div className="bscroll">
      <div className={`board${st.end ? ' at-end' : ''}`} ref={el}>{children}</div>
      <div className="bctl">
        <span className="m">Karty {st.first}–{st.last} z {st.total}</span>
        <button onClick={() => go(-1)} disabled={st.start} aria-label="Poprzednie karty">←</button>
        <button onClick={() => go(1)} disabled={st.end} aria-label="Następne karty">→</button>
      </div>
    </div>
  );
}
