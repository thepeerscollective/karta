import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/newsreader/opsz.css';
import '@fontsource-variable/newsreader/opsz-italic.css';
import '@fontsource-variable/instrument-sans/index.css';
import '@fontsource/ibm-plex-mono/500.css';
import './globals.css';
import { Footer, Header, Reveal } from '@/components/chrome';
import { BASE } from '@/lib/base';

export const metadata: Metadata = {
  metadataBase: new URL('https://thepeerscollective.com'),
  title: { default: 'Karta · klinika weterynaryjna, Kraków', template: '%s · Karta' },
  description: 'Klinika weterynaryjna na Podgórzu, dyżur 24/7. Każdy pacjent ma swoją kartę: imię, charakter i to, czego się boi.',
  icons: { icon: `${BASE}/favicon.svg` },
  openGraph: { title: 'Karta · klinika weterynaryjna', description: 'Każdy pacjent ma swoją kartę.', images: [`${BASE}/img/v01.webp`] },
};
export const viewport: Viewport = { themeColor: '#F4EFE6', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <a className="skip" href="#main">Przejdź do treści</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
