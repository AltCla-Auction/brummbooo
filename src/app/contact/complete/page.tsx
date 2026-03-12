import type { Metadata } from 'next';
import { Container, Section, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: '送信完了',
  description: 'お問い合わせを受け付けました。',
};

export default function ContactCompletePage() {
  return (
    <Section padding="xl">
      <Container size="sm">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            お問い合わせを受け付けました
          </h1>

          <p className="text-gray-600 mb-8">
            お問い合わせいただきありがとうございます。
            <br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>

          <p className="text-sm text-gray-500 mb-8">
            ※ 通常、3営業日以内にご返信いたします。
            <br />
            しばらく経っても返信がない場合は、
            <br />
            お手数ですが再度お問い合わせください。
          </p>

          <Button as="link" href="/">
            トップページへ戻る
          </Button>
        </div>
      </Container>
    </Section>
  );
}
