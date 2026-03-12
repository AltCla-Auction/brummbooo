import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brummbooo.autos'),
  title: {
    default: 'BrummBooo Driving Society | クルマ文化の原体験を、次の世代へ',
    template: '%s | BrummBooo Driving Society',
  },
  description:
    '家庭で遊び終わったクルマのおもちゃを集め、幼稚園や保育園へ届けるプロジェクトです。クルマ文化の原体験を、次の世代へつなぎます。',
  keywords: [
    'クルマのおもちゃ',
    'ミニカー',
    '寄付',
    'プロジェクト',
    '幼稚園',
    '保育園',
    'クルマ文化',
  ],
  authors: [{ name: 'BrummBooo Driving Society' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://brummbooo.autos',
    siteName: 'BrummBooo Driving Society',
    title: 'BrummBooo Driving Society | クルマ文化の原体験を、次の世代へ',
    description:
      '家庭で遊び終わったクルマのおもちゃを集め、幼稚園や保育園へ届けるプロジェクトです。',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrummBooo Driving Society',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrummBooo Driving Society',
    description:
      '家庭で遊び終わったクルマのおもちゃを集め、幼稚園や保育園へ届けるプロジェクトです。',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
