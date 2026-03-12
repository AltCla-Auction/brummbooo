'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from './Navigation';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo.png"
              alt="BrummBooo Driving Society"
              width={180}
              height={117}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:block">
            <Navigation />
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Navigation
              isMobile
              onItemClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
