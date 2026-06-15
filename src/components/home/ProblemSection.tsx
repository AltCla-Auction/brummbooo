import { Container, Section, SectionHeader } from '@/components/ui';

export function ProblemSection() {
  return (
    <Section variant="surface" padding="lg" ariaLabelledby="problem-heading">
      <Container size="md">
        <SectionHeader
          id="problem-heading"
          title="「座っているから大丈夫」とは限らない。"
          align="center"
        />

        <div className="max-w-2xl mx-auto space-y-5 text-gray-700 leading-relaxed text-pretty">
          <p>
            子どもが後ろの席に座っている。
            シートベルトもしている。
            それでも、子どもの体に合っていないと、事故のときに十分に守れないことがあります。
          </p>
          <p>
            大人用のシートベルトは、大人の体に合わせて作られています。
            子どもの身長や体格によっては、ベルトが首やお腹にかかってしまうことがあります。
          </p>
        </div>

        <aside className="mt-10 max-w-2xl mx-auto bg-white rounded-xl border border-orange/20 p-6 sm:p-8 shadow-sm">
          <p className="text-navy leading-relaxed text-pretty">
            Brumm Booo Driving Society は、親を責めるための活動ではありません。
            「うちの子には、今の席で本当に合っているかな？」と見直すきっかけを届ける活動です。
          </p>
        </aside>
      </Container>
    </Section>
  );
}
