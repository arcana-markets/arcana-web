import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { GoogleAnalytics  } from '@next/third-parties/google'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Arcana Markets',
  description: 'Intelligent DeFi Liqudity. Tailored for Solana.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
          <>
      {/* Google Tag Manager - Global site tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7E13GM6QB3"
        strategy="afterInteractive"
        async
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7E13GM6QB3');
        `}
      </Script>
    </>
      <body className={inter.className}>
      <GoogleAnalytics gaId="G-7E13GM6QB3" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
