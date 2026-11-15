import type { Metadata } from 'next';
import { Field, Img, KCard } from '@/components/ui';
import { TEAM } from '@/lib/data';

export const metadata: Metadata = { title: 'Zespół', description: '14 lekarzy, 9 techników i 4 osoby w recepcji. Każdy lekarz też ma swoją kartę.' };

export default function Team() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'end' }}><div className="rv in"><p className="m">Zespół · 14 lekarzy · 9 techników · 4 osoby w recepcji</p><h1>Każdy lekarz<br /><em>też ma kartę.</em></h1></div><p className="lead rv in">Z tym samym układem co karty pacjentów: imię, specjalizacja, czego się boi i co lubi. Żeby było uczciwie.</p></div></section>
      <section style={{ paddingBottom: 'clamp(72px,9vw,128px)' }}><div className="wrap g3" style={{ rowGap: 56 }}>
        {TEAM.map((t, i) => (
          <KCard key={t.name} tab={`KARTA LEKARZA · 0${i + 1}`} color={t.color} className="rv">
            <Img n={t.img} alt={`Portret: ${t.name}`} ratio="1/1" />
            <div style={{ display: 'grid', gap: 14, marginTop: 20 }}><Field k="Imię i nazwisko" v={t.name} size={24} /><div className="g2" style={{ gap: 16, gridTemplateColumns: '2fr 1fr' }}><Field k="Specjalizacja" v={t.role} size={17} /><Field k="W karcie" v={t.since} size={17} /></div></div>
            <span className="m" style={{ display: 'block', marginTop: 16 }}>Uwagi</span><p className="note" style={{ fontSize: 19 }}>boi się: {t.fear}<br />lubi: {t.like}</p>
          </KCard>
        ))}
      </div></section>
      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap"><div className="rv" style={{ marginBottom: 40 }}><p className="m">Technicy i recepcja</p><h2>Ludzie, którzy trzymają<br /><em>łapę podczas badania.</em></h2></div><div className="rv"><Img n="v10" alt="Zespół techników i recepcji przed kliniką z psami" ratio="21/9" /></div></div></section>
      <section className="sec" id="praca"><div className="wrap"><KCard tab="KARIERA · OTWARTE KARTY" className="rv"><div className="g2"><div><h2 className="h3" style={{ fontSize: 40 }}>Szukamy lekarza na dyżury nocne</h2><p style={{ color: 'var(--grey)', marginTop: 12 }}>Grafik 7 nocy w miesiącu, dodatek nocny, pełne zaplecze, zawsze dwie osoby na dyżurze. Nie pracujesz sam.</p></div><div className="row"><a className="btn b-ink" href="mailto:praca@karta.vet">Wyślij swoją kartę</a><a className="btn b-line" href="mailto:praca@karta.vet?subject=Technik%20weterynarii">Technik weterynarii</a></div></div></KCard></div></section>
    </>
  );
}
