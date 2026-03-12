import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-100',
        'shadow-sm hover:shadow-md transition-shadow duration-300',
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function CardLink({ href, className, children }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block bg-white rounded-xl border border-gray-100',
        'shadow-sm hover:shadow-md transition-all duration-300',
        'hover:border-accent/20',
        className
      )}
    >
      {children}
    </Link>
  );
}

interface CardImageProps {
  src: string;
  alt: string;
  aspectRatio?: 'video' | 'square' | '4/3';
  className?: string;
}

export function CardImage({
  src,
  alt,
  aspectRatio = 'video',
  className,
}: CardImageProps) {
  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    '4/3': 'aspect-[4/3]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-t-xl bg-gray-100',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return <div className={cn('p-5 sm:p-6', className)}>{children}</div>;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

export function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3
      className={cn(
        'text-lg font-semibold text-gray-900 leading-snug',
        className
      )}
    >
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-600 leading-relaxed', className)}>
      {children}
    </p>
  );
}
