import Link from 'next/link';
import Image from 'next/image';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { formatDate } from '@/lib/utils';
import { CATEGORY_LABELS, type ReportListItem } from '@/types';

interface RecentReportsProps {
  reports: ReportListItem[];
}

export function RecentReports({ reports }: RecentReportsProps) {
  if (reports.length === 0) {
    return null;
  }

  return (
    <Section variant="default" padding="lg">
      <Container>
        <SectionHeader
          title="活動報告"
          subtitle="私たちの活動の記録をお伝えします"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Link
              key={report.id}
              href={`/reports/${report.slug}`}
              className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all overflow-hidden"
            >
              <div className="aspect-video relative bg-gray-100">
                {report.thumbnailUrl ? (
                  <Image
                    src={report.thumbnailUrl}
                    alt={report.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs text-gray-500">
                    {formatDate(report.publishedAt)}
                  </time>
                  {report.category && (
                    <Badge variant="primary">
                      {CATEGORY_LABELS[report.category]}
                    </Badge>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-accent transition-colors line-clamp-2">
                  {report.title}
                </h3>
                {report.excerpt && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {report.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            すべての活動報告を見る
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
