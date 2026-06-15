import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, PageHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { SupporterList } from '@/components/supporters';
import { supporters, supportersPageContent } from '@/content/supporters';

export const metadata: Metadata = {
  title: 'サポーター・パートナー',
  description:
    '子どものセーフコクピット・プロジェクトに賛同する運営会社・サポーター・パートナーをご紹介します。オールコンパス株式会社、オルクラなど。',
  openGraph: {
    title: 'サポーター・パートナー｜Brumm Booo Driving Society',
    description:
      'この活動に賛同いただいている企業・団体と、その想いをご紹介します。',
  },
};

export default function SupportersPage() {
  const operators = supporters.filter((s) => s.role === 'operator');
  const supportersOnly = supporters.filter((s) => s.role === 'supporter');
  const partners = supporters.filter((s) => s.role === 'partner');

  return (
    <>
      <PageHeader
        title={supportersPageContent.lead}
        description={supportersPageContent.description}
      />

      <Section variant="default" padding="lg">
        <Container size="lg">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-gray-700 leading-relaxed text-pretty">
              各社・各団体が、なぜこの活動に賛同しているのか。
              ロゴとあわせて、メッセージを掲載しています。
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            <SupporterList
              id="supporters-heading"
              heading="サポーター"
              items={supportersOnly}
            />
            {partners.length > 0 && (
              <SupporterList
                id="partners-heading"
                heading="パートナー"
                items={partners}
              />
            )}
            <SupporterList
              id="operators-heading"
              heading="運営"
              items={operators}
            />
          </div>
        </Container>
      </Section>

      <Section variant="cream" padding="lg">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-navy mb-4">
              {supportersPageContent.ctaTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-pretty mb-8 max-w-xl mx-auto">
              {supportersPageContent.ctaDescription}
            </p>
            <Button
              as="link"
              href="/contact?subject=活動に協力する"
              size="lg"
              ariaLabel="活動への協力について問い合わせる"
            >
              お問い合わせする
            </Button>
            <p className="mt-6 text-sm text-gray-500">
              <Link href="/about" className="text-orange-dark hover:underline">
                設立意旨
              </Link>
              {' · '}
              <Link href="/#participate" className="text-orange-dark hover:underline">
                活動に参加する
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
