import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'ページが見つかりません',
};

export default function NotFound() {
  return (
    <Section padding="xl">
      <Container size="sm">
        <div className="text-center">
          <p className="text-6xl sm:text-8xl font-bold text-accent/20 mb-4">
            404
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ページが見つかりません
          </h1>

          <p className="text-gray-600 mb-8">
            お探しのページは移動または削除された可能性があります。
            <br />
            URLをご確認の上、再度お試しください。
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as="link" href="/">
              トップページへ戻る
            </Button>
            <Button as="link" href="/contact" variant="outline">
              お問い合わせ
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
