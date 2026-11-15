export const BASE = process.env.NEXT_PUBLIC_BASE ?? '';
export const img = (n: string) => `${BASE}/img/${n}.webp`;
export const href = (p: string) => `${BASE}${p}`;

export const ADDRESS = 'ul. Rydlówka 20, Kraków';
export const HOURS = 'pon–pt 8–20 · sob 9–15 · dyżur 24/7';
export const PHONE = '+48 12 111 11 11';
export const MAIL = 'recepcja@karta.vet';
