import type { Metadata } from 'next';
import { Img, KCard } from '@/components/ui';
import { SERVICES } from '@/lib/data';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Usługi', description: 'Profilaktyka, choroby wewnętrzne, chirurgia, stomatologia, diagnostyka obrazowa i zwierzęta egzotyczne. Pakiety zdrowia na cały rok.' };

export default function Services() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'end' }}>
        <div className="rv in"><p className="m">Usługi · 6 działów · jedna karta</p><h1>Wszystko, czego<br /><em>potrzebuje pacjent.</em></h1></div>
        <p className="lead rv in">Zakładki w karcie pacjenta to nasze działy. Kliknij dział, żeby zobaczyć, co w nim robimy, ile to kosztuje i kto prowadzi.</p>
      </div></section>
      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap g2" style={{ alignItems: 'stretch', rowGap: 56 }}>
        {SERVICES.map((s, i) => (
          <KCard key={s.slug} tab={`${s.code} · DZIAŁ ${String(i + 1).padStart(2, '0')}`} color={s.color} className="rv">
            <div id={s.slug} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24, scrollMarginTop: 140 }}>
              <Img n={s.img} alt={`Dział: ${s.name}`} ratio="200/240" />
              <div><h3 style={{ marginBottom: 10 }}>{s.name}</h3><ul style={{ listStyle: 'none', display: 'grid', gap: 6 }}>{s.items.map(x => <li key={x}>— {x}</li>)}</ul></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 16, borderTop: '1px solid var(--line)', marginTop: 'clamp(10px,2.67vh,24px)', paddingTop: 18, flexWrap: 'wrap' }}>
              <div><span className="m">Cena</span><b className="h3" style={{ display: 'block' }}>{s.price}</b></div>
              <div><span className="m">Prowadzi</span><p style={{ fontFamily: 'var(--serif)', fontSize: 20 }}>{s.lead}</p></div>
              {s.slug === 'chirurgia' ? <a className="btn b-ink" href={href('/uslugi/chirurgia/')}>Otwórz dział →</a> : <a className="btn b-line" href={href('/kontakt/#wizyta')}>Umów wizytę</a>}
            </div>
          </KCard>
        ))}
      </div></section>
      <section className="sec dark" id="pakiety"><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,5.33vh,48px)' }}><p className="m" style={{ color: 'var(--ochre)' }}>Pakiety zdrowia</p><h2>Rok opieki<br /><em style={{ color: 'var(--dim)' }}>w jednej karcie.</em></h2></div>
        <div className="g3">{[['Szczeniak / Kocię', 'szczepienia, czip, 3 kontrole, porada żywieniowa', '690 zł', 'ochre', 'A'], ['Dorosły', '2 przeglądy, szczepienia, badanie krwi, skaling -20%', '890 zł', 'sage', 'B'], ['Senior 7+', '4 przeglądy, krew 2×, USG, RTG, pomiar ciśnienia', '1 290 zł', 'rose', 'C']].map(([n, d, p, c, l]) => (
          <KCard key={n} tab={`PAKIET · ${l}`} color={c} className="rv" bodyStyle={{ color: 'var(--ink)' }}><h3>{n}</h3><p style={{ color: 'var(--grey)', margin: '10px 0 20px' }}>{d}</p><b className="h3">{p} / rok</b></KCard>
        ))}</div>
      </div></section>
    </>
  );
}
