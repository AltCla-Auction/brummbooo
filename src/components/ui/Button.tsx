import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
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
    'bg-accent text-white hover:bg-cyan-800 focus:ring-accent/20',
  secondary:
    'bg-cyan-50 text-cyan-900 hover:bg-cyan-100 focus:ring-cyan-300',
  outline:
    'border-2 border-accent text-accent hover:bg-cyan-50 focus:ring-accent/20',
  ghost:
    'text-gray-700 hover:bg-cyan-50 hover:text-accent focus:ring-cyan-200',
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
      <Link href={props.href} className={baseStyles}>
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
    >
      {children}
    </button>
  );
}
