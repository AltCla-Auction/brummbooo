'use client';

import Link from 'next/link';

const quickLinks = [
  {
    title: '活動報告',
    description: '活動報告の作成・編集・公開管理',
    href: '/admin/reports',
    count: null,
  },
  {
    title: 'お問い合わせ',
    description: 'お問い合わせの確認・対応',
    href: '/admin/contacts',
    count: null,
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">ダッシュボード</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md hover:border-accent/20 transition-all"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {link.title}
            </h2>
            <p className="text-sm text-gray-600">{link.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          サイトへのリンク
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm"
          >
            トップページ →
          </a>
          <a
            href="/reports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline text-sm"
          >
            活動報告一覧 →
          </a>
        </div>
      </div>
    </div>
  );
}
