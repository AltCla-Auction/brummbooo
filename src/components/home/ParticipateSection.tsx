import { Container, Section, SectionHeader } from '@/components/ui';
import { Button } from '@/components/ui/Button';

const CONTACT_EMAIL = 'contact@brummbooo.autos';

export function ParticipateSection() {
  return (
    <Section
      id="participate"
      variant="navy"
      padding="lg"
      ariaLabelledby="participate-heading"
    >
      <Container size="md">
        <SectionHeader
          id="participate-heading"
          title="この活動を一緒に広げませんか？"
          align="center"
          light
        />

        <p className="text-center text-white/85 leading-relaxed text-pretty max-w-2xl mx-auto mb-10">
          Brumm Booo Driving Society では、子どもの安全な席づくりを広げるため、地域イベント、ディーラー、整備工場、保育園・幼稚園、子育て支援団体、企業との連携を検討しています。
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            as="link"
            href={`/contact?subject=${encodeURIComponent('活動に協力する')}`}
            size="lg"
            variant="primary"
            ariaLabel="活動に協力する（お問い合わせフォームへ）"
          >
            活動に協力する
          </Button>
          <Button
            as="link"
            href={`/contact?subject=${encodeURIComponent('イベント開催を相談する')}`}
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 focus:ring-white/30"
            ariaLabel="イベント開催を相談する（お問い合わせフォームへ）"
          >
            イベント開催を相談する
          </Button>
          <Button
            as="link"
            href={`/contact?subject=${encodeURIComponent('シール配布について問い合わせる')}`}
            size="lg"
            variant="secondary"
            ariaLabel="シール配布について問い合わせる（お問い合わせフォームへ）"
          >
            シール配布について問い合わせる
          </Button>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          または{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-orange-light underline hover:no-underline"
          >
            {CONTACT_EMAIL}
          </a>
          までご連絡ください
        </p>
      </Container>
    </Section>
  );
}
