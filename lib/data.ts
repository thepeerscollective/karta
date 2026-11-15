export const SERVICES = [
  { code: 'PROF', slug: 'profilaktyka', name: 'Profilaktyka', color: 'ochre', img: 'u01', items: ['Szczepienia psów i kotów', 'Czipowanie i paszport', 'Odrobaczanie, kleszcze, pchły', 'Pakiet Szczeniak / Kocię', 'Przegląd seniora 7+'], price: 'od 90 zł', lead: 'dr Tomasz Kowalczyk' },
  { code: 'INT', slug: 'internistyka', name: 'Choroby wewnętrzne', color: 'sage', img: 'u02', items: ['Diagnostyka chorób przewlekłych', 'Cukrzyca, nerki, tarczyca', 'Dermatologia i alergie', 'Gastroenterologia', 'Opieka paliatywna'], price: 'od 140 zł', lead: 'dr Marta Nowak' },
  { code: 'CHIR', slug: 'chirurgia', name: 'Chirurgia', color: 'rose', img: 'u03', items: ['Kastracja i sterylizacja', 'Ortopedia: TPLO, złamania', 'Tkanki miękkie i guzy', 'Laparoskopia', 'Rehabilitacja pooperacyjna'], price: 'od 450 zł', lead: 'dr Paweł Zając' },
  { code: 'STOM', slug: 'stomatologia', name: 'Stomatologia', color: 'blue', img: 'u04', items: ['Skaling ultradźwiękowy', 'RTG zębów', 'Ekstrakcje', 'Leczenie przyzębia', 'Stomatologia królików'], price: 'od 380 zł', lead: 'dr Anna Lis' },
  { code: 'DIAG', slug: 'diagnostyka', name: 'Diagnostyka', color: 'ochre', img: 'u05', items: ['RTG cyfrowe', 'USG jamy brzusznej', 'Echo serca', 'Laboratorium na miejscu, wynik w 30 min', 'Tomografia (partner)'], price: 'od 120 zł', lead: 'dr Ewa Wiśniewska' },
  { code: 'EGZ', slug: 'egzotyki', name: 'Egzotyki', color: 'sage', img: 'u06', items: ['Króliki i gryzonie', 'Ptaki', 'Gady i płazy', 'Fretki', 'Doradztwo żywieniowe'], price: 'od 120 zł', lead: 'lek. wet. Jan Kubiak' },
];

export const TEAM = [
  { img: 'v04', name: 'dr Marta Nowak', role: 'kierowniczka · choroby wewnętrzne', since: 'od 1998', fear: 'pająków', like: 'koty, które udają psy', color: 'ochre' },
  { img: 'v05', name: 'dr Paweł Zając', role: 'chirurgia i ortopedia', since: 'od 2006', fear: 'niczego na sali', like: 'naprawiać rowery', color: 'sage' },
  { img: 'v06', name: 'dr Ewa Wiśniewska', role: 'kardiologia i USG', since: 'od 2011', fear: 'ciszy w słuchawkach', like: 'chomiki i jazz', color: 'rose' },
  { img: 'v07', name: 'lek. wet. Jan Kubiak', role: 'zwierzęta egzotyczne', since: 'od 2015', fear: 'niczego, co ma łuski', like: 'żółwia Profesora', color: 'blue' },
  { img: 'v08', name: 'dr Anna Lis', role: 'stomatologia', since: 'od 2013', fear: 'kamienia nazębnego', like: 'króliki i ceramikę', color: 'ochre' },
  { img: 'v09', name: 'dr Tomasz Kowalczyk', role: 'profilaktyka i szczenięta', since: 'od 2019', fear: 'nieszczepionych szczeniąt', like: 'biegać z psami w Lasku Wolskim', color: 'sage' },
];

export const DISCHARGED = [
  ['Fasola', 'pies, 7 lat', 'usunięcie guzka skóry', '1 dzień', '„Zjadła kolację i obraziła się na kołnierz.”', 'ZDROWA', -3],
  ['Pan Kot', 'kot, 12 lat', 'kroplówki, nerki', '4 dni', '„Już śpi na kaloryferze. Dziękujemy za noce.”', 'DO DOMU', 2],
  ['Bruno', 'pies, 9 lat', 'potrącenie, złamana łapa', '9 dni', '„Kuleje, ale merda. Do zobaczenia na kontroli.”', 'WYPISANY', -1],
  ['Pestka', 'kot, 4 lata', 'sterylizacja', '1 dzień', '„Obraża się na nas i na transporter.”', 'ZDROWA', 3],
  ['Profesor', 'żółw, 41 lat', 'zapalenie płuc', '14 dni', '„Zjadł liść mlecza. Pierwszy od miesiąca.”', 'WYPISANY', -2],
  ['Kluska', 'królik, 3 lata', 'zęby, skaling', '1 dzień', '„Chrupie siano jak dawniej.”', 'ZDROWA', 1],
  ['Maja', 'pies, 15 lat', 'odwodnienie', '2 dni', '„Najstarsza na tablicy. Spacer do sklepu zaliczony.”', 'DO DOMU', -3],
] as const;

export const PRICES: [string, string, [string, string][]][] = [
  ['WIZYTY', 'ochre', [['Wizyta pierwsza (40 min)', '140 zł'], ['Wizyta kontrolna', '110 zł'], ['Wizyta domowa w Krakowie', '+ 150 zł'], ['Dyżur nocny i świąteczny', '250 zł']]],
  ['PROFILAKTYKA', 'sage', [['Szczepienie wścieklizna', '90 zł'], ['Szczepienie zakaźne (pies / kot)', '130 zł'], ['Czip z rejestracją', '120 zł'], ['Odrobaczanie', 'od 40 zł']]],
  ['DIAGNOSTYKA', 'blue', [['Morfologia + biochemia', '220 zł'], ['RTG (1 projekcja)', '160 zł'], ['USG jamy brzusznej', '260 zł'], ['Echo serca', '350 zł']]],
  ['ZABIEGI', 'rose', [['Kastracja kota', '450 zł'], ['Sterylizacja kotki', '650 zł'], ['Skaling z RTG zębów', 'od 600 zł'], ['Hospitalizacja (doba)', '180 zł']]],
];
