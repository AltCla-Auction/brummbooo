import type { Metadata } from 'next';
import { Container, Section, PageHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'BrummBooo Driving Society のプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="プライバシーポリシー" />

      <Section padding="lg">
        <Container size="sm">
          <div className="prose-article">
            <p className="text-gray-600 leading-relaxed">
              BrummBooo Driving
              Society（以下「当団体」）は、お預かりする個人情報の重要性を認識し、
              以下のとおりプライバシーポリシーを定め、個人情報の保護に努めます。
            </p>

            <h2>1. 収集する情報</h2>
            <p className="text-gray-600 leading-relaxed">
              当団体は、お問い合わせフォームを通じて以下の情報を収集することがあります。
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>お名前</li>
              <li>メールアドレス</li>
              <li>組織名・施設名</li>
              <li>お問い合わせ内容</li>
            </ul>

            <h2>2. 情報の利用目的</h2>
            <p className="text-gray-600 leading-relaxed">
              収集した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>お問い合わせへの回答・対応</li>
              <li>
                クルマのおもちゃリレープロジェクトに関する連絡・調整
              </li>
              <li>活動報告の掲載に関する確認・連絡</li>
            </ul>

            <h2>3. 第三者への提供</h2>
            <p className="text-gray-600 leading-relaxed">
              当団体は、法令に基づく場合を除き、お預かりした個人情報を第三者に提供することはありません。
            </p>

            <h2>4. 情報の管理</h2>
            <p className="text-gray-600 leading-relaxed">
              当団体は、お預かりした個人情報を適切に管理し、漏えい、紛失、改ざん等の防止に努めます。
            </p>

            <h2>5. お問い合わせ</h2>
            <p className="text-gray-600 leading-relaxed">
              プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
            </p>

            <h2>6. 改定について</h2>
            <p className="text-gray-600 leading-relaxed">
              当団体は、必要に応じて本ポリシーを改定することがあります。
              改定した場合は、当サイトにて公表いたします。
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                制定日：2024年1月1日
                <br />
                事務局：オールコンパス株式会社
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
