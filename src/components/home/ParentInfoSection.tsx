import Link from 'next/link';
import { Container, Section, SectionHeader } from '@/components/ui';
import { Card, CardContent, CardTitle } from '@/components/ui/Card';
import { ARTICLE_LINKS } from '@/content/safe-cockpit';

export function ParentInfoSection() {
  return (
    <Section
      id="parent-info"
      variant="default"
      padding="lg"
      ariaLabelledby="parent-info-heading"
    >
      <Container>
        <SectionHeader
          id="parent-info-heading"
          title="迷ったときに、やさしく見直せる情報を。"
          align="center"
        />

        <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed text-pretty mb-10 sm:mb-12">
          Brumm Booo Driving Society では、子どもの安全な席づくりに関する情報を、保護者にわかりやすく届けます。
          専門的な判断が必要な場合は、警察庁、JAF、メーカー、販売店、用品店などの一次情報や専門窓口を確認することを推奨します。
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 list-none p-0 m-0">
          {ARTICLE_LINKS.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}`}
                className="block h-full group"
                aria-label={`${article.title}（記事ページへ）`}
              >
                <Card className="h-full group-hover:border-orange/40 transition-colors">
                  <CardContent className="flex flex-col h-full">
                    <CardTitle className="text-navy group-hover:text-orange-dark transition-colors text-base">
                      {article.title}
                    </CardTitle>
                    <span className="mt-auto pt-4 text-sm text-orange-dark font-medium inline-flex items-center gap-1">
                      読む
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
