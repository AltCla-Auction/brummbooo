'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'TOP' },
  { href: '/about', label: '設立趣旨' },
  { href: '/project', label: 'プロジェクト' },
  { href: '/relay-box', label: '設置協力' },
  { href: '/recipients', label: '提供先募集' },
  { href: '/reports', label: '活動報告' },
  { href: '/organization', label: '団体概要' },
  { href: '/contact', label: 'お問い合わせ' },
];

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function Navigation({ isMobile, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : (pathname === item.href || pathname.startsWith(item.href + '/'));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-accent'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => {
        const isActive = item.href === '/' ? pathname === '/' : (pathname === item.href || pathname.startsWith(item.href + '/'));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              isActive
                ? 'text-accent'
                : 'text-gray-600 hover:text-accent hover:bg-gray-50'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
