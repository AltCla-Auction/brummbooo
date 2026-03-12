'use client';

import { useState, useEffect } from 'react';
import { Container, PageHeader } from '@/components/ui';
import { ReportList } from '@/components/reports';
import { getPublishedReports } from '@/lib/reports-service';
import type { ReportListItem } from '@/types';

export default function ReportsPage() {
  const [reports, setReports] = useState<ReportListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublishedReports()
      .then(setReports)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <PageHeader
        title="活動報告"
        description="私たちの活動の記録をお伝えします。"
      />

      <div className="py-12 sm:py-16">
        <Container>
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">読み込み中...</p>
            </div>
          ) : (
            <ReportList reports={reports} />
          )}
        </Container>
      </div>
    </>
  );
}
