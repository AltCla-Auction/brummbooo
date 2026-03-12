import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { INQUIRY_TYPE_LABELS } from '@/types';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    const inquiryTypeLabel =
      INQUIRY_TYPE_LABELS[data.inquiryType as keyof typeof INQUIRY_TYPE_LABELS];

    if (
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'demo'
    ) {
      const { collection, addDoc, Timestamp } = await import('firebase/firestore');
      const { getDb } = await import('@/lib/firebase');
      const db = getDb();
      await addDoc(collection(db, 'contacts'), {
        ...data,
        status: 'new',
        createdAt: Timestamp.now(),
      });
    }

    const emailContent = `
BrummBooo Driving Society へのお問い合わせ

【お問い合わせ種別】
${inquiryTypeLabel}

【お名前】
${data.name}

【メールアドレス】
${data.email}

【組織名・施設名】
${data.organization || '未入力'}

【お問い合わせ内容】
${data.message}
    `.trim();

    if (resend && process.env.CONTACT_EMAIL) {
      await resend.emails.send({
        from: 'BrummBooo Driving Society <noreply@brummbooo.auto>',
        to: process.env.CONTACT_EMAIL,
        reply_to: data.email,
        subject: `【お問い合わせ】${inquiryTypeLabel} - ${data.name}`,
        text: emailContent,
      });
    } else {
      console.log('Email would be sent:', emailContent);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
