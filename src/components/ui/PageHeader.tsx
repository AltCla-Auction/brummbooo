import { cn } from '@/lib/utils';
import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
  variant?: 'default' | 'accent';
  className?: string;
}

export function PageHeader({ title, description, variant = 'accent', className }: PageHeaderProps) {
  const variantStyles = {
    default: 'bg-surface border-b border-gray-100',
    accent: 'bg-navy text-white',
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      <Container>
        <div className="py-12 sm:py-16 lg:py-20 text-center">
          <h1
            className={cn(
              'text-3xl sm:text-4xl font-bold text-balance max-w-3xl mx-auto',
              variant === 'accent' ? 'text-white' : 'text-gray-900'
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                'mt-4 text-base sm:text-lg max-w-2xl mx-auto text-pretty leading-relaxed whitespace-pre-line',
                variant === 'accent' ? 'text-white/80' : 'text-gray-600'
              )}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
