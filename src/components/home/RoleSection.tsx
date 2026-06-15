import { Container, Section, SectionHeader } from '@/components/ui';
import { ROLE_DO, ROLE_DONT } from '@/content/safe-cockpit';
import { SafeCockpitIcon } from './SafeCockpitIcon';

export function RoleSection() {
  return (
    <Section
      id="role"
      variant="surface"
      padding="lg"
      ariaLabelledby="role-heading"
    >
      <Container>
        <SectionHeader
          id="role-heading"
          title="Brumm Booo Driving Society の役割"
          subtitle="Brumm Booo Driving Society は、社会貢献活動を行う任意団体です。親子で安全な席を見直すきっかけをつくることを大切にし、専門的な診断や安全の保証は行いません。わかりやすい情報発信と、家庭で続けやすい習慣づくりに取り組んでいます。"
          align="center"
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-green-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600">
                <SafeCockpitIcon name="check" className="w-6 h-6" />
              </span>
              <h3 className="text-lg font-semibold text-navy">やること</h3>
            </div>
            <ul className="space-y-3">
              {ROLE_DO.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <span className="text-green-500 mt-1 shrink-0" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-navy">やらないこと</h3>
            </div>
            <ul className="space-y-3">
              {ROLE_DONT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <span className="text-gray-400 mt-1 shrink-0" aria-hidden="true">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
