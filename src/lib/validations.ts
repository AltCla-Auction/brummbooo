import { z } from 'zod';

export const contactFormSchema = z.object({
  inquiryType: z.enum(['provide', 'install', 'receive', 'media', 'other'], {
    required_error: 'お問い合わせ種別を選択してください',
  }),
  name: z
    .string()
    .min(1, 'お名前を入力してください')
    .max(100, 'お名前は100文字以内で入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('有効なメールアドレスを入力してください'),
  organization: z
    .string()
    .max(200, '組織名は200文字以内で入力してください')
    .optional(),
  message: z
    .string()
    .min(1, 'お問い合わせ内容を入力してください')
    .max(5000, 'お問い合わせ内容は5000文字以内で入力してください'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
