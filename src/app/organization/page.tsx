import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Section, PageHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: '団体概要',
  description:
    'Brummbooo Driving Society の団体概要。クルマ文化の原体験を次の世代へつなぐ社会活動です。',
};

const orgInfo = [
  { label: '団体名', value: 'Brummbooo Driving Society' },
  { label: '設立目的', value: 'クルマ文化の原体験を、次の世代へつなぐ' },
  {
    label: '主な活動',
    value: 'クルマのおもちゃリレープロジェクトの運営',
  },
  { label: '事務局', value: 'オールコンパス株式会社' },
];

export default function OrganizationPage() {
  return (
    <>
      <PageHeader
        title="団体概要"
        description="Brummbooo Driving Society について"
      />

      <Section padding="lg">
        <Container size="md">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
            <dl className="space-y-6">
              {orgInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row sm:gap-4"
                >
                  <dt className="text-sm font-medium text-gray-500 sm:w-32 flex-shrink-0">
                    {item.label}
                  </dt>
                  <dd className="mt-1 sm:mt-0 text-gray-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <Section variant="accent" padding="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            この活動について
          </h2>
          <div className="prose-article">
            <p className="text-gray-600 leading-relaxed">
              Brummbooo Driving Society
              は、クルマ文化の原体験を次の世代へつなぐために設立された社会活動です。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              中心となる活動は「クルマのおもちゃリレープロジェクト」です。家庭で遊び終わったクルマのおもちゃを集め、幼稚園や保育園、学童や児童館へお届けしています。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              この活動は、おもちゃの再利用にとどまらず、クルマを好きになるきっかけや、クルマに親しむ入口を社会の中に少しずつ増やしていくことを目指しています。
            </p>
            <p className="mt-6">
              <Link
                href="/about"
                className="text-accent font-medium hover:underline"
              >
                設立趣旨を読む →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">関連ブランド</h2>
          <p className="text-gray-600 mb-6">
            Brummbooo Driving Society
            は、以下のブランド・サービスと連携して活動を行っています。
          </p>
          <div className="max-w-sm">
            <a
              href="https://garageclub.alter-classimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <span className="text-xs text-gray-500 font-medium">
                コミュニティ
              </span>
              <div className="mt-3 mb-4">
                <Image
                  src="/images/garageclub-logo.png"
                  alt="オルクラ ガラージュクラブ"
                  width={400}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-sm text-gray-600">クルマ遊びコミュニティ</p>
              <span className="inline-flex items-center gap-1 mt-3 text-sm text-accent font-medium">
                サイトを見る
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            ※ Brummbooo Driving Society は非営利の社会活動です。上記サービスの宣伝を目的としたものではありません。
          </p>
        </Container>
      </Section>

      <Section variant="muted" padding="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">事務局について</h2>
          <div className="prose-article">
            <p className="text-gray-600 leading-relaxed">
              Brummbooo Driving Society の事務局運営は、オールコンパス株式会社が担当しています。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              お問い合わせやご相談は、<Link
                href="/contact"
                className="text-accent font-medium hover:underline"
              >お問い合わせフォーム</Link>よりお願いいたします。
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
