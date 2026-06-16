import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

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

            <div className="mt-4 space-y-2">
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed text-pretty">
                あの時、ちゃんと合う車のシートにしておけばよかった。
              </p>
              <p className="text-lg sm:text-xl font-semibold text-orange-dark leading-relaxed text-pretty">
                そんな後悔を、なくしたい。
              </p>
            </div>

            <h1
              id="hero-heading"
              className="mt-6 text-xl sm:text-2xl lg:text-3xl font-bold text-navy leading-snug tracking-tight"
            >
              <span className="block">子どものセーフコクピット・</span>
              <span className="block whitespace-nowrap">プロジェクト</span>
            </h1>

            <div className="mt-5 space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed text-pretty max-w-xl">
              <p>
                チャイルドシート、ジュニアシート、後席シートベルト。
                子どもの車のシートは、年齢だけでなく、身長や体格に合っていることが大切です。
              </p>
              <p>
                Brumm Booo Driving Society は、社会貢献活動を行う任意団体として、このプロジェクトを通じて、子どもの体に合った&ldquo;安全な車のシート&rdquo;を親子で見直す取り組みを進めています。
              </p>
            </div>

            <p className="mt-5 text-base sm:text-lg font-semibold text-navy max-w-xl">
              その車のシート、本当にその子に合っていますか？
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
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/hero-safe-cockpit.jpg"
                alt="後席で、親が子どものチャイルドシートのベルトを確認している様子"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
