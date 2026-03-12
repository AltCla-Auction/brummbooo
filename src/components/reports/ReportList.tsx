import { ReportCard } from './ReportCard';
import type { ReportListItem } from '@/types';

interface ReportListProps {
  reports: ReportListItem[];
}

export function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">活動報告はまだありません。</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}
