import type { Metadata } from 'next';
import NewPatient from '@/components/NewPatient';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Nowy pacjent', description: 'Załóż kartę pacjenta w 3 minuty. Napisz, czego Twój zwierzak się boi, a przygotujemy gabinet pod niego.' };

export default function NewPatientPage() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <div className="g2" style={{ alignItems: 'end', marginBottom: 56 }}><div className="rv in"><p className="m">Nowy pacjent · załóż kartę w 3 minuty</p><h1>Opowiedz nam<br /><em>o swoim zwierzaku.</em></h1></div><p className="lead rv in">Zanim pierwszy raz wejdziesz do gabinetu, będziemy wiedzieć, jak ma na imię, czego się boi i co lubi. Lekarz przeczyta to przed wizytą.</p></div>
        <NewPatient />
      </div></section>
      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap">
        <div className="rv" style={{ marginBottom: 48 }}><p className="m">Na pierwszą wizytę</p><h2>Co zabrać ze sobą.</h2></div>
        <div className="g4">{[['Książeczkę zdrowia', 'albo zdjęcie stron ze szczepieniami.'], ['Koc lub ręcznik z domu', 'pachnie znajomo, na nim też ważymy.'], ['Ulubiony smakołyk', 'nasze też są dobre, ale własne działają lepiej.'], ['Wyniki badań', 'jeśli były gdzie indziej, wrzucimy je do karty.']].map(([h, p], i) => <div key={h} className="rv" style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 6, padding: 24 }}><span className="m" style={{ color: 'var(--red)' }}>0{i + 1}</span><h3 style={{ margin: '10px 0 8px' }}>{h}</h3><p style={{ color: 'var(--grey)' }}>{p}</p></div>)}</div>
      </div></section>
      <section className="sec"><div className="wrap g2"><div className="rv"><h2>Pierwsza wizyta: 140 zł, 40 minut.</h2><p className="lead" style={{ marginTop: 16 }}>Badanie od nosa do ogona, ważenie, rozmowa o żywieniu, plan szczepień. Bez pośpiechu.</p></div><div className="rv"><a className="btn b-ink" href={href('/kontakt/#wizyta')}>Umów pierwszą wizytę</a></div></div></section>
    </>
  );
}
