import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Brumm Booo Driving Society トップページへ"
            >
              <Image
                src="/images/logo-white.png"
                alt="Brumm Booo Driving Society"
                width={150}
                height={98}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm font-medium text-orange-light">
              子どものセーフコクピット・プロジェクト
            </p>
            <p className="mt-3 text-sm text-white/70 leading-relaxed text-pretty max-w-md">
              「あの時、ちゃんと合う車のシートにしておけばよかった。」そんな後悔を、なくしたい。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                サイトメニュー
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    設立意旨
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#safe-cockpit"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    セーフコクピットとは
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#checkpoints"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    チェックポイント
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#kimi-no-cockpit"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    きみのコクピット
                  </Link>
                </li>
                <li>
                  <Link
                    href="/supporters"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    サポーター・パートナー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#participate"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    活動に参加する
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">
                お問い合わせ
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-white/50">
              運営会社：オールコンパス株式会社
            </p>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Brumm Booo Driving Society
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
