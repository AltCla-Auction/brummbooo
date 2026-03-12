'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container, Badge, Button } from '@/components/ui';
import { getReportBySlug, getAdjacentReports } from '@/lib/reports-service';
import { formatDate } from '@/lib/utils';
import { CATEGORY_LABELS, type Report, type ReportListItem } from '@/types';

interface ReportPageProps {
  params: Promise<{ slug: string }>;
}

export default function ReportDetailPage({ params }: ReportPageProps) {
  const { slug } = use(params);
  const router = useRouter();
  const [report, setReport] = useState<Report | null>(null);
  const [adjacent, setAdjacent] = useState<{
    prev: ReportListItem | null;
    next: ReportListItem | null;
  }>({ prev: null, next: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReport();
  }, [slug]);

  const loadReport = async () => {
    try {
      const data = await getReportBySlug(slug);
      if (!data || data.status !== 'published') {
        router.push('/reports');
        return;
      }
      setReport(data);

      if (data.publishedAt) {
        const adj = await getAdjacentReports(data.publishedAt);
        setAdjacent(adj);
      }
    } catch (error) {
      console.error('Failed to load report:', error);
      router.push('/reports');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-12 sm:py-16">
        <Container size="md">
          <p className="text-gray-500 text-center">読み込み中...</p>
        </Container>
      </div>
    );
  }

  if (!report) {
    return null;
  }

  return (
    <article className="py-12 sm:py-16">
      <Container size="md">
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-gray-500">
              {formatDate(report.publishedAt)}
            </time>
            {report.category && (
              <Badge variant="primary">
                {CATEGORY_LABELS[report.category]}
              </Badge>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {report.title}
          </h1>
        </header>

        {report.thumbnailUrl && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8 sm:mb-12 bg-gray-100">
            <Image
              src={report.thumbnailUrl}
              alt={report.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        <div
          className="rich-text text-gray-700"
          dangerouslySetInnerHTML={{ __html: report.content }}
        />

        <footer className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
          <nav className="flex flex-col sm:flex-row gap-4 justify-between">
            {adjacent.prev ? (
              <Link
                href={`/reports/${adjacent.prev.slug}`}
                className="group flex items-center gap-3 text-gray-600 hover:text-accent transition-colors"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm line-clamp-1">
                  {adjacent.prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {adjacent.next ? (
              <Link
                href={`/reports/${adjacent.next.slug}`}
                className="group flex items-center gap-3 text-gray-600 hover:text-accent transition-colors sm:text-right"
              >
                <span className="text-sm line-clamp-1">
                  {adjacent.next.title}
                </span>
                <svg
                  className="w-5 h-5 flex-shrink-0"
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
            ) : (
              <div />
            )}
          </nav>

          <div className="mt-8 text-center">
            <Button as="link" href="/reports" variant="outline">
              活動報告一覧へ戻る
            </Button>
          </div>
        </footer>
      </Container>
    </article>
  );
}
