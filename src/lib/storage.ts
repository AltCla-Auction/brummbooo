import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getStorageInstance } from './firebase';

export async function uploadImage(file: File, path: string): Promise<string> {
  const storage = getStorageInstance();
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
}

export async function uploadReportThumbnail(file: File, reportId: string): Promise<string> {
  const ext = file.name.split('.').pop() || 'jpg';
  const path = `reports/${reportId}/thumbnail.${ext}`;
  return uploadImage(file, path);
}
