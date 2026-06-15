import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section, PageHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { ARTICLE_LINKS } from '@/content/safe-cockpit';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_LINKS.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLE_LINKS.find((item) => item.slug === slug);

  if (!article) {
    return { title: '記事が見つかりません' };
  }

  return {
    title: article.title,
    description: `${article.title}について、Brumm Booo Driving Society がわかりやすく整理した情報です。`,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLE_LINKS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={article.title}
        description="この記事は現在準備中です。"
      />

      <Section variant="cream" padding="lg">
        <Container size="sm">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 shadow-sm text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              保護者の方が迷ったときに、やさしく見直せる情報として順次公開予定です。
              専門的な判断が必要な場合は、取扱説明書やメーカー、販売店、JAFなどの一次情報をご確認ください。
            </p>
            <Button as="link" href="/#parent-info" variant="primary">
              保護者向け情報一覧へ戻る
            </Button>
            <p className="mt-6">
              <Link
                href="/#checkpoints"
                className="text-sm text-orange-dark hover:underline"
              >
                チェックポイントを見る
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
