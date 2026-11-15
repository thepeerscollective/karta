import type { Metadata } from 'next';
import { KCard } from '@/components/ui';
import { Status, Triage } from '@/components/Urgent';
import { PHONE } from '@/lib/base';

export const metadata: Metadata = { title: 'Pilne 24/7', description: 'Dyżur weterynaryjny całą dobę, także w święta. +48 12 111 11 11. Co zrobić, zanim przyjedziesz, i kiedy jechać od razu.' };
const tel = `tel:${PHONE.replace(/\s/g, '')}`;

export default function Urgent() {
  return (
    <div className="dark" style={{ borderTop: '8px solid var(--red)' }}>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv in"><p className="m" style={{ color: 'var(--ochre)' }}>Nagły przypadek · otwarte teraz</p><h1>Dzwoń teraz.<br /><em style={{ color: 'var(--dim)' }}>Przeczytasz później.</em></h1>
          <a href={tel} style={{ display: 'block', background: 'var(--red)', borderRadius: 8, padding: '28px 36px', margin: '36px 0 20px' }}><span className="m" style={{ color: 'var(--card)' }}>Dyżur · odbiera lekarz</span><b className="h1" style={{ display: 'block', fontSize: 'clamp(40px,5vw,72px)' }}>{PHONE}</b></a>
          <p className="m">ul. Rydlówka 20 · wjazd od podwórza · parking pod drzwiami</p></div>
        <KCard tab="DYŻUR · STAN NA TERAZ" color="red" className="rv in" bodyStyle={{ color: 'var(--ink)' }}><Status /></KCard>
      </div></section>
      <section className="sec light" style={{ background: 'var(--paper)', color: 'var(--ink)' }}><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,4.44vh,40px)' }}><p className="m" style={{ color: 'var(--red)' }}>Kiedy jechać od razu</p><h2>Co widzisz?</h2></div>
        <Triage />
      </div></section>
      <section className="sec" style={{ background: 'var(--blue)', color: 'var(--ink)' }}><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,4.44vh,40px)' }}><p className="m">Zanim dojedziesz</p><h2>Pierwsza pomoc w drodze.</h2></div>
        <div className="g3">{[['Krwawienie', 'Uciśnij ranę czystym materiałem. Nie zdejmuj, gdy przesiąknie, dołóż kolejny.'], ['Oparzenie', 'Chłodna, nie lodowata woda przez 10 minut. Bez maści.'], ['Udar cieplny', 'Mokre ręczniki na łapy i brzuch, klimatyzacja w aucie. Nie lód.'], ['Zatrucie', 'Nie wywołuj wymiotów sam. Weź opakowanie albo zdjęcie etykiety.'], ['Złamanie', 'Nie prostuj łapy. Przenieś zwierzę płasko, na desce albo kocu.'], ['Zadławienie', 'Otwórz pysk, jeśli widzisz przedmiot, wyjmij palcami. Jeśli nie, jedź.']].map(([h, p], i) => <div key={h} className="rv" style={{ background: 'var(--card)', borderRadius: 6, padding: 28 }}><span className="m" style={{ color: 'var(--red)' }}>0{i + 1}</span><h3 style={{ margin: '10px 0 8px' }}>{h}</h3><p style={{ color: 'var(--grey)' }}>{p}</p></div>)}</div>
      </div></section>
      <section className="sec"><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,4.44vh,40px)' }}><p className="m" style={{ color: 'var(--ochre)' }}>Po przyjeździe</p><h2>Co się stanie w klinice.</h2></div>
        <div className="g4">{[['Triage w 2 minuty', 'Lekarz od razu ocenia, kto jest w największym zagrożeniu.'], ['Rozmowa o kosztach', 'Zanim zaczniemy, mówimy, ile to może kosztować. Bez zaskoczeń.'], ['Opiekun obok', 'Jeśli możesz, zostajesz przy zwierzęciu. Jeśli nie, piszemy SMS-y.'], ['Karta zostaje', 'Rano Twój lekarz prowadzący wie wszystko z nocy.']].map(([h, p], i) => <div key={h} className="rv" style={{ borderTop: '1px solid #3A4658', paddingTop: 20 }}><span className="m" style={{ color: 'var(--red)' }}>0{i + 1}</span><h3 style={{ margin: '10px 0 8px' }}>{h}</h3><p style={{ color: 'var(--dim)' }}>{p}</p></div>)}</div>
        <p className="m" style={{ marginTop: 'clamp(10px,5.33vh,48px)' }}>Dyżur nocny i świąteczny: konsultacja 250 zł · płatność kartą, BLIK, raty</p>
      </div></section>
    </div>
  );
}
