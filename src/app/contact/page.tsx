import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, PageHeader } from '@/components/ui';
import { ContactForm } from '@/components/contact';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'Brumm Booo Driving Society へのお問い合わせ。活動への協力、イベント開催、きみのコクピットシール配布など、お気軽にご連絡ください。',
};

const subjectToInquiryType: Record<string, string> = {
  活動に協力する: 'cooperate',
  イベント開催を相談する: 'event',
  シール配布について問い合わせる: 'sticker',
};

interface ContactPageProps {
  searchParams: { subject?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const defaultInquiryType = searchParams.subject
    ? subjectToInquiryType[searchParams.subject]
    : undefined;

  return (
    <>
      <PageHeader
        title="お問い合わせ"
        description={'子どものセーフコクピット・プロジェクトに関するご質問・ご相談は、\nこちらからお送りください。'}
      />

      <Section variant="cream" padding="lg">
        <Container size="sm">
          <div className="bg-white rounded-xl p-6 mb-8 border border-orange/15 shadow-sm">
            <h2 className="font-semibold text-navy mb-3">
              お問い合わせの前に
            </h2>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-orange mt-0.5" aria-hidden="true">•</span>
                <span>
                  チャイルドシートの装着診断や安全認定は行っておりません。装着のご相談は、
                  <a
                    href="https://www.jaf.or.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-dark hover:underline"
                  >
                    JAF
                  </a>
                  、メーカー、販売店などの専門窓口をご利用ください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange mt-0.5" aria-hidden="true">•</span>
                <span>
                  チェックポイントや設立意旨は
                  <Link href="/about" className="text-orange-dark hover:underline">
                    設立意旨ページ
                  </Link>
                  、
                  <Link href="/#checkpoints" className="text-orange-dark hover:underline">
                    チェックポイント
                  </Link>
                  をご確認ください。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange mt-0.5" aria-hidden="true">•</span>
                <span>
                  活動への協力、イベント開催、シール配布のご相談は、下記フォームよりお問い合わせください。
                </span>
              </li>
            </ul>
          </div>

          <ContactForm defaultInquiryType={defaultInquiryType} />

          <p className="mt-8 text-sm text-gray-500 text-center">
            <Link href="/privacy" className="text-orange-dark hover:underline">
              プライバシーポリシー
            </Link>
            に同意の上、送信してください。
          </p>
        </Container>
      </Section>
    </>
  );
}
