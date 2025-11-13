import './globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'SabjiVerse | Fresh Vegetables Delivered Daily',
  description:
    'SabjiVerse sources the freshest seasonal vegetables directly from local farms and delivers them to homes and restaurants within hours.',
  metadataBase: new URL('https://agentic-59b10bc2.vercel.app'),
  openGraph: {
    title: 'SabjiVerse | Fresh Vegetables Delivered Daily',
    description:
      'SabjiVerse connects local farmers and urban kitchens with sustainable, pesticide-free vegetables.',
    url: 'https://agentic-59b10bc2.vercel.app',
    siteName: 'SabjiVerse',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 627,
        alt: 'Assortment of fresh vegetables arranged artfully'
      }
    ],
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
