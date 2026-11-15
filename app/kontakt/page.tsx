import type { Metadata } from 'next';
import { Img } from '@/components/ui';
import VetBooking from '@/components/VetBooking';
import { MAIL, PHONE } from '@/lib/base';

export const metadata: Metadata = { title: 'Kontakt i rezerwacja', description: 'Umów wizytę w klinice Karta, ul. Rydlówka 20 w Krakowie. Dyżur 24/7: +48 12 111 11 11.' };

export default function Contact() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <div className="g2" style={{ alignItems: 'end', marginBottom: 'clamp(10px,6.22vh,56px)' }}><div className="rv in"><p className="m">Kontakt · rezerwacja</p><h1>Umów wizytę<br /><em>w dwóch kartach.</em></h1></div><p className="lead rv in">Wybierz pacjenta i termin. Jeśli to nagły przypadek, nie rezerwuj, tylko dzwoń: {PHONE}.</p></div>
        <VetBooking />
      </div></section>
      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv" style={{ display: 'grid', gap: 28 }}>
          {[['Telefon', PHONE, 'całą dobę'], ['Adres', 'ul. Rydlówka 20', 'Kraków Podgórze, wjazd od podwórza'], ['E-mail', MAIL, 'odpisujemy w 2 godziny'], ['Godziny', 'pon–pt 8–20 · sob 9–15', 'dyżur 24/7, także w święta']].map(([k, v, s]) => <div key={k} className="field"><span>{k}</span><b>{v}</b><p style={{ color: 'var(--grey)', fontSize: 15 }}>{s}</p></div>)}
        </div>
        <div className="rv"><Img n="v10" alt="Zespół kliniki przed wejściem" ratio="4/3" /></div>
      </div></section>
    </>
  );
}
