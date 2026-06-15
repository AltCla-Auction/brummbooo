import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brummbooo.autos'),
  title: {
    default: '子どものセーフコクピット・プロジェクト｜Brumm Booo Driving Society',
    template: '%s | Brumm Booo Driving Society',
  },
  description:
    '社会貢献活動を行う任意団体 Brumm Booo Driving Society。子どもの体に合った安全な席づくりを広げ、チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
  keywords: [
    'チャイルドシート',
    'ジュニアシート',
    '後席シートベルト',
    '子どもの安全',
    'セーフコクピット',
    'Brumm Booo Driving Society',
  ],
  authors: [{ name: 'Brumm Booo Driving Society' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://brummbooo.autos',
    siteName: 'Brumm Booo Driving Society',
    title: '子どものセーフコクピット・プロジェクト｜Brumm Booo Driving Society',
    description:
      '社会貢献活動を行う任意団体 Brumm Booo Driving Society。子どもの体に合った安全な席づくりを広げ、チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '親が子どものチャイルドシートのベルトを確認している様子｜子どものセーフコクピット・プロジェクト',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '子どものセーフコクピット・プロジェクト｜Brumm Booo Driving Society',
    description:
      '社会貢献活動を行う任意団体 Brumm Booo Driving Society。子どもの体に合った安全な席づくりを広げます。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
