import { clsx, type ClassValue } from 'clsx';
import { Timestamp } from 'firebase/firestore';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Timestamp | Date | string | null): string {
  if (!date) return '';
  
  let d: Date;
  if (date instanceof Timestamp) {
    d = date.toDate();
  } else if (date instanceof Date) {
    d = date;
  } else {
    d = new Date(date);
  }

  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: Timestamp | Date | string | null): string {
  if (!date) return '';
  
  let d: Date;
  if (date instanceof Timestamp) {
    d = date.toDate();
  } else if (date instanceof Date) {
    d = date;
  } else {
    d = new Date(date);
  }

  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

export function formatDateForInput(date: Timestamp | Date | null): string {
  if (!date) return '';
  
  const d = date instanceof Timestamp ? date.toDate() : date;
  return d.toISOString().split('T')[0];
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

export function generateExcerpt(content: string, maxLength: number = 120): string {
  const plainText = stripHtml(content);
  return truncateText(plainText, maxLength);
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
