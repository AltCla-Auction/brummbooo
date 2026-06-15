'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  isAnchor?: boolean;
}

const navItems: NavItem[] = [
  { href: '/about', label: '設立意旨' },
  { href: '/#safe-cockpit', label: 'セーフコクピット', isAnchor: true },
  { href: '/#checkpoints', label: 'チェックポイント', isAnchor: true },
  { href: '/#kimi-no-cockpit', label: 'きみのコクピット', isAnchor: true },
  { href: '/#parent-info', label: '保護者向け情報', isAnchor: true },
  { href: '/contact', label: 'お問い合わせ' },
];

interface NavigationProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function Navigation({ isMobile, onItemClick }: NavigationProps) {
  const pathname = usePathname();

  const isActive = (item: NavItem) => {
    if (item.href === '/about') {
      return pathname === '/about';
    }
    if (item.isAnchor) {
      return pathname === '/';
    }
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col gap-1" aria-label="モバイルナビゲーション">
        <Link
          href="/"
          onClick={onItemClick}
          className={cn(
            'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
            pathname === '/'
              ? 'bg-orange/10 text-orange-dark'
              : 'text-gray-700 hover:bg-surface hover:text-orange-dark'
          )}
        >
          トップ
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
              isActive(item)
                ? 'bg-orange/10 text-orange-dark'
                : 'text-gray-700 hover:bg-surface hover:text-orange-dark'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-1" aria-label="デスクトップナビゲーション">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap',
            isActive(item)
              ? 'text-orange-dark'
              : 'text-gray-600 hover:text-orange-dark hover:bg-cream'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
