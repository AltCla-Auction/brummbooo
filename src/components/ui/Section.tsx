import { cn } from '@/lib/utils';

type SectionVariant =
  | 'default'
  | 'gray'
  | 'cream'
  | 'surface'
  | 'navy'
  | 'orange'
  | 'muted'
  | 'accent'
  | 'accent-dark';
type SectionPadding = 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  variant?: SectionVariant;
  padding?: SectionPadding;
  className?: string;
  id?: string;
  children: React.ReactNode;
  ariaLabelledby?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-white',
  gray: 'bg-surface',
  cream: 'bg-cream',
  surface: 'bg-surface',
  navy: 'bg-navy text-white',
  orange: 'bg-gradient-to-br from-cream to-primary-100',
  muted: 'bg-cream/60',
  accent: 'bg-gradient-to-br from-cream to-primary-100',
  'accent-dark': 'bg-navy text-white',
};

const paddingStyles: Record<SectionPadding, string> = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-24',
  xl: 'py-20 sm:py-32',
};

export function Section({
  variant = 'default',
  padding = 'lg',
  className,
  id,
  children,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(variantStyles[variant], paddingStyles[padding], className)}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
  id,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        id={id}
        className={cn(
          'text-2xl sm:text-3xl font-bold text-balance',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-3 text-base sm:text-lg max-w-2xl mx-auto text-pretty leading-relaxed',
            light ? 'text-white/80' : 'text-gray-600',
            align === 'left' && 'mx-0'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
