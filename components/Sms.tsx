'use client';
import { useEffect, useRef, useState } from 'react';

const MSG = [['8:00', 'Przyjęcie', 'Fasola jest u nas. Ważymy (na kocu), badamy, zakładamy wenflon.'], ['9:10', 'Znieczulenie', 'Fasola śpi. Anestezjolog cały czas patrzy na monitor.'], ['9:20', 'Zabieg', 'Zaczynamy. Napiszemy, jak skończymy.'], ['10:05', 'Wybudzenie', 'Wszystko poszło zgodnie z planem. Fasola się wybudza pod kocem grzewczym.'], ['12:30', 'Merda ogonem', 'Zjadła pół saszetki i szuka smakołyków. Odbiór od 15:00.']];

/** SMS updates from surgery day, revealed one by one when scrolled into view. */
export default function Sms() {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let t: ReturnType<typeof setInterval>;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { t = setInterval(() => setN(x => (x >= MSG.length ? x : x + 1)), 700); io.disconnect(); } }, { threshold: .3 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(t); };
  }, []);
  return (
    <div className="sms" ref={ref} aria-live="polite">
      {MSG.map(([t, h, m], i) => <div key={t} className={i < n ? 'on' : ''}><time>{t}</time><p className="bubble"><span>{h}</span>{m}</p></div>)}
    </div>
  );
}
