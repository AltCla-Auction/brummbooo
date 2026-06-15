export type SupporterRole = 'operator' | 'supporter' | 'partner';

export interface Supporter {
  id: string;
  role: SupporterRole;
  roleLabel: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoOnDark?: boolean;
  websiteUrl?: string;
  message: string;
}

export const SUPPORTER_ROLE_LABELS: Record<SupporterRole, string> = {
  operator: '運営',
  supporter: 'サポーター',
  partner: 'パートナー',
};

export const supporters: Supporter[] = [
  {
    id: 'allcompass',
    role: 'operator',
    roleLabel: '運営会社',
    name: 'オールコンパス株式会社',
    logoSrc: '/images/allcompass-logo.png',
    logoAlt: 'オールコンパス株式会社',
    websiteUrl: 'https://allcompass.jp',
    message: `Brumm Booo Driving Society の事務局運営を担っています。

自動車業界に携わる中で、クルマは家族の日常と深く結びついている——その実感から、子どもの安全な席づくりは社会全体で見直すべきテーマだと考えました。

装着診断や安全認定を行う団体ではありませんが、正しい情報にたどり着く入口づくりと、親子で続けやすい習慣づくりを、社会貢献活動として支援しています。`,
  },
  {
    id: 'altcla',
    role: 'supporter',
    roleLabel: 'サポーター',
    name: 'オルクラ',
    logoSrc: '/images/altcla-logo.png',
    logoAlt: 'オルクラ',
    logoOnDark: true,
    websiteUrl: 'https://alter-classimo.com',
    message: `クルマを楽しみ、大切に乗り続ける文化を広げるサービスとして、子どものセーフコクピット・プロジェクトをサポートしています。

「座っているから大丈夫」では、子どもを守りきれない場合がある——その現実に、クルマと向き合う企業として関心を持ちました。

未来を担う子どもたちが、毎日の移動をより安全に過ごせるよう、正しい情報の周知と、家庭での見直しのきっかけづくりに賛同しています。`,
  },
];

export const supportersPageContent = {
  title: 'サポーター・パートナー',
  lead: 'この活動に賛同いただいている企業・団体',
  description:
    '子どものセーフコクピット・プロジェクトは、ひとりでは広げられません。運営、サポーター、パートナーの皆さまとともに、正しい情報を社会へ届けていきます。',
  ctaTitle: '活動への賛同・協力について',
  ctaDescription:
    'サポーター・パートナーとしてのご参加、取材、イベント連携など、お気軽にご相談ください。',
} as const;
