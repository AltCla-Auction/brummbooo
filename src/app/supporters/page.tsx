import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, PageHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import {
  CooperationRoleDefinitions,
  SupporterCard,
  SupporterList,
} from '@/components/supporters';
import { supporters, supportersPageContent, sortSupporters } from '@/content/supporters';

export const metadata: Metadata = {
  title: 'サポーター・パートナー',
  description:
    '子どものセーフコクピット・プロジェクトに賛同するパートナー（企業・団体）・サポーター（個人）をご紹介します。JDSインターナショナル、モンキープロダクション、オルクラ、オールコンパス株式会社など。',
  openGraph: {
    title: 'サポーター・パートナー｜Brumm Booo Driving Society',
    description:
      'パートナー（企業・団体）とサポーター（個人）の区分と、活動に賛同いただいている方々の想いをご紹介します。',
  },
};

export default function SupportersPage() {
  const operators = sortSupporters(supporters.filter((s) => s.role === 'operator'));
  const supportersOnly = sortSupporters(supporters.filter((s) => s.role === 'supporter'));
  const partners = sortSupporters(supporters.filter((s) => s.role === 'partner'));

  return (
    <>
      <PageHeader
        title={supportersPageContent.lead}
        description={supportersPageContent.description}
      />

      <Section variant="default" padding="lg">
        <Container size="lg">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
            <p className="text-gray-700 leading-relaxed text-pretty whitespace-pre-line">
              {supportersPageContent.intro}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
            <CooperationRoleDefinitions />
          </div>

          <div className="space-y-14 sm:space-y-16">
            <SupporterList
              id="partners-heading"
              heading="パートナー"
              items={partners}
            />

            <section aria-labelledby="supporters-heading">
              <h2
                id="supporters-heading"
                className="text-xl sm:text-2xl font-bold text-navy mb-6 sm:mb-8"
              >
                サポーター
              </h2>
              {supportersOnly.length > 0 ? (
                <ul className="grid sm:grid-cols-2 gap-6 sm:gap-8 list-none p-0 m-0">
                  {supportersOnly.map((supporter) => (
                    <li key={supporter.id}>
                      <SupporterCard supporter={supporter} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 leading-relaxed text-pretty bg-cream/50 rounded-xl border border-gray-100 px-6 py-5">
                  {supportersPageContent.supporterEmptyMessage}
                </p>
              )}
            </section>

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
