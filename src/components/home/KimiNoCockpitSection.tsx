import { Container, Section, SectionHeader } from '@/components/ui';
import { KIMI_STEPS } from '@/content/safe-cockpit';

export function KimiNoCockpitSection() {
  return (
    <Section
      id="kimi-no-cockpit"
      variant="orange"
      padding="lg"
      ariaLabelledby="kimi-heading"
    >
      <Container>
        <SectionHeader
          id="kimi-heading"
          title="きみのコクピットでGO！"
          align="center"
        />

        <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed text-pretty mb-10">
          子どもにとって、チャイルドシートやジュニアシートは「座らされる場所」になりがちです。
          Brumm Booo Driving Society では、その車のシートを「きみのコクピット」として楽しめるように、名前を書けるシールやカードを使った取り組みを進めます。
        </p>

        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-sm font-medium text-orange-dark mb-2">
            きみのコクピットプロジェクトの合言葉
          </p>
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-wide"
            aria-label="合言葉：カチッとしたらGO！"
          >
            カチッとしたらGO！
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-pretty">
            「カチッ」という音を、出発の合図に。
            自分のコクピットに座って、ベルトを確認してから出発する。
            そんな親子の小さな習慣をつくります。
          </p>
        </div>

        <ol className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 list-none p-0 m-0">
          {KIMI_STEPS.map((step) => (
            <li key={step.step} className="relative">
              <div className="bg-white rounded-xl p-6 h-full border border-orange/20 shadow-sm">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white text-lg font-bold mb-4"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p
          className="mt-10 max-w-2xl mx-auto text-sm text-gray-600 leading-relaxed text-center bg-white/70 rounded-xl p-5 border border-orange/10"
          role="note"
        >
          シールやカードを使用する場合は、チャイルドシート本体の注意表示、ベルト、可動部、エアバッグ等の安全機能を妨げない位置で使用してください。
        </p>
      </Container>
    </Section>
  );
}
