import { cn } from '@/lib/utils';

type SectionVariant = 'default' | 'gray' | 'muted' | 'accent' | 'accent-dark';
type SectionPadding = 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  variant?: SectionVariant;
  padding?: SectionPadding;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-white',
  gray: 'bg-gray-50',
  muted: 'bg-cyan-50/50',
  accent: 'bg-gradient-to-br from-cyan-50 to-cyan-100/80',
  'accent-dark': 'bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-400 text-white',
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
}: SectionProps) {
  return (
    <section
      id={id}
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
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
