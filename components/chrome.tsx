'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ADDRESS, HOURS, MAIL, PHONE, href } from '@/lib/base';

const NAV: [string, string][] = [['/uslugi/', 'Usługi'], ['/nowy-pacjent/', 'Nowy pacjent'], ['/pilne/', 'Pilne 24/7'], ['/zespol/', 'Zespół'], ['/pozegnanie/', 'Pożegnanie'], ['/cennik/', 'Cennik'], ['/kontakt/', 'Kontakt']];
const tel = `tel:${PHONE.replace(/\s/g, '')}`;

export function Header() {
  const path = usePathname() ?? '';
  const calm = path.startsWith('/pozegnanie');
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('calm', calm); setOpen(false); }, [calm, path]);
  return (
    <>
      <div className={`bar24${calm ? ' calm' : ''}`}><div className="wrap">
        {calm
          ? <a href="tel:+48121111112">Telefon w sprawie pożegnania · +48 12 111 11 12 · odbiera zawsze ta sama osoba</a>
          : <><a href={tel}>● Dyżur 24/7 · {PHONE}</a><span>·</span><span>ul. Rydlówka 20</span><span>·</span><span>Jedziesz? Zadzwoń z drogi, przygotujemy stół</span></>}
      </div></div>
      <header className={`nav${open ? ' open' : ''}`}><div className="wrap">
        <a className="logo" href={href('/')} aria-label="Karta, strona główna"><b>Karta</b><span>KLINIKA WETERYNARYJNA · KRAKÓW · OD 1998</span></a>
        <nav aria-label="Główna"><ul>{NAV.map(([p, l]) => <li key={p}><a className={p === '/pilne/' ? 'urgent' : undefined} href={href(p)} aria-current={path.startsWith(p.slice(0, -1)) ? 'page' : undefined}>{l}</a></li>)}</ul></nav>
        <a className="btn b-ink" href={href('/kontakt/#wizyta')}>Umów wizytę</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div></header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="foot"><div className="wrap">
      <div className="foot-grid">
        <div><a className="logo" href={href('/')}><b>Karta</b></a><p><em style={{ color: 'var(--dim)', fontSize: 20 }}>Każdy pacjent ma swoją kartę.</em><br />{ADDRESS}<br />{HOURS}<br /><a href={tel}>{PHONE}</a> · <a href={`mailto:${MAIL}`}>{MAIL}</a></p></div>
        <ul><li><a href={href('/uslugi/')}>Usługi</a></li><li><a href={href('/nowy-pacjent/')}>Nowy pacjent</a></li><li><a href={href('/pilne/')}>Pilne 24/7</a></li><li><a href={href('/cennik/')}>Cennik</a></li></ul>
        <ul><li><a href={href('/zespol/')}>Zespół</a></li><li><a href={href('/pozegnanie/')}>Pożegnanie</a></li><li><a href={href('/kontakt/')}>Kontakt</a></li><li><a href={href('/zespol/#praca')}>Kariera</a></li></ul>
        <ul><li><a href={href('/uslugi/#pakiety')}>Pakiety zdrowia</a></li><li><a href="#">Instagram</a></li><li><a href="#">Polityka prywatności</a></li></ul>
      </div>
      <div className="foot-bottom">Gabinet bez progów · parking · osobna poczekalnia dla kotów · © {new Date().getFullYear()} · projekt: peers</div>
    </div></footer>
  );
}

export function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
