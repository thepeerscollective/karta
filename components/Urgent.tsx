'use client';
import { useEffect, useState } from 'react';
import { PHONE } from '@/lib/base';

const SYM: [string, 'now' | 'today' | 'call', string][] = [
  ['Ciężko oddycha, oddycha pyskiem (kot)', 'now', 'Jedź od razu. Kot oddychający pyskiem to zawsze stan pilny.'],
  ['Wzdęty brzuch, próbuje wymiotować (duży pies)', 'now', 'Jedź od razu. To może być skręt żołądka, liczą się minuty.'],
  ['Zjadł coś trującego', 'now', 'Zadzwoń z drogi i weź opakowanie. Nie wywołuj wymiotów sam.'],
  ['Kocur siedzi w kuwecie i nic', 'now', 'Jedź od razu. Zatkana cewka moczowa jest stanem zagrożenia życia.'],
  ['Kuleje, ale chodzi', 'today', 'Przyjedź dziś, ale bez nerwów. Ogranicz ruch do wizyty.'],
  ['Jednorazowe wymioty, je i pije', 'call', 'Obserwuj do rana. Jeśli wymioty wrócą albo nie pije, zadzwoń.'],
];

/** Quick self-triage plus a live on-call status card. */
export function Triage() {
  const [sel, setSel] = useState<number | null>(null);
  const v = sel === null ? null : SYM[sel];
  const tone = v?.[1] === 'now' ? 'var(--red)' : v?.[1] === 'today' ? 'var(--ochre)' : '#3DBE7A';
  return (
    <div className="g2" style={{ alignItems: 'start' }}>
      <div className="chips" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
        {SYM.map(([s], i) => <button key={s} className="chip" style={{ textAlign: 'left', padding: '16px 20px', fontSize: 17 }} aria-pressed={sel === i} onClick={() => setSel(i)}>{s}</button>)}
      </div>
      <div aria-live="polite" style={{ background: 'var(--card)', borderRadius: 6, borderTop: `8px solid ${v ? tone : 'var(--line)'}`, padding: 32, minHeight: 260 }}>
        {v ? <>
          <p className="m" style={{ color: tone }}>{v[1] === 'now' ? 'Jedź teraz' : v[1] === 'today' ? 'Dzisiaj' : 'Obserwuj'}</p>
          <h3 style={{ margin: '12px 0 16px', fontSize: 30 }}>{v[2]}</h3>
          {v[1] !== 'call' ? <a className="btn b-red" href={`tel:${PHONE.replace(/\s/g, '')}`}>Zadzwoń: {PHONE}</a> : <a className="btn b-line" href={`tel:${PHONE.replace(/\s/g, '')}`}>Wolę zadzwonić i zapytać</a>}
        </> : <><p className="m">Szybka ocena</p><h3 style={{ marginTop: 12 }}>Wybierz, co widzisz. Powiemy, czy jechać od razu.</h3><p style={{ color: 'var(--grey)', marginTop: 12 }}>To nie zastępuje rozmowy z lekarzem. W razie wątpliwości po prostu dzwoń.</p></>}
      </div>
    </div>
  );
}

export function Status() {
  const [now, setNow] = useState('');
  useEffect(() => { const f = () => setNow(new Date().toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })); f(); const t = setInterval(f, 30000); return () => clearInterval(t); }, []);
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <p className="m"><span className="live" />Dyżur · stan na {now || 'teraz'}</p>
      {[['Lekarze na dyżurze', '2 · dr Zając, dr Lis'], ['Czas oczekiwania', 'ok. 10 minut'], ['Sala operacyjna', 'wolna'], ['Tlen i kroplówki', 'gotowe']].map(([k, v]) => <div key={k} className="field"><span>{k}</span><b style={{ fontSize: 26 }}>{v}</b></div>)}
    </div>
  );
}
