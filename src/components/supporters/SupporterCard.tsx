import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Supporter } from '@/content/supporters';

interface SupporterCardProps {
  supporter: Supporter;
}

export function SupporterCard({ supporter }: SupporterCardProps) {
  const logoArea = (
    <div
      className={cn(
        'flex items-center justify-center h-24 sm:h-28 px-6 rounded-xl mb-6',
        supporter.logoOnDark ? 'bg-navy' : 'bg-white'
      )}
    >
      <Image
        src={supporter.logoSrc}
        alt={supporter.logoAlt}
        width={280}
        height={80}
        className={cn(
          'h-10 sm:h-12 w-auto max-w-full object-contain',
          !supporter.logoOnDark && 'max-h-12'
        )}
      />
    </div>
  );

  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 h-full flex flex-col">
      <p className="text-xs font-semibold tracking-wide text-orange-dark uppercase mb-3">
        {supporter.roleLabel}
      </p>

      {supporter.websiteUrl ? (
        <a
          href={supporter.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`${supporter.name}のウェブサイト（新しいタブで開く）`}
        >
          {logoArea}
          <h2 className="text-lg sm:text-xl font-bold text-navy group-hover:text-orange-dark transition-colors">
            {supporter.name}
            <span className="inline-block ml-1 text-orange/70" aria-hidden="true">
              ↗
            </span>
          </h2>
        </a>
      ) : (
        <>
          {logoArea}
          <h2 className="text-lg sm:text-xl font-bold text-navy">{supporter.name}</h2>
        </>
      )}

      <div className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line text-pretty flex-1">
        {supporter.message}
      </div>
    </article>
  );
}

interface SupporterListProps {
  items: Supporter[];
  heading: string;
  id?: string;
}

export function SupporterList({ items, heading, id }: SupporterListProps) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-xl sm:text-2xl font-bold text-navy mb-6 sm:mb-8">
        {heading}
      </h2>
      <ul className="grid sm:grid-cols-2 gap-6 sm:gap-8 list-none p-0 m-0">
        {items.map((supporter) => (
          <li key={supporter.id}>
            <SupporterCard supporter={supporter} />
          </li>
        ))}
      </ul>
    </section>
  );
}
