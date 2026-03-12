import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui';
import { aboutContent } from '@/content/about';

export const metadata: Metadata = {
  title: '設立趣旨',
  description:
    'Brummbooo Driving Society の設立趣旨。クルマ文化の原体験を、次の世代へつなぐために生まれた社会活動です。',
};

export default function AboutPage() {
  return (
    <>
      <div className="relative h-96 sm:h-[28rem] lg:h-[32rem]">
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          style={{ objectPosition: '50% 40%' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <article className="py-12 sm:py-16 lg:py-20 -mt-32 relative z-10">
        <Container size="md">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            <header className="mb-12 sm:mb-16">
              <p className="text-accent font-medium mb-4">{aboutContent.title}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {aboutContent.lead}
              </h1>
            </header>

            <div className="space-y-12 sm:space-y-16">
              {aboutContent.sections.map((section, index) => (
                <section
                  key={section.id}
                  className="scroll-mt-24"
                  id={section.id}
                >
                  {index > 0 && (
                    <h2 className="text-xl sm:text-2xl font-bold text-accent mb-6">
                      {section.title}
                    </h2>
                  )}
                  <div className="text-gray-700 text-base sm:text-lg leading-loose whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <footer className="mt-16 sm:mt-20 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                Brummbooo Driving Society
              </p>
            </footer>
          </div>
        </Container>
      </article>
    </>
  );
}
