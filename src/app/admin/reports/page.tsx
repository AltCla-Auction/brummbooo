'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAllReports, deleteReport } from '@/lib/reports-service';
import { formatDateShort } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';
import { STATUS_LABELS, CATEGORY_LABELS, type ReportListItem } from '@/types';

export default function AdminReportsPage() {
  const [reports, setReports] = useState<ReportListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      const data = await getAllReports();
      setReports(data);
    } catch (error) {
      console.error('Failed to load reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`「${title}」を削除しますか？`)) return;

    try {
      await deleteReport(id);
      setReports(reports.filter((r) => r.id !== id));
    } catch (error) {
      console.error('Failed to delete report:', error);
      alert('削除に失敗しました');
    }
  };

  if (loading) {
    return <p className="text-gray-500">読み込み中...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">活動報告</h1>
        <Button as="link" href="/admin/reports/new">
          新規作成
        </Button>
      </div>

      {reports.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <p className="text-gray-500 mb-4">活動報告はまだありません</p>
          <Button as="link" href="/admin/reports/new">
            最初の記事を作成
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                  タイトル
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500 hidden sm:table-cell">
                  カテゴリ
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500 hidden md:table-cell">
                  公開日
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                  ステータス
                </th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/reports/${report.id}`}
                      className="text-gray-900 font-medium hover:text-accent"
                    >
                      {report.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    {report.category && (
                      <span className="text-sm text-gray-600">
                        {CATEGORY_LABELS[report.category]}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="text-sm text-gray-500">
                      {report.publishedAt
                        ? formatDateShort(report.publishedAt)
                        : '-'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        report.status === 'published' ? 'primary' : 'default'
                      }
                    >
                      {STATUS_LABELS[report.status]}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/reports/${report.id}`}
                        className="text-sm text-accent hover:underline"
                      >
                        編集
                      </Link>
                      <button
                        onClick={() => handleDelete(report.id, report.title)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        削除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
