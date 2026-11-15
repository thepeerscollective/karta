import type { Metadata } from 'next';
import { KCard } from '@/components/ui';
import { PRICES } from '@/lib/data';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Cennik', description: 'Ceny wpisane jak w karcie: wizyta 140 zł, szczepienia od 90 zł, diagnostyka, zabiegi i dyżur nocny. Płatność kartą, BLIK, raty 0%.' };

export default function Prices() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'end' }}><div className="rv in"><p className="m">Cennik · od 1.11.2026</p><h1>Ceny wpisane<br /><em>jak w karcie.</em></h1></div><p className="lead rv in">Podajemy ceny bez gwiazdek. Zanim zaczniemy cokolwiek droższego niż 300 zł, dostajesz kosztorys na piśmie i decydujesz.</p></div></section>
      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap g2" style={{ alignItems: 'start', rowGap: 56 }}>
        {PRICES.map(([g, c, items]) => <KCard key={g} tab={`DZIAŁ · ${g}`} color={c} className="rv"><ul className="prices">{items.map(([n, p]) => <li key={n}><span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{n}</span><b>{p}</b></li>)}</ul></KCard>)}
      </div></section>
      <section className="sec dark"><div className="wrap g2"><div className="rv"><p className="m" style={{ color: 'var(--ochre)' }}>Płatność</p><h2>Karta, BLIK, gotówka, raty 0%.</h2><p className="lead" style={{ marginTop: 20 }}>Przy leczeniu powyżej 1 500 zł rozkładamy na raty bez odsetek. Współpracujemy z ubezpieczycielami zwierząt i rozliczamy bezgotówkowo.</p></div><div className="rv"><a className="btn b-ochre" href={href('/kontakt/')}>Zapytaj o kosztorys</a></div></div></section>
    </>
  );
}
