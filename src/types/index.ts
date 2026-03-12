import { Timestamp } from 'firebase/firestore';

export type ReportCategory =
  | 'event'
  | 'installation'
  | 'delivery'
  | 'news'
  | 'media';

export type ReportStatus = 'draft' | 'published';

export interface Report {
  id: string;
  title: string;
  slug: string;
  publishedAt: Timestamp | null;
  thumbnailUrl?: string;
  excerpt?: string;
  content: string;
  category?: ReportCategory;
  status: ReportStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ReportInput {
  title: string;
  slug: string;
  publishedAt?: Date | null;
  thumbnailUrl?: string;
  excerpt?: string;
  content: string;
  category?: ReportCategory;
  status: ReportStatus;
}

export type ReportListItem = Omit<Report, 'content'>;

export type InquiryType =
  | 'provide'
  | 'install'
  | 'receive'
  | 'media'
  | 'other';

export interface ContactFormData {
  inquiryType: InquiryType;
  name: string;
  email: string;
  organization?: string;
  message: string;
}

export interface Contact extends ContactFormData {
  id: string;
  createdAt: Timestamp;
  status: 'new' | 'read' | 'replied';
}

export interface Partner {
  id: string;
  name: string;
  type: 'dealer' | 'garage' | 'shop' | 'other';
  prefecture: string;
  city?: string;
  url?: string;
  logoUrl?: string;
}

export interface Recipient {
  id: string;
  name: string;
  type: 'kindergarten' | 'nursery' | 'afterschool' | 'facility' | 'other';
  prefecture: string;
  city?: string;
  deliveredAt?: Timestamp;
}

export const CATEGORY_LABELS: Record<ReportCategory, string> = {
  event: 'イベント',
  installation: '設置報告',
  delivery: '提供報告',
  news: 'お知らせ',
  media: 'メディア掲載',
};

export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  provide: 'おもちゃを提供したい',
  install: 'リレーボックスを設置したい',
  receive: '提供先として相談したい',
  media: '取材・連携について',
  other: 'その他',
};

export const STATUS_LABELS: Record<ReportStatus, string> = {
  draft: '下書き',
  published: '公開',
};
