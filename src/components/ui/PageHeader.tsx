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
    default: 'bg-gray-50 border-b border-gray-100',
    accent: 'bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-400 text-white',
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      <Container>
        <div className="py-12 sm:py-16 lg:py-20">
          <h1 className={cn(
            'text-3xl sm:text-4xl font-bold',
            variant === 'accent' ? 'text-white' : 'text-gray-900'
          )}>
            {title}
          </h1>
          {description && (
            <p className={cn(
              'mt-4 text-lg max-w-2xl',
              variant === 'accent' ? 'text-cyan-100' : 'text-gray-600'
            )}>
              {description}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
