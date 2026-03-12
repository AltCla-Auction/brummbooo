import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from 'firebase/firestore';
import { getDb } from './firebase';
import type { Report, ReportListItem, ReportInput } from '@/types';

const COLLECTION = 'reports';

function toReport(id: string, data: Record<string, unknown>): Report {
  return {
    id,
    title: data.title as string,
    slug: data.slug as string,
    publishedAt: data.publishedAt as Timestamp | null,
    thumbnailUrl: data.thumbnailUrl as string | undefined,
    excerpt: data.excerpt as string | undefined,
    content: data.content as string,
    category: data.category as Report['category'],
    status: data.status as Report['status'],
    createdAt: data.createdAt as Timestamp,
    updatedAt: data.updatedAt as Timestamp,
  };
}

function toReportListItem(id: string, data: Record<string, unknown>): ReportListItem {
  return {
    id,
    title: data.title as string,
    slug: data.slug as string,
    publishedAt: data.publishedAt as Timestamp | null,
    thumbnailUrl: data.thumbnailUrl as string | undefined,
    excerpt: data.excerpt as string | undefined,
    category: data.category as Report['category'],
    status: data.status as Report['status'],
    createdAt: data.createdAt as Timestamp,
    updatedAt: data.updatedAt as Timestamp,
  };
}

export async function getPublishedReports(maxCount?: number): Promise<ReportListItem[]> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where('status', '==', 'published'),
    orderBy('publishedAt', 'desc'),
    ...(maxCount ? [limit(maxCount)] : [])
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => toReportListItem(doc.id, doc.data()));
}

export async function getAllReports(): Promise<ReportListItem[]> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    orderBy('updatedAt', 'desc')
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => toReportListItem(doc.id, doc.data()));
}

export async function getReportBySlug(slug: string): Promise<Report | null> {
  const db = getDb();
  const q = query(
    collection(db, COLLECTION),
    where('slug', '==', slug),
    limit(1)
  );

  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;

  const docData = snapshot.docs[0];
  return toReport(docData.id, docData.data());
}

export async function getReportById(id: string): Promise<Report | null> {
  const db = getDb();
  const docRef = doc(db, COLLECTION, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) return null;
  return toReport(docSnap.id, docSnap.data());
}

export async function createReport(input: ReportInput): Promise<string> {
  const db = getDb();
  const now = Timestamp.now();
  const data = {
    ...input,
    publishedAt: input.publishedAt ? Timestamp.fromDate(input.publishedAt) : null,
    createdAt: now,
    updatedAt: now,
  };

  const docRef = await addDoc(collection(db, COLLECTION), data);
  return docRef.id;
}

export async function updateReport(id: string, input: Partial<ReportInput>): Promise<void> {
  const db = getDb();
  const docRef = doc(db, COLLECTION, id);
  const updateData: Record<string, unknown> = {
    ...input,
    updatedAt: Timestamp.now(),
  };

  if (input.publishedAt !== undefined) {
    updateData.publishedAt = input.publishedAt ? Timestamp.fromDate(input.publishedAt) : null;
  }

  await updateDoc(docRef, updateData);
}

export async function deleteReport(id: string): Promise<void> {
  const db = getDb();
  const docRef = doc(db, COLLECTION, id);
  await deleteDoc(docRef);
}

export async function getAdjacentReports(
  currentPublishedAt: Timestamp
): Promise<{ prev: ReportListItem | null; next: ReportListItem | null }> {
  const db = getDb();
  const [prevQuery, nextQuery] = await Promise.all([
    getDocs(
      query(
        collection(db, COLLECTION),
        where('status', '==', 'published'),
        where('publishedAt', '<', currentPublishedAt),
        orderBy('publishedAt', 'desc'),
        limit(1)
      )
    ),
    getDocs(
      query(
        collection(db, COLLECTION),
        where('status', '==', 'published'),
        where('publishedAt', '>', currentPublishedAt),
        orderBy('publishedAt', 'asc'),
        limit(1)
      )
    ),
  ]);

  return {
    prev: prevQuery.empty ? null : toReportListItem(prevQuery.docs[0].id, prevQuery.docs[0].data()),
    next: nextQuery.empty ? null : toReportListItem(nextQuery.docs[0].id, nextQuery.docs[0].data()),
  };
}
