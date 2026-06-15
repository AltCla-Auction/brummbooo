import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, PageHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { missionContent } from '@/content/mission';

export const metadata: Metadata = {
  title: '設立意旨',
  description:
    'Brumm Booo Driving Society の設立意旨。社会貢献活動を行う任意団体として、未来を担う子どもたちを守るために正しい情報を届ける活動です。',
  openGraph: {
    title: '設立意旨｜Brumm Booo Driving Society',
    description:
      '未来を担う子どもたちを守るために、正しい情報を届ける。子どものセーフコクピット・プロジェクトの設立意旨です。',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={missionContent.lead}
        description={missionContent.subtitle}
      />

      <Section variant="default" padding="lg">
        <Container size="md">
          <article className="prose-article max-w-none">
            {missionContent.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={index > 0 ? 'mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-100' : ''}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-navy mb-6 text-balance">
                  {section.title}
                </h2>
                <div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line text-pretty">
                  {section.content}
                </div>
              </section>
            ))}
          </article>

          <div className="mt-16 sm:mt-20 pt-10 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-6 text-pretty">
              セーフコクピットの考え方と、具体的なチェックポイントもあわせてご覧ください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button as="link" href="/#safe-cockpit" variant="primary" size="lg">
                セーフコクピットを知る
              </Button>
              <Button as="link" href="/#checkpoints" variant="outline" size="lg">
                チェックポイントを見る
              </Button>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              <Link href="/" className="text-orange-dark hover:underline">
                トップページへ戻る
              </Link>
              {' · '}
              Brumm Booo Driving Society
            </p>
          </footer>
        </Container>
      </Section>
    </>
  );
}
