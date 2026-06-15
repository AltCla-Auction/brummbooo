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
    '社会貢献活動を行う任意団体 Brumm Booo Driving Society。子どもの体に合った安全な席づくりを広げ、チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
  openGraph: {
    title: '子どものセーフコクピット・プロジェクト｜Brumm Booo Driving Society',
    description:
      '社会貢献活動を行う任意団体 Brumm Booo Driving Society。子どもの体に合った安全な席づくりを広げ、チャイルドシート、ジュニアシート、後席シートベルトを親子で見直すきっかけを届けます。',
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
