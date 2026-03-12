import Link from 'next/link';
import { Container, Section, SectionHeader } from '@/components/ui';

const targets = [
  {
    title: 'おもちゃを届けたい方',
    description:
      '遊び終わったクルマのおもちゃをお持ちの方。お近くのリレーボックスへお持ちください。',
    href: '/project',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
  },
  {
    title: 'リレーボックスを設置したい方',
    description:
      'ディーラー、整備工場、カーショップなどで設置にご協力いただける方。',
    href: '/relay-box',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: '提供を受けたい施設の方',
    description:
      '幼稚園、保育園、学童、児童館など、おもちゃの提供を希望される施設の方。',
    href: '/recipients',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export function TargetNavigation() {
  return (
    <Section variant="default" padding="lg">
      <Container>
        <SectionHeader
          title="ご協力いただける方へ"
          subtitle="さまざまな形でこの活動に参加いただけます"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target) => (
            <Link
              key={target.href}
              href={target.href}
              className="group bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-xl p-6 border border-cyan-100 hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                {target.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {target.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {target.description}
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                詳しく見る
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
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
