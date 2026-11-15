import { Field, Img, KCard, Stamp } from '@/components/ui';
import { DISCHARGED, SERVICES, TEAM } from '@/lib/data';
import { PHONE, href } from '@/lib/base';

export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv in">
          <p className="m">Klinika weterynaryjna · Podgórze · od 1998</p>
          <h1>Każdy pacjent<br /><em>ma swoją kartę.</em></h1>
          <p className="lead">Nie numer w kolejce, tylko imię, charakter i historia. Zapisujemy, że Fasola boi się wagi, a Pan Kot nie lubi transportera, i pamiętamy o tym przy każdej wizycie.</p>
          <div className="row hero-cta"><a className="btn b-ink" href={href('/kontakt/#wizyta')}>Umów wizytę</a><a className="btn b-line" href={href('/nowy-pacjent/')}>Załóż kartę nowego pacjenta</a></div>
          <p className="m">Dziś wolne terminy</p>
          <div className="free-slots">{[['14:30', 'dr Nowak'], ['16:00', 'dr Wiśniewska'], ['18:15', 'dr Zając']].map(([t, d]) => <a key={t} href={href('/kontakt/#wizyta')}><b>{t}</b><span className="m">{d}</span></a>)}</div>
        </div>
        <div className="stack rv in">
          <KCard tab="NR KARTY 2207" color="sage" className="back"><div style={{ height: 420 }} /></KCard>
          <KCard tab="NR KARTY 0412 · FASOLA" className="front">
            <div style={{ display: 'grid', gridTemplateColumns: 'min(220px, 30vh) 1fr', gap: 24 }}>
              <Img n="v01" alt="Pies Fasola na kocu" ratio="220/260" eager />
              <div style={{ display: 'grid', gap: 14, alignContent: 'start' }}>
                <Field k="Imię" v="Fasola" size={34} /><Field k="Gatunek / rasa" v="pies, mieszaniec" size={22} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}><Field k="Wiek" v="7 lat" size={22} /><Field k="Waga" v="11,4 kg" size={22} /></div>
              </div>
            </div>
                        <span className="m" style={{ display: 'block', marginTop: 20 }}>Uwagi</span>
            <p className="note" style={{ marginTop: 8, maxWidth: 340, marginBottom: 0 }}>Boi się wagi i śliskiej podłogi.<br />Ważymy na kocu, nie na wadze.</p>
            <Stamp ink style={{ right: 28, bottom: 28 }}>SZCZEPIONA 03/2026</Stamp>
          </KCard>
        </div>
      </div></section>

      <section className="dark" style={{ padding: '64px 0' }}><div className="wrap stats">
        {[['1998', 'od tego roku prowadzimy karty'], ['24/7', 'dyżur, także w święta'], ['14', 'lekarzy, 6 specjalizacji'], ['38 214', 'kart pacjentów w archiwum']].map(([a, b]) => <div className="rv" key={a}><b>{a}</b><span className="m" style={{ display: 'block', marginTop: 12 }}>{b}</span></div>)}
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head rv"><div><p className="m">01 · Co robimy</p><h2>Od szczepienia<br /><em>do operacji.</em></h2></div><p className="lead">Jedna karta przechodzi z pacjentem przez wszystkie gabinety. Chirurg wie, co zapisał internista, a recepcja wie, że kot czeka w osobnej poczekalni.</p></div>
        <div className="g3" style={{ rowGap: 48 }}>
          {SERVICES.map((s, i) => (
            <a key={s.slug} className="rv" href={href(s.slug === 'chirurgia' ? '/uslugi/chirurgia/' : `/uslugi/#${s.slug}`)}>
              <KCard tab={`${s.code} · ${String(i + 1).padStart(2, '0')}`} color={s.color}>
                <h3>{s.name}</h3><p style={{ color: 'var(--grey)', margin: '10px 0 24px', fontSize: 16 }}>{s.items.slice(0, 3).join(', ').toLowerCase()}</p>
                <span className="link">Otwórz kartę usługi →</span>
              </KCard>
            </a>
          ))}
        </div>
      </div></section>

      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap g2">
        <div className="rv"><Img n="v02" alt="Lekarka bada kota na kolanach opiekunki" ratio="4/5" /></div>
        <div className="rv"><p className="m">02 · Jak traktujemy pacjentów</p><h2>Spokojnie.<br /><em>Bez stołu, jeśli się da.</em></h2>
          <ol className="list" style={{ marginTop: 32 }}>
            {[['Ważymy na kocu, nie na wadze.', 'Śliska waga to najczęstszy powód stresu u psów. Koc z domu załatwia sprawę.'], ['Koty czekają osobno.', 'Osobna poczekalnia i wejście. Kot nie słyszy psów, zanim wejdzie do gabinetu.'], ['Badamy tam, gdzie zwierzę czuje się pewnie.', 'Na podłodze, na kolanach opiekuna, w transporterze z otwartą górą.'], ['Najpierw mówimy, potem robimy.', 'Każdy zabieg tłumaczymy opiekunowi, zanim dotkniemy pacjenta.']].map(([h, p], i) => (
              <li key={h}><span className="n">0{i + 1}</span><div><h3 style={{ fontSize: 24 }}>{h}</h3><p>{p}</p></div></li>
            ))}
          </ol></div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head rv"><div><p className="m"><span className="live" />Tablica wypisów · aktualizowana na żywo</p><h2>Dziś do domu<br /><em style={{ color: 'var(--red)' }}>wróciło 7 pacjentów.</em></h2></div>
          <div style={{ maxWidth: 460 }}><p className="lead">Kiedy pacjent wychodzi, jego karta trafia na tę tablicę z pieczątką. Opiekun może dopisać jedno zdanie. Zostaje tu do północy.</p>
            <div className="row" style={{ marginTop: 20, gap: 32 }}><div><span className="m">W tym roku wypisanych</span><b className="h2" style={{ display: 'block' }}>6 412</b></div><div><span className="m">W klinice teraz</span><b className="h2" style={{ display: 'block', color: 'var(--ochre)' }}>11</b></div></div></div>
        </div>
        <div className="board">
          {DISCHARGED.map(([n, g, w, d, q, st, rot], i) => (
            <article className="pin rv" key={n} style={{ transform: `rotate(${rot}deg)`, background: 'var(--card)' }}>
              <span className="m" style={{ fontSize: 10 }}>NR {4100 + i * 37}</span>
              <h3>{n}</h3><span className="m">{g}</span>
              <p style={{ fontSize: 15, margin: '12px 0 4px' }}>{w}</p><span className="m" style={{ fontSize: 10 }}>w klinice: {d}</span>
              <p className="note" style={{ fontSize: 18, margin: '14px 90px 0 0' }}>{q}</p>
              <Stamp ink={i % 2 === 1}>{st}</Stamp>
            </article>
          ))}
        </div>
        <p className="note rv" style={{ color: 'var(--grey)', fontSize: 20, marginTop: 32 }}>Pożegnania nie trafiają na tablicę. Dla nich jest osobna, cicha strona.</p>
      </div></section>

      <section className="sec dark" style={{ borderTop: '8px solid var(--red)' }}><div className="wrap g2" style={{ alignItems: 'start' }}>
        <div className="rv"><p className="m" style={{ color: 'var(--ochre)' }}>03 · Nagły przypadek</p><h2>Dyżur całą dobę.<br /><em style={{ color: 'var(--dim)' }}>Także w Wigilię o 3 w nocy.</em></h2>
          <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="h1" style={{ display: 'block', color: 'var(--red)', margin: '40px 0 8px' }}>{PHONE}</a><p className="m">Dzwoń z drogi · zapiszemy pacjenta, zanim dojedziesz</p>
          <div className="row" style={{ marginTop: 32 }}><a className="btn b-red" href={href('/pilne/')}>Co zrobić, zanim przyjedziesz</a><a className="btn b-line" href="https://maps.google.com/?q=Rydl%C3%B3wka+20+Krak%C3%B3w">Trasa na Rydlówkę</a></div></div>
        <KCard tab="KARTA PILNA · KROK PO KROKU" color="red" className="rv" bodyStyle={{ color: 'var(--ink)' }}>
          <ol className="list">{[['Zadzwoń z drogi.', 'Powiedz, co się stało i ile waży zwierzę. Przygotujemy leki i stół.'], ['Nie podawaj ludzkich leków.', 'Paracetamol i ibuprofen są dla psów i kotów trujące.'], ['Zabierz opakowanie.', 'Jeśli zjadł coś trującego, weź etykietę albo resztkę ze sobą.'], ['Transport płasko.', 'Duży pies na kocu trzymanym przez dwie osoby, kot w transporterze.']].map(([h, p], i) => <li key={h}><span className="n">0{i + 1}</span><div><h3 style={{ fontSize: 22 }}>{h}</h3><p>{p}</p></div></li>)}</ol>
        </KCard>
      </div></section>

      <section className="sec" style={{ background: '#E9E4DA' }}><div className="wrap g2">
        <div className="rv"><p className="m">04 · Kiedy trzeba się pożegnać</p><h2>Na koniec też<br /><em>jesteśmy obok.</em></h2>
          <p className="lead" style={{ margin: '24px 0' }}>Rozmawiamy o tym spokojnie i bez pośpiechu. Osobny pokój z kanapą, wejście od ogrodu, możliwość wizyty domowej. Pomagamy w kremacji i odcisku łapy na pamiątkę.</p>
          <p className="note" style={{ color: 'var(--grey)' }}>Zadzwoń na numer recepcji i powiedz tylko „chodzi o pożegnanie”. Resztą zajmiemy się my.</p>
          <a className="btn b-line" style={{ marginTop: 28 }} href={href('/pozegnanie/')}>Przeczytaj, jak to wygląda</a></div>
        <div className="rv"><Img n="v03" alt="Dłoń opiekuna na łapie starego psa" ratio="5/4" /></div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head rv"><div><p className="m">05 · Zespół</p><h2>Lekarze, którzy<br /><em>pamiętają imiona.</em></h2></div><a className="btn b-line" href={href('/zespol/')}>Cały zespół →</a></div>
        <div className="g4">{TEAM.slice(0, 4).map((t, i) => (
          <KCard key={t.name} tab={`LEKARZ · 0${i + 1}`} color={t.color} className="rv" bodyStyle={{ padding: 18 }}>
            <Img n={t.img} alt={`Portret: ${t.name}`} ratio="4/5" /><h3 style={{ marginTop: 16, fontSize: 24 }}>{t.name}</h3><p className="m" style={{ fontSize: 10, margin: '6px 0 10px' }}>{t.role}</p><p className="note" style={{ fontSize: 18 }}>lubi: {t.like}</p>
          </KCard>
        ))}</div>
      </div></section>

      <section className="sec" style={{ background: 'var(--blue)' }}><div className="wrap">
        <div className="head rv"><div><p className="m">06 · Wpisy opiekunów</p><h2>Co piszą w karcie<br /><em>opiekunowie.</em></h2></div><p className="m">4,9 / 5 · 1 284 opinie Google</p></div>
        <div className="g3">{[['„Pani doktor zapamiętała, że Pestka nie znosi termometru. Drugi raz nawet nie musiałam przypominać.”', 'Kasia, opiekunka Pestki', 'KOT · 4 LATA'], ['„Byliśmy o 2 w nocy z psem po potrąceniu. Czekali w drzwiach, bo zadzwoniłem z auta.”', 'Michał, opiekun Bruna', 'PIES · 9 LAT'], ['„Pożegnanie Lusi było najspokojniejszym, co mogło się wydarzyć w takim dniu. Dziękuję.”', 'Anna, opiekunka Lusi', 'PIES · 15 LAT']].map(([q, n, m]) => (
          <KCard key={n} tab={`WPIS · ${m}`} color="line" className="rv"><p className="note" style={{ color: 'var(--ink)' }}>{q}</p><p style={{ fontWeight: 500, marginTop: 20, borderTop: '1px solid var(--line)', paddingTop: 14 }}>{n}</p></KCard>
        ))}</div>
      </div></section>

      <section className="sec"><div className="wrap g2">
        <div className="rv"><p className="m">07 · Nowy pacjent</p><h2>Załóż kartę<br /><em>przed pierwszą wizytą.</em></h2><p className="lead" style={{ margin: '24px 0 32px' }}>Trzy minuty w domu zamiast dziesięciu w recepcji. Napisz, czego Twój zwierzak się boi, a przygotujemy gabinet pod niego.</p><a className="btn b-ink" href={href('/nowy-pacjent/')}>Załóż kartę online</a></div>
        <KCard tab="NR KARTY ____ · NOWY PACJENT" className="rv">
          {['Imię', 'Gatunek', 'Czego się boi?', 'Co lubi?'].map((l, i) => <div key={l} style={{ borderBottom: '1px dashed var(--line)', padding: '14px 0 20px' }}><span className="m" style={{ fontSize: 11 }}>{l}</span>{i > 1 && <p className="note" style={{ color: '#B4AA9A', fontSize: 19 }}>{i === 2 ? 'np. odkurzacza, mężczyzn w kapeluszach, wagi' : 'np. ser, drapanie za uchem'}</p>}</div>)}
        </KCard>
      </div></section>
    </>
  );
}
