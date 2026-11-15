import type { Metadata } from 'next';
import { Field, Img, KCard, Stamp } from '@/components/ui';
import Sms from '@/components/Sms';
import { href } from '@/lib/base';

export const metadata: Metadata = { title: 'Chirurgia', description: 'Operacja krok po kroku: SMS po każdym etapie zabiegu, ceny z znieczuleniem i kontrolą, opieka przez pierwsze 10 dni.' };

export default function Surgery() {
  return (
    <>
      <section className="hero"><div className="wrap g2">
        <div className="rv in"><p className="m">Usługi / CHIR · Chirurgia</p><h1>Operacja<br /><em>krok po kroku.</em></h1><p className="lead">Wiemy, że czekanie na korytarzu jest najgorsze. Dlatego opiekun dostaje SMS po każdym etapie: znieczulenie, zabieg, wybudzenie, „już merda ogonem”.</p><a className="btn b-ink" style={{ marginTop: 'clamp(10px,3.56vh,32px)' }} href={href('/kontakt/#wizyta')}>Umów konsultację chirurgiczną</a></div>
        <div className="rv in"><Img n="u10" alt="Sala operacyjna kliniki, monitor anestezji" ratio="5/4" eager /></div>
      </div></section>
      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div><p className="m rv">Dzień zabiegu · co dostaniesz SMS-em</p><h2 className="rv" style={{ marginBottom: 'clamp(10px,4.00vh,36px)' }}>Dzień operacji Fasoli.</h2><Sms /></div>
        <KCard tab="KARTA ZABIEGU · 0412" color="rose" className="rv">
          <div style={{ display: 'grid', gap: 18 }}>{[['Pacjent', 'Fasola, 11,4 kg'], ['Zabieg', 'usunięcie guzka skóry'], ['Znieczulenie', 'wziewne, monitorowane'], ['Chirurg', 'dr Paweł Zając'], ['Odbiór', 'dziś od 15:00']].map(([k, v]) => <Field key={k} k={k} v={v} size={22} />)}</div>
          <div style={{ height: 110 }} /><Stamp style={{ right: 32, bottom: 28 }}>GOTOWA DO DOMU</Stamp>
        </KCard>
      </div></section>
      <section className="sec"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv"><p className="m">Zabiegi i ceny</p><h2>Ile to kosztuje.</h2><p className="lead" style={{ marginTop: 16 }}>Cena zawiera znieczulenie, monitoring, leki na wynos i kontrolę po 10 dniach.</p></div>
        <ul className="prices rv">{[['Kastracja kota', '450 zł', ''], ['Sterylizacja kotki', '650 zł', ''], ['Kastracja psa', '650–950 zł', 'zależy od wagi'], ['Sterylizacja suki', '900–1 500 zł', 'zależy od wagi'], ['Usunięcie guzka skóry', '500–900 zł', 'z badaniem histopatologicznym'], ['TPLO (zerwane więzadło)', '4 800 zł', 'z RTG i rehabilitacją'], ['Laparoskopia', '+ 600 zł', 'mniejsza rana, szybszy powrót']].map(([n, p, s]) => <li key={n}><span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{n}{s && <small>{s}</small>}</span><b>{p}</b></li>)}</ul>
      </div></section>
      <section className="sec" style={{ background: '#E9E4DA' }}><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,5.33vh,48px)' }}><p className="m">W domu, po zabiegu</p><h2>Pierwsze 10 dni.</h2></div>
        <div className="g4">{[['Dzień 1', 'Ciepło, cisza, mała porcja jedzenia wieczorem. Senność to norma.', 'ochre'], ['Dni 2–5', 'Kołnierz albo body. Krótkie spacery na smyczy. Leki według karty.', 'sage'], ['Dzień 10', 'Kontrola i zdjęcie szwów. Bez umawiania, wpisujemy od razu.', 'rose'], ['Zawsze', 'Coś Cię niepokoi? Dzwoń o każdej porze. Mamy kartę przed oczami.', 'blue']].map(([t, d, c]) => <KCard key={t} tab={`PO ZABIEGU · ${t.toUpperCase()}`} color={c} className="rv"><h3>{t}</h3><p style={{ color: 'var(--grey)', marginTop: 10 }}>{d}</p></KCard>)}</div>
      </div></section>
      <section className="sec"><div className="wrap g2">
        <div className="rv"><Img n="v05" alt="Dr Paweł Zając, chirurg" ratio="4/5" /></div>
        <div className="rv"><p className="m">Prowadzi</p><h2>dr Paweł Zając</h2><p className="note" style={{ margin: '14px 0 32px' }}>chirurgia i ortopedia, od 2006. Ponad 6 000 zabiegów. Naprawia rowery i psie kolana.</p>
          <div className="faq">{[['Czy moje zwierzę musi być na czczo?', 'Tak. Pies i kot bez jedzenia od 22:00, woda do rana. Króliki jedzą normalnie.'], ['Czy mogę być przy wybudzeniu?', 'Tak, jeśli chcesz. Przygotujemy krzesło obok kojca.'], ['Co jeśli coś pójdzie nie tak?', 'Dzwonimy od razu, nie czekamy do końca zabiegu.']].map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div></div>
      </div></section>
    </>
  );
}
