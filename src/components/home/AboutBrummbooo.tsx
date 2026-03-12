import Link from 'next/link';
import { Container, Section, SectionHeader } from '@/components/ui';

export function AboutBrummbooo() {
  return (
    <Section id="about-brummbooo" variant="accent" padding="lg">
      <Container>
        <SectionHeader
          title="BrummBooo Driving Society とは"
          subtitle="子どもたちにクルマ文化との原体験を届けるプロジェクトです。"
        />

        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              BrummBooo Driving Society（ブルンブー・ドライビング・ソサエティ）は、クルマ文化を次の世代へつないでいくことを目的としたプロジェクトです。
            </p>
            <p>
              子どもたちがクルマのおもちゃを手に取り、「ブーブー」と言いながら遊ぶ。その何気ない原体験が、将来のクルマ好きを育て、クルマ文化そのものを支える力になると私たちは考えています。
            </p>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-cyan-100">
            <h3 className="text-lg font-bold text-accent mb-4">
              「BrummBooo」の由来
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                日本では、子どもたちはクルマを「ブーブー」と呼びます。ドイツでは「BrummBrumm（ブルンブルン）」。世界中で、子どもたちはクルマの音を真似て遊んでいます。
              </p>
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="bg-cyan-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent mb-1">Brumm</p>
                  <p className="text-sm text-gray-500">ドイツ語の「ブルン」</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4 text-center flex items-center justify-center">
                  <p className="text-2xl text-cyan-300">+</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent mb-1">Booo</p>
                  <p className="text-sm text-gray-500">日本語の「ブー」を英語化</p>
                </div>
              </div>
              <p>
                ドイツ語の「Brumm」と、日本語の「ブー」を英語化した「Booo」を組み合わせ、<strong className="text-accent">BrummBooo（ブルンブー）</strong>という名前が生まれました。
              </p>
              <p>
                世界の子どもたちが共有する「クルマの音」を名前に込め、この活動が国境を越えて広がっていくことを願っています。
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              設立趣旨を読む
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
