import Link from 'next/link';
import { Container, Section, SectionHeader } from '@/components/ui';

export function ProjectIntro() {
  return (
    <Section variant="muted" padding="lg">
      <Container>
        <SectionHeader
          title="私たちの活動"
          subtitle="BrummBooo Driving Societyは、以下のプロジェクトを通じてクルマ文化を次世代へつなぎます。"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-7 h-7 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  クルマのおもちゃリレープロジェクト
                </h3>
                <p className="text-gray-500 mt-1">Toy Car Relay Project</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                家庭で遊び終わったクルマのおもちゃを回収し、必要とする幼稚園・保育園・学童・児童館へお届けする活動です。
              </p>
              <p>
                おもちゃを捨てるのではなく、次の子どもへ手渡す。ひとつのおもちゃが子どもから子どもへとリレーされることで、クルマ文化そのものがリレーされていきます。
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">リレーボックス</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  おもちゃを回収するための専用ボックス。ディーラー、整備工場、カーショップなどに設置いただいています。
                </p>
                <Link
                  href="/relay-box"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-accent font-medium hover:gap-2 transition-all"
                >
                  設置協力について
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900">提供先</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  回収したおもちゃは、幼稚園・保育園・学童・児童館など、子どもたちが集まる場所へお届けします。
                </p>
                <Link
                  href="/recipients"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-accent font-medium hover:gap-2 transition-all"
                >
                  提供先募集について
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/project"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                プロジェクト詳細を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
