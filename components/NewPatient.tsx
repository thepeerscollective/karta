'use client';
import { useState } from 'react';
import { Field, Img, KCard, Stamp } from '@/components/ui';
import { href } from '@/lib/base';

const PLACES = ['spokojny', 'ciekawski', 'zestresowany', 'chowa się', 'broni się'];
const FEARS = ['transportera', 'obcych', 'psów', 'dotyku łap', 'hałasu', 'wagi'];
const SPECIES = ['pies', 'kot', 'królik', 'inny'];

/** Step 2 of the new-patient card, with the card preview filling in live. */
export default function NewPatient() {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [place, setPlace] = useState<string[]>([]);
  const [fears, setFears] = useState<string[]>([]);
  const [calm, setCalm] = useState('');
  const [treat, setTreat] = useState('');
  const [catRoom, setCatRoom] = useState<boolean | null>(null);
  const [sent, setSent] = useState(false);
  const tog = (arr: string[], set: (v: string[]) => void, v: string) => set(arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]);
  const Chips = ({ list, val, set }: { list: string[]; val: string[]; set: (v: string[]) => void }) => <div className="chips">{list.map(x => <button type="button" key={x} className="chip" aria-pressed={val.includes(x)} onClick={() => tog(val, set, x)}>{x}</button>)}</div>;

  return (
    <div className="g2" style={{ alignItems: 'start' }}>
      <KCard tab="NOWY PACJENT · KROK 2 Z 4 · CHARAKTER" className="rv in">
        {sent ? (
          <div style={{ padding: 'clamp(10px,4.44vh,40px) 0' }}><h3>Karta {name} założona.</h3><p style={{ color: 'var(--grey)', margin: '12px 0 24px' }}>Lekarz przeczyta ją przed wizytą. Teraz wybierz termin.</p><a className="btn b-ink" href={href('/kontakt/#wizyta')}>Wybierz termin →</a></div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 22 }}>
            <div className="g2" style={{ gap: 16 }}>
              <div><label className="lbl" htmlFor="np-n">Imię</label><input id="np-n" className="input" value={name} onChange={e => setName(e.target.value)} placeholder="np. Mruczek" required /></div>
              <div><span className="lbl">Gatunek</span><div className="chips">{SPECIES.map(s => <button type="button" key={s} className="chip" aria-pressed={species === s} onClick={() => setSpecies(species === s ? '' : s)}>{s}</button>)}</div></div>
            </div>
            <div><span className="lbl">W nowych miejscach</span><Chips list={PLACES} val={place} set={setPlace} /></div>
            <div><span className="lbl">Czego się boi?</span><Chips list={FEARS} val={fears} set={setFears} /></div>
            <div><label className="lbl" htmlFor="np-c">Co go uspokaja?</label><textarea id="np-c" className="input" rows={2} value={calm} onChange={e => setCalm(e.target.value)} placeholder="np. ręcznik z domu na głowie, mówić cicho" /></div>
            <div className="g2" style={{ gap: 16 }}>
              <div><label className="lbl" htmlFor="np-t">Najlepsza nagroda</label><input id="np-t" className="input" value={treat} onChange={e => setTreat(e.target.value)} placeholder="np. pasta z kurczaka" /></div>
              {species === 'kot' && <div><span className="lbl">Poczekalnia dla kotów?</span><div className="chips"><button type="button" className="chip" aria-pressed={catRoom === true} onClick={() => setCatRoom(catRoom === true ? null : true)}>Tak</button><button type="button" className="chip" aria-pressed={catRoom === false} onClick={() => setCatRoom(catRoom === false ? null : false)}>Nie</button></div></div>}
            </div>
            <p style={{ color: 'var(--grey)', fontSize: 14 }}>Wszystko, co tu wpiszesz, widzi tylko lekarz i recepcja. Możesz to zmienić przy każdej wizycie.</p>
            <div className="row"><button className="btn b-ink" type="submit">Zapisz kartę →</button></div>
          </form>
        )}
      </KCard>
      <div className="rv in" style={{ position: 'sticky', top: 140 }}>
        <p className="m" style={{ marginBottom: 12 }}>Tak będzie wyglądać karta</p>
        <KCard tab={`NR KARTY 3891 · ${(name || '____').toUpperCase()}`} color="sage">
          {species === 'kot' ? <Img n="n01" alt="Kot w otwartym transporterze" ratio="16/9" /> : <div className="np-ph">zdjęcie zrobimy na pierwszej wizycie</div>}
          <div className="g2" style={{ gap: 16, margin: '20px 0' }}><Field k="Imię" v={name || '—'} size={28} /><Field k="Gatunek" v={species || '—'} size={22} /></div>
          <span className="m">Uwagi dla lekarza</span>
          <p className="note" style={{ marginTop: 8, maxWidth: 320, minHeight: 120 }}>
            {place.length > 0 && <>W nowych miejscach: {place.join(', ')}.<br /></>}
            {fears.length > 0 && <>Boi się {fears.join(' i ')}.<br /></>}
            {calm && <>{calm}<br /></>}
            {treat && <>Nagroda: {treat}.</>}
            {!place.length && !fears.length && !calm && !treat && <span className="np-hint">Tu pojawi się to, co zaznaczysz po lewej. Lekarz przeczyta to, zanim wejdziesz.</span>}
          </p>
          {species === 'kot' && catRoom === true && <Stamp ink style={{ right: 24, bottom: 24 }}>POCZEKALNIA KOTÓW</Stamp>}
        </KCard>
      </div>
    </div>
  );
}
