import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Container,
  Section,
  PageHeader,
  Button,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'リレーボックス設置協力',
  description:
    'クルマのおもちゃリレーボックスの設置にご協力ください。ディーラー、整備工場、カーショップなどで設置いただけます。',
};

const targetPartners = [
  {
    title: '自動車ディーラー',
    description:
      'ショールームやサービス待合室に設置いただくことで、来店されるご家族の参加機会を増やせます。',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: '整備工場・カーショップ',
    description:
      '点検や車検の待ち時間に、お客様がおもちゃを持参しやすい環境を作れます。',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: '自動車関連企業',
    description:
      'オフィスや施設内に設置いただくことで、従業員やその家族の参加を促進できます。',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'イベント・コミュニティ',
    description:
      'カーイベントやクルマ関連のコミュニティ活動の際に、一時的な設置も可能です。',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const merits = [
  {
    title: '社会貢献活動への参加',
    description:
      'クルマ文化を次世代へつなぐ活動に、場所を提供するという形で参加いただけます。',
  },
  {
    title: 'お客様との接点づくり',
    description:
      'ご家族連れのお客様が、おもちゃを通じて店舗に立ち寄るきっかけになります。',
  },
  {
    title: '企業イメージの向上',
    description:
      '子どもたちへの社会貢献として、地域に貢献する企業としての姿勢を示せます。',
  },
];

const flowSteps = [
  {
    number: '01',
    title: 'お問い合わせ',
    description: 'お問い合わせフォームより、設置のご相談をお送りください。',
  },
  {
    number: '02',
    title: '詳細のご案内',
    description: 'ボックスの仕様や設置条件など、詳細をご案内いたします。',
  },
  {
    number: '03',
    title: 'ボックスのお届け',
    description: 'リレーボックスをお届けし、設置場所をご確認いただきます。',
  },
  {
    number: '04',
    title: '運用開始',
    description: '設置完了後、おもちゃの回収を定期的に行います。',
  },
];

export default function RelayBoxPage() {
  return (
    <>
      <PageHeader
        title="リレーボックス設置協力"
        description="クルマのおもちゃリレーボックスの設置にご協力ください。"
      />

      <Section padding="lg">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose-article">
              <p className="text-lg text-gray-700 leading-relaxed">
                クルマのおもちゃリレーボックスは、家庭で遊び終わったクルマのおもちゃを回収するための専用ボックスです。
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                ディーラー、整備工場、カーショップなど、クルマに関わる場所に設置いただくことで、来店されるお客様がおもちゃを届けやすい環境を作ることができます。
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                設置いただいた場所は、活動報告などでご紹介させていただく場合があります。
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/relay-box.jpg"
                alt="クルマのおもちゃリレーボックス"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="accent" padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            設置にご協力いただける方
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {targetPartners.map((partner) => (
              <div
                key={partner.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {partner.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {partner.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="md">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            設置のメリット
          </h2>

          <div className="space-y-6">
            {merits.map((merit, index) => (
              <div
                key={merit.title}
                className="flex gap-4 sm:gap-6"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{merit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {merit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            設置までの流れ
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="text-4xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-400 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              設置のご相談
            </h2>
            <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
              リレーボックスの設置にご興味をお持ちいただけましたら、お気軽にお問い合わせください。設置条件や詳細についてご案内いたします。
            </p>
            <Button as="link" href="/contact" size="lg" className="!bg-white !text-cyan-700 hover:!bg-cyan-50">
              お問い合わせ
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
