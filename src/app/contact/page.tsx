import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, PageHeader } from '@/components/ui';
import { ContactForm } from '@/components/contact';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'Brummbooo Driving Society へのお問い合わせ。おもちゃの提供、リレーボックスの設置、提供先としてのご相談など、お気軽にご連絡ください。',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="お問い合わせ"
        description="ご質問・ご相談などお気軽にお問い合わせください。"
      />

      <Section variant="muted" padding="lg">
        <Container size="sm">
          <div className="bg-white rounded-xl p-6 mb-8 border border-cyan-100">
            <h2 className="font-semibold text-gray-900 mb-3">
              お問い合わせの前に
            </h2>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>
                  おもちゃの提供方法については、
                  <Link
                    href="/project"
                    className="text-accent hover:underline"
                  >
                    プロジェクトページ
                  </Link>
                  をご確認ください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>
                  リレーボックスの設置については、
                  <Link
                    href="/relay-box"
                    className="text-accent hover:underline"
                  >
                    設置協力ページ
                  </Link>
                  をご確認ください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>
                  提供先としてのお申し込みは、
                  <Link
                    href="/recipients"
                    className="text-accent hover:underline"
                  >
                    提供先募集ページ
                  </Link>
                  をご確認ください。
                </span>
              </li>
            </ul>
          </div>

          <ContactForm />

          <p className="mt-8 text-sm text-gray-500 text-center">
            <Link href="/privacy" className="text-accent hover:underline">
              プライバシーポリシー
            </Link>
            に同意の上、送信してください。
          </p>
        </Container>
      </Section>
    </>
  );
}
