import type { Metadata } from 'next';
import {
  HeroSection,
  ApproachFlowSection,
  MissionSection,
  SafeCockpitSection,
  CheckPointsSection,
  KimiNoCockpitSection,
  ParentInfoSection,
  RoleSection,
  ParticipateSection,
} from '@/components/home';

export const metadata: Metadata = {
  title: '子どものセーフコクピット・プロジェクト',
  description:
    '子どもの体に合った安全な席づくりを広げる、Brumm Booo Driving Society の社会活動。チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
  openGraph: {
    title: '子どものセーフコクピット・プロジェクト｜Brumm Booo Driving Society',
    description:
      '子どもの体に合った安全な席づくりを広げる、Brumm Booo Driving Society の社会活動。チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ApproachFlowSection />
      <MissionSection />
      <SafeCockpitSection />
      <CheckPointsSection />
      <KimiNoCockpitSection />
      <ParentInfoSection />
      <RoleSection />
      <ParticipateSection />
    </>
  );
}
