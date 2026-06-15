export type SupporterRole = 'operator' | 'supporter' | 'partner';

export interface Supporter {
  id: string;
  role: SupporterRole;
  roleLabel: string;
  name: string;
  logoSrc?: string;
  logoAlt?: string;
  logoOnDark?: boolean;
  websiteUrl?: string;
  message: string;
}

export const SUPPORTER_ROLE_LABELS: Record<SupporterRole, string> = {
  operator: '運営',
  supporter: 'サポーター',
  partner: 'パートナー',
};

export const cooperationRoleDefinitions = [
  {
    role: 'partner' as const,
    label: 'パートナー',
    target: '企業・団体',
    description: '活動趣旨に賛同し、法人・団体として協力する',
  },
  {
    role: 'supporter' as const,
    label: 'サポーター',
    target: '個人',
    description: '活動趣旨に賛同し、個人として応援・発信・協力する',
  },
] as const;

/** アルファベット表記を50音表記より先に並べる */
function getSortGroup(name: string): 0 | 1 {
  const firstChar = name.trim()[0];
  return /[A-Za-z0-9]/.test(firstChar) ? 0 : 1;
}

export function sortSupporters(items: Supporter[]): Supporter[] {
  return [...items].sort((a, b) => {
    const groupDiff = getSortGroup(a.name) - getSortGroup(b.name);
    if (groupDiff !== 0) return groupDiff;
    return a.name.localeCompare(b.name, 'ja', { sensitivity: 'base' });
  });
}

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

自動車業界に携わる中で、クルマは家族の日常と深く結びついている——その実感から、子どもの安全な車のシートづくりは社会全体で見直すべきテーマだと考えました。

装着診断や安全認定を行う団体ではありませんが、正しい情報にたどり着く入口づくりと、親子で続けやすい習慣づくりを、社会貢献活動として支援しています。`,
  },
  {
    id: 'jds-international',
    role: 'partner',
    roleLabel: 'パートナー',
    name: 'JDSインターナショナル',
    logoSrc: '/images/jds-international-logo.png',
    logoAlt: 'JDSインターナショナル',
    websiteUrl: 'https://jds-int.com/',
    message: `JDSインターナショナルは、プロドライバーの派遣・運転支援に携わる企業として、「子どものセーフコクピット・プロジェクト」をサポートしています。

クルマの安全は、運転技術だけでなく、同乗する子どもの体に合ったシート環境から始まります。

親子のドライブがより安全で楽しい時間になるよう、正しい情報の周知と見直しのきっかけづくりに賛同しています。`,
  },
  {
    id: 'altcla',
    role: 'partner',
    roleLabel: 'パートナー',
    name: 'オルクラ',
    logoSrc: '/images/altcla-logo.png',
    logoAlt: 'オルクラ',
    websiteUrl: 'https://alter-classimo.com',
    message: `クルマを楽しみ、大切に乗り続ける文化を広げるサービスとして、子どものセーフコクピット・プロジェクトをサポートしています。

「座っているから大丈夫」では、子どもを守りきれない場合があるという現実に、クルマと向き合うブランドとして対応すべきだと考えています。

未来を担う子どもたちが、毎日の移動をより安全に過ごせるよう、正しい情報の周知と、家庭での見直しのきっかけづくりとして一緒に活動します。`,
  },
];

export const supportersPageContent = {
  title: 'サポーター・パートナー',
  lead: 'この活動に賛同いただいている\nパートナー・サポーター',
  description:
    '子どものセーフコクピット・プロジェクトは、ひとりでは広げられません。\nパートナー、サポーターの皆さまとともに、\n正しい情報を社会へ届けていきます。',
  intro:
    'パートナー（企業・団体）とサポーター（個人）が、\nなぜこの活動に賛同しているのか。\nメッセージを掲載しています。',
  supporterEmptyMessage:
    '個人としてのサポーターは、順次掲載していきます。ご賛同いただける方は、お問い合わせよりご連絡ください。',
  ctaTitle: '活動への賛同・協力について',
  ctaDescription:
    'パートナー（企業・団体）・サポーター（個人）としてのご参加、取材、イベント連携など、お気軽にご相談ください。',
} as const;
