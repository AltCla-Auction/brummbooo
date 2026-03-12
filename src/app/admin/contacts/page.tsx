'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { getDb } from '@/lib/firebase';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui';
import { INQUIRY_TYPE_LABELS, type Contact } from '@/types';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const db = getDb();
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as Contact[];
      setContacts(data);
    } catch (error) {
      console.error('Failed to load contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const db = getDb();
      await updateDoc(doc(db, 'contacts', id), { status: 'read' });
      setContacts(
        contacts.map((c) => (c.id === id ? { ...c, status: 'read' } : c))
      );
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  };

  if (loading) {
    return <p className="text-gray-500">読み込み中...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせ</h1>

      {contacts.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
          <p className="text-gray-500">お問い合わせはまだありません</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelectedContact(contact)}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                    selectedContact?.id === contact.id ? 'bg-accent/5' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {contact.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {INQUIRY_TYPE_LABELS[contact.inquiryType]}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-gray-400">
                        {formatDate(contact.createdAt)}
                      </span>
                      {contact.status === 'new' && (
                        <Badge variant="primary">新着</Badge>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            {selectedContact ? (
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {selectedContact.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selectedContact.email}
                    </p>
                    {selectedContact.organization && (
                      <p className="text-sm text-gray-500">
                        {selectedContact.organization}
                      </p>
                    )}
                  </div>
                  {selectedContact.status === 'new' && (
                    <button
                      onClick={() => handleMarkAsRead(selectedContact.id)}
                      className="text-sm text-accent hover:underline"
                    >
                      既読にする
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      種別
                    </p>
                    <p className="text-gray-900">
                      {INQUIRY_TYPE_LABELS[selectedContact.inquiryType]}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      お問い合わせ内容
                    </p>
                    <p className="text-gray-900 whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">
                      受信日時
                    </p>
                    <p className="text-gray-900">
                      {formatDate(selectedContact.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={`mailto:${selectedContact.email}?subject=Re: ${INQUIRY_TYPE_LABELS[selectedContact.inquiryType]}のお問い合わせ`}
                    className="text-accent hover:underline text-sm"
                  >
                    メールで返信する →
                  </a>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                左のリストからお問い合わせを選択してください
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
