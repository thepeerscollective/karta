# Karta

Serwis kliniki weterynaryjnej. Koncept: **każdy pacjent ma swoją kartę**: zakładki, pola do wpisania, pieczątki i notatki ręką lekarza. Profesjonalnie i ciepło, z osobną, cichą stroną o pożegnaniu.

Live: https://thepeerscollective.com/karta/

- Next.js 15, static export, GitHub Pages
- `components/NewPatient.tsx` karta nowego pacjenta, która wypełnia się na żywo
- `components/Urgent.tsx` szybka ocena „czy jechać od razu” i status dyżuru
- `components/Sms.tsx` SMS-y z dnia operacji
- `components/VetBooking.tsx` rezerwacja

```
npm install
NEXT_PUBLIC_BASE= npm run dev
```

Projekt: The Peers Collective
