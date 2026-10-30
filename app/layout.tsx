import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Standart va xizmatchi dasturlar — Tibbiyotda axborot texnologiyalari',
  description:
    'Standart va xizmatchi dasturlar, tibbiy ma’lumotlarni saqlash vositalari va antivirus dasturlari yordamida himoyalash bo‘yicha interaktiv darslik.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232dd4bf' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090e14',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
