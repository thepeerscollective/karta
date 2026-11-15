import type { Metadata } from 'next';
import { Img, KCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Kiedy trzeba się pożegnać', description: 'Pożegnanie zwierzęcia spokojnie i bez pośpiechu: osobny pokój, wizyta domowa, pamiątka i kremacja. Telefon: +48 12 111 11 12.' };

export default function Farewell() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv in"><p className="m">Kiedy trzeba się pożegnać</p><h1 style={{ fontSize: 'clamp(40px,4.6vw,68px)' }}>Ta strona jest napisana powoli.<br /><em>Możesz czytać w swoim tempie.</em></h1>
          <p className="lead" style={{ color: 'var(--ink)' }}>Jeśli czytasz to dlatego, że Twój pies albo kot jest stary lub ciężko chory, to bardzo nam przykro. Nie musisz niczego decydować dzisiaj. Możesz po prostu zadzwonić i porozmawiać.</p>
          <a className="btn b-ink" style={{ margin: '32px 0 14px' }} href="tel:+48121111112">Chcę porozmawiać z lekarzem</a><p style={{ color: 'var(--grey)', fontSize: 15 }}>albo napisz SMS: „pożegnanie” na +48 12 111 11 12</p></div>
        <div className="rv in"><Img n="f01" alt="Stary pies śpi na kocu przy oknie" ratio="1/1" eager /></div>
      </div></section>
      <section className="sec" style={{ background: 'var(--card)' }}><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv"><p className="m">Skąd wiedzieć, że to już</p><h2>Nikt nie wie tego na pewno.<br /><em style={{ color: 'var(--grey)' }}>Ale są pytania, które pomagają.</em></h2>
          <ul style={{ listStyle: 'none', marginTop: 'clamp(10px,3.56vh,32px)' }}>{['Czy nadal je to, co lubi?', 'Czy cieszy się na Twój widok?', 'Czy więcej dni jest złych niż dobrych?', 'Czy ból da się jeszcze opanować lekami?', 'Czy może sam wstać i się załatwić?'].map(q => <li key={q} style={{ borderTop: '1px solid var(--line)', padding: 'clamp(10px,2.22vh,20px) 0', fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 26, fontWeight: 300 }}>{q}</li>)}</ul></div>
        <KCard tab="NOTATKA LEKARZA" color="line" className="rv" style={{ marginTop: 'clamp(10px,13.33vh,120px)' }}><p className="note" style={{ color: 'var(--ink)' }}>„Zapisuj w kalendarzu dobre i złe dni. Kropka zielona, kropka szara. Po dwóch tygodniach zobaczysz więcej niż my w gabinecie.”</p><p className="m" style={{ marginTop: 'clamp(10px,2.67vh,24px)' }}>— dr Marta Nowak</p></KCard>
      </div></section>
      <section className="sec"><div className="wrap">
        <div className="rv" style={{ marginBottom: 'clamp(10px,4.44vh,40px)' }}><p className="m">Jak to wygląda</p><h2>Spokojnie, bez pośpiechu,<br /><em>tak jak chcesz Ty.</em></h2></div>
        {[['Gdzie', 'W osobnym pokoju z kanapą i wejściem od ogrodu, żebyś nie musiał przechodzić przez poczekalnię. Albo w domu, na jego ulubionym miejscu.'], ['Kiedy', 'O godzinie, którą wybierzesz. Rezerwujemy na to czas, nikt nie czeka za drzwiami.'], ['Jak', 'Najpierw głęboka sedacja, zwierzę zasypia spokojnie na Twoich kolanach lub kocu. Potem drugi zastrzyk. Możesz być cały czas obok.'], ['Po', 'Możesz zostać, ile potrzebujesz. Rozliczenie i formalności załatwimy później, telefonicznie.']].map(([h, p]) => <div key={h} className="rv" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px,1fr) 3fr', gap: 32, borderTop: '1px solid var(--line)', padding: 'clamp(10px,3.56vh,32px) 0' }}><h3 style={{ fontSize: 36, fontWeight: 300 }}>{h}</h3><p style={{ fontSize: 19, lineHeight: 1.7 }}>{p}</p></div>)}
      </div></section>
      <section className="sec" style={{ background: 'var(--card)' }}><div className="wrap g2">
        <div className="rv"><Img n="f02" alt="Odcisk łapy w glinie i obróżka na lnianej tkaninie" ratio="1/1" /></div>
        <div className="rv"><p className="m">Potem</p><h2>Pamiątka i kremacja.</h2>
          <ul className="prices" style={{ marginTop: 'clamp(10px,2.67vh,24px)' }}>{[['Odcisk łapy w glinie', 'robimy go zawsze, możesz go odebrać lub nie.'], ['Kremacja indywidualna', 'prochy w urnie, odbiór po 7 dniach lub dostawa do domu.'], ['Kremacja zbiorowa', 'prochy rozsypane w ogrodzie pamięci pod Krakowem.'], ['Pochówek w domu', 'powiemy, jak zrobić to zgodnie z przepisami.']].map(([a, b]) => <li key={a}><span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>{a}<small style={{ textTransform: 'none', fontFamily: 'var(--sans)', fontSize: 15, letterSpacing: 0 }}>{b}</small></span></li>)}</ul></div>
      </div></section>
      <section className="sec" style={{ background: '#E3E8E0' }}><div className="wrap g2">
        <div className="rv"><p className="m">Dla Ciebie</p><h2>Smutek po zwierzęciu<br /><em>to prawdziwy smutek.</em></h2><p className="lead" style={{ margin: '24px 0', color: 'var(--ink)' }}>Współpracujemy z psycholożką, która prowadzi bezpłatne spotkania dla opiekunów raz w miesiącu. Dzieciom pomaga książeczka „Gdzie jest Burek?”, którą dajemy przy pożegnaniu.</p><a className="btn b-line" href="tel:+48121111112">Spotkania dla opiekunów</a></div>
        <KCard tab="Z KARTY · OSTATNI WPIS" color="line" className="rv"><p className="note" style={{ color: 'var(--ink)', fontSize: 26, lineHeight: 1.5 }}>Lusia, 15 lat.<br />Najlepszy pies na Zabłociu.<br />Zasnęła spokojnie, na swoim kocu,<br />z głową na kolanach Anny.</p><p className="m" style={{ marginTop: 'clamp(10px,3.11vh,28px)' }}>14.09.2026 · dr M. Nowak</p></KCard>
      </div></section>
    </>
  );
}
