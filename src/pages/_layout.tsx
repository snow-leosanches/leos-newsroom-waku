import '../styles.css';

import type { ReactNode } from 'react';
import { Header } from '../components/header';
import { SnowplowInit } from '../components/snowplow-init';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 font-['Nunito']">
      <meta name="description" content="Leo's Newsroom — PR & media intelligence demo" />
      <link rel="icon" type="image/png" href="/images/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        precedence="font"
      />
      <SnowplowInit />
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
