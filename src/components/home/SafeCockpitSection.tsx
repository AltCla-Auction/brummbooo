import { Container, Section, SectionHeader } from '@/components/ui';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/Card';
import { SAFE_COCKPIT_CARDS } from '@/content/safe-cockpit';
import { SafeCockpitIcon } from './SafeCockpitIcon';

export function SafeCockpitSection() {
  return (
    <Section
      id="safe-cockpit"
      variant="default"
      padding="lg"
      ariaLabelledby="safe-cockpit-heading"
    >
      <Container>
        <SectionHeader
          id="safe-cockpit-heading"
          title="セーフコクピットとは？"
          subtitle="正しい情報を家庭に届けるための考え方です。チャイルドシートやジュニアシート、後席シートベルト、座り方——子どもに合った「安全な席」を、ひとつの概念として捉えます。"
          align="center"
        />

        <p className="max-w-2xl mx-auto text-center text-gray-700 leading-relaxed text-pretty mb-10 sm:mb-12">
          設立意旨でお伝えした課題を、家庭で見直しやすい形にしたのがセーフコクピットです。
          年齢だけで判断するのではなく、身長・体格・ベルトの位置・座り方まで含めて、子どもにとっての「安全なコクピット」として考えます。
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 list-none p-0 m-0">
          {SAFE_COCKPIT_CARDS.map((card) => (
            <li key={card.title}>
              <Card className="h-full border-orange/10 hover:border-orange/30">
                <CardContent>
                  <div
                    className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-orange-dark mb-4"
                    aria-hidden="true"
                  >
                    <SafeCockpitIcon name={card.icon} className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-navy">{card.title}</CardTitle>
                  <CardDescription className="mt-3">{card.description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
