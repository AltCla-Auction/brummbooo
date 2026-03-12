import Image from 'next/image';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/90 via-cyan-600/80 to-cyan-400/70" />
      </div>

      <Container className="relative z-10">
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              クルマ文化の原体験を、
              <br />
              <span className="text-cyan-200">次の世代へ。</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-cyan-100 leading-relaxed">
              BrummBooo Driving Society（ブルンブー・ドライビング・ソサエティ）は、クルマ文化を次世代につなぐプロジェクトです。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button as="link" href="#about-brummbooo" size="lg" className="!bg-white !text-cyan-700 hover:!bg-cyan-50">
                BrummBoooとは
              </Button>
              <Button as="link" href="/project" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                プロジェクトを見る
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
