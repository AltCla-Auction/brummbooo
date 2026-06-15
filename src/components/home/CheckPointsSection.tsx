'use client';

import { useState } from 'react';
import { Container, Section, SectionHeader } from '@/components/ui';
import { CHECK_POINTS } from '@/content/safe-cockpit';
import { SafeCockpitIcon } from './SafeCockpitIcon';
import { cn } from '@/lib/utils';

export function CheckPointsSection() {
  const [openId, setOpenId] = useState<string | null>(CHECK_POINTS[0].id);

  return (
    <Section
      id="checkpoints"
      variant="cream"
      padding="lg"
      ariaLabelledby="checkpoints-heading"
    >
      <Container>
        <SectionHeader
          id="checkpoints-heading"
          title="やさしいチェックポイント"
          subtitle="セーフコクピットを親子で見直すための、具体的な入口です。専門的なことがわからなくても大丈夫。気になるところがあれば、取扱説明書やメーカー、販売店、JAFなどの情報を確認しましょう。"
          align="center"
        />

        <ul
          className="max-w-3xl mx-auto space-y-3 list-none p-0 m-0"
          role="list"
          aria-label="安全な車のシートのチェックポイント"
        >
          {CHECK_POINTS.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <li key={item.id}>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    type="button"
                    id={`checkpoint-trigger-${item.id}`}
                    className="w-full flex items-start gap-4 p-5 sm:p-6 text-left hover:bg-surface/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-inset"
                    aria-expanded={isOpen}
                    aria-controls={`checkpoint-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-orange text-white text-sm font-bold shrink-0"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span
                      className="flex items-center justify-center w-10 h-10 rounded-xl bg-cream text-orange-dark shrink-0"
                      aria-hidden="true"
                    >
                      <SafeCockpitIcon name={item.icon} className="w-6 h-6" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold text-navy text-base sm:text-lg">
                        {item.title}
                      </span>
                      {!isOpen && (
                        <span className="block mt-1 text-sm text-gray-500 line-clamp-1 sm:hidden">
                          タップして詳しく見る
                        </span>
                      )}
                    </span>
                    <svg
                      className={cn(
                        'w-5 h-5 text-gray-400 shrink-0 mt-1 transition-transform',
                        isOpen && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <div
                    id={`checkpoint-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`checkpoint-trigger-${item.id}`}
                    className={cn(
                      'overflow-hidden transition-all duration-200',
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 pl-[5.5rem] sm:pl-[7.5rem] text-gray-700 text-sm sm:text-base leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <p
          className="mt-10 max-w-3xl mx-auto text-sm text-gray-600 leading-relaxed bg-white/80 rounded-xl p-5 sm:p-6 border border-gray-200"
          role="note"
        >
          このチェックは、安全を保証するものではありません。
          気になる点がある場合は、必ずお使いのチャイルドシート・ジュニアシート・車両の取扱説明書を確認し、必要に応じてメーカー、販売店、専門窓口に相談してください。
        </p>
      </Container>
    </Section>
  );
}
