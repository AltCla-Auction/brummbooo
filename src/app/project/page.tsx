import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Container,
  Section,
  PageHeader,
  Button,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'クルマのおもちゃリレープロジェクト',
  description:
    '家庭で遊び終わったクルマのおもちゃを集め、幼稚園や保育園へ届けるプロジェクトです。おもちゃを捨てるのではなく、次の子どもへ手渡すことで、クルマ文化そのものをリレーします。',
};

const flowSteps = [
  {
    number: '01',
    title: 'おもちゃを集める',
    description:
      '遊び終わったクルマのおもちゃを、お近くのリレーボックスへお持ちください。ミニカー、トミカ、車のおもちゃなど、クルマに関するおもちゃが対象です。',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: '回収・整理する',
    description:
      'リレーボックスに集まったおもちゃを定期的に回収し、状態を確認して整理します。清掃や簡単なメンテナンスを行います。',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: '届ける',
    description:
      '幼稚園、保育園、学童、児童館など、子どもたちが過ごす場所へお届けします。クルマと出会う小さなきっかけを届けます。',
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function ProjectPage() {
  return (
    <>
      <PageHeader
        title="クルマのおもちゃリレープロジェクト"
        description="家庭で遊び終わったクルマのおもちゃを集め、次の子どもたちへつなぐプロジェクトです。"
      />

      <Section padding="lg">
        <Container size="md">
          <div className="prose-article">
            <p className="text-lg text-gray-700 leading-relaxed">
              クルマのおもちゃリレープロジェクトは、Brummbooo Driving Society
              の中心となる活動です。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              ひとつのミニカーやクルマのおもちゃには、遊んだ時間や思い出が宿っています。その役目を終えたおもちゃを捨てるのではなく、次の子どもへ手渡していくことは、クルマ文化そのものをリレーしていくことだと私たちは考えています。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              この活動を通じて、幼稚園や保育園、学童や児童館のような場所に、クルマと出会う小さなきっかけを届けていきます。
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="accent" padding="lg">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            プロジェクトの流れ
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {flowSteps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-accent/20">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="md">
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/80 rounded-2xl p-8 sm:p-12">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              対象となるおもちゃ
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ミニカー（トミカ、ホットウィールなど）</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>プラスチック製のクルマのおもちゃ</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>その他、クルマに関するおもちゃ</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              ※ 状態が著しく悪いものや、電池切れで動かないものは対象外となる場合があります。
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="accent-dark" padding="lg">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              この活動に参加する
            </h2>
            <p className="text-cyan-100 mb-8">
              さまざまな形でこの活動にご参加いただけます。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button as="link" href="/relay-box">
                リレーボックスを設置する
              </Button>
              <Button as="link" href="/recipients" variant="outline">
                提供先として申し込む
              </Button>
              <Button as="link" href="/contact" variant="ghost">
                お問い合わせ
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
