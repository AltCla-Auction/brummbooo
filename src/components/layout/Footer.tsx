import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  about: [
    { href: '/about', label: '設立趣旨' },
    { href: '/project', label: 'プロジェクト' },
    { href: '/organization', label: '団体概要' },
  ],
  participate: [
    { href: '/relay-box', label: 'リレーボックス設置' },
    { href: '/recipients', label: '提供先募集' },
    { href: '/contact', label: 'お問い合わせ' },
  ],
  info: [
    { href: '/reports', label: '活動報告' },
    { href: '/privacy', label: 'プライバシーポリシー' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 via-cyan-700 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logo.png"
                alt="Brummbooo Driving Society"
                width={150}
                height={98}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-cyan-200 leading-relaxed">
              クルマ文化の原体験を、次の世代へ。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              この活動について
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cyan-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              参加する
            </h3>
            <ul className="space-y-3">
              {footerLinks.participate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cyan-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              情報
            </h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cyan-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-cyan-300">
              事務局：オールコンパス株式会社
            </p>
            <p className="text-xs text-cyan-300">
              © {new Date().getFullYear()} Brummbooo Driving Society
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
