'use client';
import { useEffect, useState } from 'react';
import { Field, KCard } from '@/components/ui';

const PETS = [['Fasola · pies', '0412'], ['Pan Kot · kot', '2207'], ['+ nowy pacjent', '']];
const REASONS: [string, number][] = [['szczepienie', 130], ['kontrola', 110], ['coś go boli', 140], ['zabieg', 0], ['inne', 110]];
const HOURS = ['8:30', '9:15', '11:00', '13:45', '15:30', '16:15', '17:00', '18:45'];
const D = ['nd', 'pn', 'wt', 'śr', 'cz', 'pt', 'sb'];

export default function VetBooking() {
  const [pet, setPet] = useState<number | null>(null);
  const [reason, setReason] = useState<number | null>(null);
  const [days, setDays] = useState<Date[]>([]);
  const [day, setDay] = useState<number | null>(null);
  const [hour, setHour] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => { const out: Date[] = []; const t = new Date(); while (out.length < 6) { t.setDate(t.getDate() + 1); if (t.getDay() !== 0) out.push(new Date(t)); } setDays(out); }, []);
  const d = day === null ? undefined : days[day];
  const price = reason === null ? null : REASONS[reason][1];
  return (
    <div className="g2" style={{ alignItems: 'start' }} id="wizyta">
      <KCard tab="REZERWACJA · TERMIN" className="rv">
        {done ? <div style={{ padding: 'clamp(10px,3.56vh,32px) 0' }}><h3>Zapisane.</h3><p style={{ color: 'var(--grey)', margin: '10px 0' }}>{pet !== null && PETS[pet][0].split(' · ')[0]} · {d && `${D[d.getDay()]} ${d.getDate()}.${d.getMonth() + 1}`} · {hour}. Przypomnimy SMS-em dzień wcześniej.</p></div> : (
          <div style={{ display: 'grid', gap: 24 }}>
            <div><span className="lbl">Pacjent</span><div className="chips">{PETS.map(([p], i) => <button key={p} className="chip" aria-pressed={pet === i} onClick={() => setPet(pet === i ? null : i)}>{p}</button>)}</div></div>
            <div><span className="lbl">Powód</span><div className="chips">{REASONS.map(([r], i) => <button key={r} className="chip" aria-pressed={reason === i} onClick={() => setReason(reason === i ? null : i)}>{r}</button>)}</div></div>
            <div><span className="lbl">Dzień</span><div className="cal">{days.map((x, i) => <button key={i} aria-pressed={day === i} onClick={() => { setDay(day === i ? null : i); setHour(''); }}><span>{D[x.getDay()]}</span><b>{x.getDate()}</b></button>)}</div></div>
            <div><span className="lbl">Godzina</span><div className="chips">{HOURS.map(h => <button key={h} className="chip" aria-pressed={hour === h} onClick={() => setHour(hour === h ? '' : h)}>{h}</button>)}</div></div>
            {pet === 1 && <p className="note" style={{ fontSize: 19 }}>Pan Kot przyjdzie do poczekalni dla kotów, wejście od podwórza. Zapisaliśmy to w karcie.</p>}
            {pet === 0 && <p className="note" style={{ fontSize: 19 }}>Fasolę zważymy na kocu, jak zawsze. Suszona wątróbka czeka w kieszeni.</p>}
            <button className="btn b-ink" style={{ justifySelf: 'start' }} disabled={pet === null || reason === null || !d || !hour} onClick={() => setDone(true)}>{pet === null || reason === null || !d || !hour ? 'Wybierz pacjenta, powód, dzień i godzinę' : `Rezerwuję · ${D[d.getDay()]} ${d.getDate()}.${d.getMonth() + 1} · ${hour}`}</button>
          </div>)}
      </KCard>
      <KCard tab="PODSUMOWANIE" color="sage" className="rv">
        <div style={{ display: 'grid', gap: 18 }}>
          <Field k="Pacjent" v={pet === null ? '—' : pet === 2 ? 'nowy pacjent' : `${PETS[pet][0].split(' · ')[0]}, ${PETS[pet][1]}`} size={22} />
          <Field k="Powód" v={reason === null ? '—' : REASONS[reason][0]} size={22} />
          <Field k="Termin" v={d ? `${D[d.getDay()]} ${d.getDate()}.${d.getMonth() + 1}${hour ? ` · ${hour}` : ''}` : '—'} size={22} />
          <Field k="Cena" v={price === null ? '—' : price ? `od ${price} zł` : 'po konsultacji'} size={22} />
        </div>
        <p className="m" style={{ marginTop: 20 }}>Przypomnimy SMS-em dzień wcześniej</p>
      </KCard>
    </div>
  );
}
