import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SafeCockpitIcon } from './SafeCockpitIcon';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-cream via-white to-white"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-56 h-56 rounded-full bg-navy/5 blur-3xl" />
      </div>

      <Container size="lg" className="relative py-12 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm sm:text-base font-medium text-orange-dark tracking-wide">
              Brumm Booo Driving Society presents
            </p>

            <h1
              id="hero-heading"
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-snug text-balance"
            >
              「あの時、ちゃんと合う席にしておけばよかった。」
              <br />
              <span className="text-orange-dark">そんな後悔を、なくしたい。</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed text-pretty">
              チャイルドシート、ジュニアシート、後席シートベルト。
              子どもの席は、年齢だけでなく、身長や体格に合っていることが大切です。
              Brumm Booo Driving Society は、社会貢献活動を行う任意団体として、子どもの体に合った&ldquo;安全な席&rdquo;を親子で見直す取り組みを進めています。
            </p>

            <p className="mt-6 text-lg sm:text-xl font-semibold text-navy">
              その席、本当にその子に合っていますか？
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button
                as="link"
                href="/about"
                size="lg"
                ariaLabel="設立意旨を読む"
              >
                設立意旨を読む
              </Button>
              <Button
                as="link"
                href="#safe-cockpit"
                variant="outline"
                size="lg"
                ariaLabel="セーフコクピットを知る"
              >
                セーフコクピットを知る
              </Button>
              <Button
                as="link"
                href="#checkpoints"
                variant="secondary"
                size="lg"
                ariaLabel="チェックポイントを見る"
              >
                チェックポイントを見る
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-navy/90 to-navy-light shadow-xl"
              role="img"
              aria-label="親子で後席の安全な席を確認するイメージ（画像準備中）"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="flex items-center gap-4 mb-6">
                  <SafeCockpitIcon name="car" className="w-16 h-16 text-orange" />
                  <SafeCockpitIcon name="steering" className="w-12 h-12 text-white/60" />
                </div>
                <p className="text-white/90 text-sm sm:text-base font-medium">
                  親子で、安全な席を見直す
                </p>
                <p className="mt-2 text-white/50 text-xs sm:text-sm">
                  画像差し替え予定
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                  <span className="w-2 h-2 rounded-full bg-orange/60" />
                  <span className="w-2 h-2 rounded-full bg-orange/30" />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange/20 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
