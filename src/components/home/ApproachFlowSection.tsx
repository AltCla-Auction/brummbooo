import { Container, Section } from '@/components/ui';

const steps = [
  {
    number: 1,
    title: '設立意旨',
    description: 'なぜ、正しい情報を届ける必要があるのか。社会課題と、私たちの目的。',
    href: '/about',
    hrefLabel: '設立意旨ページへ',
  },
  {
    number: 2,
    title: 'セーフコクピット',
    description: '正しい情報を家庭に届けるための考え方。子どもに合った「安全な席」をひとつの概念として捉えます。',
    href: '#safe-cockpit',
    hrefLabel: 'セーフコクピットを見る',
  },
  {
    number: 3,
    title: 'チェックポイント',
    description: 'セーフコクピットを親子で見直すための、具体的な入口。出発前に確認できるポイントです。',
    href: '#checkpoints',
    hrefLabel: 'チェックポイントを見る',
  },
] as const;

export function ApproachFlowSection() {
  return (
    <Section variant="cream" padding="md" aria-labelledby="approach-flow-heading">
      <Container size="md">
        <h2
          id="approach-flow-heading"
          className="sr-only"
        >
          このサイトの構成
        </h2>
        <nav aria-label="活動の考え方の流れ">
          <ol className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-stretch list-none p-0 m-0">
            {steps.map((step, index) => (
              <li key={step.number} className="flex-1 flex items-stretch">
                <div className="flex flex-col sm:flex-row items-stretch flex-1">
                  <a
                    href={step.href}
                    className="flex-1 block bg-white rounded-xl p-5 border border-orange/15 hover:border-orange/40 transition-colors shadow-sm group"
                  >
                    <span className="text-xs font-medium text-orange-dark">
                      STEP {step.number}
                    </span>
                    <h3 className="mt-1 font-bold text-navy group-hover:text-orange-dark transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed text-pretty">
                      {step.description}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-orange-dark">
                      {step.hrefLabel} →
                    </span>
                  </a>
                  {index < steps.length - 1 && (
                    <span
                      className="hidden sm:flex items-center px-3 text-orange/40"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </Section>
  );
}
