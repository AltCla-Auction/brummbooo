import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: 'link';
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-orange text-white hover:bg-orange-dark focus:ring-orange/30',
  secondary:
    'bg-cream text-navy hover:bg-primary-100 focus:ring-orange/20',
  outline:
    'border-2 border-orange text-orange hover:bg-cream focus:ring-orange/20',
  ghost:
    'text-navy hover:bg-surface hover:text-orange-dark focus:ring-orange/20',
  navy:
    'bg-navy text-white hover:bg-navy-light focus:ring-navy/30',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ariaLabel,
  } = props;

  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium rounded-lg',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={baseStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={baseStyles}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
