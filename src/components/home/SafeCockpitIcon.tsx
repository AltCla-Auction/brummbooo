import { cn } from '@/lib/utils';

type IconName =
  | 'neck'
  | 'belly'
  | 'posture'
  | 'loose'
  | 'fit'
  | 'age'
  | 'body'
  | 'belt'
  | 'seat'
  | 'fun'
  | 'check'
  | 'car'
  | 'steering';

interface IconProps {
  name: IconName;
  className?: string;
}

export function SafeCockpitIcon({ name, className }: IconProps) {
  const base = cn('shrink-0', className);

  switch (name) {
    case 'neck':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M24 22v12M18 28h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 38c2-4 6-6 8-6s6 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'belly':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="10" y="16" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
          <path d="M14 28h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="28" r="3" fill="currentColor" />
        </svg>
      );
    case 'posture':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M14 38V18l10-6 10 6v20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'loose':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 24h16M20 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        </svg>
      );
    case 'fit':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M10 34h28M14 34V20l10-8 10 8v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M20 26l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'age':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="24" y="42" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold">6+</text>
        </svg>
      );
    case 'body':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
          <path d="M24 17v14M18 24h12M16 38l8-7 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'belt':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M12 32l24-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <rect x="8" y="30" width="10" height="6" rx="1" fill="currentColor" />
          <rect x="30" y="14" width="10" height="6" rx="1" fill="currentColor" />
        </svg>
      );
    case 'seat':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M14 34V22c0-4 4-8 10-8s10 4 10 8v12" stroke="currentColor" strokeWidth="2" />
          <path d="M12 34h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'fun':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <path d="M16 28c2-4 6-6 8-6s6 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="18" cy="20" r="1.5" fill="currentColor" />
          <circle cx="30" cy="20" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'check':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <path d="M16 24l6 6 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'car':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M8 28h32l-4-12H12L8 28z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="16" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="32" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M6 28h36" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'steering':
      return (
        <svg className={base} viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M24 10v8M24 30v8M10 24h8M30 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
