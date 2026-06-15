import { Container, Section, SectionHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';
import { missionHighlights } from '@/content/mission';

export function MissionSection() {
  return (
    <Section
      id="mission"
      variant="surface"
      padding="lg"
      ariaLabelledby="mission-heading"
    >
      <Container>
        <SectionHeader
          id="mission-heading"
          title="なぜ、この活動を始めたのか"
          subtitle="チャイルドシートの普及は進んできました。それでも、ジュニアシートの利用や正しい座り方は、まだ十分に届いていません。未来を担う子どもたちを守るために、正しい情報を届ける——それが Brumm Booo Driving Society の出発点です。"
          align="center"
        />

        <ul className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto list-none p-0 m-0 mb-10">
          {missionHighlights.map((item, index) => (
            <li key={item.title}>
              <div className="bg-white rounded-xl p-6 h-full border border-gray-100 shadow-sm">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy text-white text-sm font-bold mb-4"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed text-pretty">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="max-w-2xl mx-auto space-y-5 text-gray-700 leading-relaxed text-pretty text-center">
          <p>
            子どもが後ろの席に座り、シートベルトをしていても、体に合っていなければ十分に守れないことがあります。
            本来防げたはずの痛ましい事故も、報告されています。
          </p>
          <p>
            これは保護者を責める話ではありません。
            正しい情報が届きにくい、見直すきっかけが少ない——その構造を変えていくことが、私たちの目的です。
          </p>
        </div>

        <aside className="mt-10 max-w-2xl mx-auto bg-white rounded-xl border border-orange/20 p-6 sm:p-8 shadow-sm">
          <p className="text-navy leading-relaxed text-pretty text-center">
            Brumm Booo Driving Society は、親を責めるための活動ではありません。
            「うちの子には、今の席で本当に合っているかな？」と見直すきっかけを届ける活動です。
          </p>
        </aside>

        <div className="mt-10 text-center">
          <Button as="link" href="/about" size="lg" ariaLabel="設立意旨の全文を読む">
            設立意旨を読む
          </Button>
        </div>
      </Container>
    </Section>
  );
}
