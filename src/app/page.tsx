'use client';

import { useState, useEffect } from 'react';
import {
  Hero,
  AboutBrummbooo,
  ProjectIntro,
  TargetNavigation,
  RecentReports,
  AboutPreview,
} from '@/components/home';
import { getPublishedReports } from '@/lib/reports-service';
import type { ReportListItem } from '@/types';

export default function HomePage() {
  const [reports, setReports] = useState<ReportListItem[]>([]);

  useEffect(() => {
    getPublishedReports(3).then(setReports).catch(console.error);
  }, []);

  return (
    <>
      <Hero />
      <AboutBrummbooo />
      <ProjectIntro />
      <TargetNavigation />
      {reports.length > 0 && <RecentReports reports={reports} />}
      <AboutPreview />
    </>
  );
}
