import type { Metadata } from 'next';
import {
  Container,
  Section,
  PageHeader,
  Button,
} from '@/components/ui';

export const metadata: Metadata = {
  title: '提供先募集',
  description:
    'クルマのおもちゃの提供を希望される幼稚園・保育園・学童・児童館等の施設を募集しています。',
};

const targetFacilities = [
  {
    title: '幼稚園',
    description: '園児がクルマのおもちゃで遊ぶことで、クルマへの興味を育みます。',
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: '保育園',
    description: '自由遊びの時間に、クルマのおもちゃを取り入れていただけます。',
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: '学童保育',
    description: '放課後の遊び時間に、子どもたちが楽しめるおもちゃを提供します。',
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
  {
    title: '児童館・その他施設',
    description: '子どもたちが集まる場所に、クルマのおもちゃを届けます。',
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
];

const flowSteps = [
  {
    number: '01',
    title: 'お問い合わせ',
    description: 'お問い合わせフォームより、提供のご希望をお送りください。',
  },
  {
    number: '02',
    title: '詳細の確認',
    description: '施設の状況や希望するおもちゃの量などを確認させていただきます。',
  },
  {
    number: '03',
    title: 'マッチング',
    description: '在庫状況を確認し、提供可能なおもちゃをご案内します。',
  },
  {
    number: '04',
    title: 'お届け',
    description: 'おもちゃをお届けします。配送または直接お届けにて対応します。',
  },
];

export default function RecipientsPage() {
  return (
    <>
      <PageHeader
        title="提供先募集"
        description="クルマのおもちゃの提供を希望される施設を募集しています。"
      />

      <Section padding="lg">
        <Container size="md">
          <div className="prose-article">
            <p className="text-lg text-gray-700 leading-relaxed">
              クルマのおもちゃリレープロジェクトでは、集まったおもちゃを必要とする施設へお届けしています。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              幼稚園、保育園、学童、児童館など、子どもたちが過ごす場所であれば、提供先としてお申し込みいただけます。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              クルマのおもちゃを通じて、子どもたちがクルマに親しむきっかけを作っていただければ幸いです。
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="accent" padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            提供対象となる施設
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {targetFacilities.map((facility) => (
              <div
                key={facility.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
            お届けまでの流れ
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

      <Section variant="muted" padding="lg">
        <Container size="md">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-cyan-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              ご確認事項
            </h2>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">●</span>
                <span>
                  おもちゃの在庫状況によっては、提供までお時間をいただく場合があります。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">●</span>
                <span>
                  提供するおもちゃの種類や数量は、在庫状況に応じて調整させていただきます。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">●</span>
                <span>
                  活動報告として、施設名やお届けの様子を掲載させていただく場合があります。
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container>
          <div className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-400 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              提供のお申し込み
            </h2>
            <p className="text-cyan-100 mb-8 max-w-xl mx-auto">
              おもちゃの提供をご希望の施設の方は、お問い合わせフォームよりお申し込みください。
            </p>
            <Button as="link" href="/contact" size="lg">
              お問い合わせ
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
