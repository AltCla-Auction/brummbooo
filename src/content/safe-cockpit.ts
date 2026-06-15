export const ARTICLE_LINKS = [
  {
    slug: 'seatbelt-after-6',
    title: '6歳を過ぎたら、シートベルトだけで大丈夫？',
  },
  {
    slug: 'junior-seat-duration',
    title: 'ジュニアシートはいつまで必要？',
  },
  {
    slug: 'belt-position',
    title: 'ベルトが首やお腹にかかるときは？',
  },
  {
    slug: 'child-seat-refusal',
    title: 'チャイルドシートを嫌がるときの工夫',
  },
  {
    slug: 'grandparents-car',
    title: '祖父母の車・送迎時に気をつけたいこと',
  },
  {
    slug: 'rear-seat-belt',
    title: '後席シートベルトと子どもの安全',
  },
] as const;

export const CHECK_POINTS = [
  {
    id: 'neck',
    title: '首にかかっていませんか？',
    description:
      '肩ベルトが首に当たっている、顔の近くを通っている場合は、子どもの体に合っていない可能性があります。',
    icon: 'neck',
  },
  {
    id: 'belly',
    title: 'お腹にかかっていませんか？',
    description:
      '腰ベルトがお腹の上を通っている場合、事故のときにお腹に強い力がかかる可能性があります。腰の低い位置を通っているか確認しましょう。',
    icon: 'belly',
  },
  {
    id: 'posture',
    title: '深く座れていますか？',
    description:
      '背中が背もたれについているか、腰が前にずれていないかを見てみましょう。浅く座ったり、ずり下がった姿勢になると、腰ベルトがお腹にかかりやすくなる場合があります。',
    icon: 'posture',
  },
  {
    id: 'loose',
    title: 'ベルトがゆるすぎませんか？',
    description:
      'ベルトがゆるすぎると、子どもが抜け出したり、事故のときに体を十分に支えられない可能性があります。出発前に、きつすぎず、ゆるすぎないかを確認しましょう。',
    icon: 'loose',
  },
  {
    id: 'fit',
    title: '今のシートは体格に合っていますか？',
    description:
      'チャイルドシート、ジュニアシート、後席シートベルトは、年齢だけでなく身長や体格に合っていることが大切です。迷ったときは、製品や車両の取扱説明書を確認しましょう。',
    icon: 'fit',
  },
  {
    id: 'age-only',
    title: '「6歳を過ぎたから終わり」になっていませんか？',
    description:
      '法律上の義務年齢だけでなく、身長や体格に合っているかを見直すことが大切です。大人用シートベルトが合うまでは、ジュニアシート等が必要な場合があります。',
    icon: 'age',
  },
] as const;

export const SAFE_COCKPIT_CARDS = [
  {
    title: '体に合っている',
    description:
      '年齢だけでなく、身長や体格に合っているかを見直します。「もう6歳だから大丈夫」ではなく、ベルトが正しい位置を通っているかが大切です。',
    icon: 'body',
  },
  {
    title: 'ベルトの位置が合っている',
    description:
      '肩ベルトが首にかかっていないか。腰ベルトがお腹にかかっていないか。子どもの体に合っているかを、やさしく確認します。',
    icon: 'belt',
  },
  {
    title: 'ちゃんと座れている',
    description:
      '浅く座っていないか。腰が前にずれていないか。出発前に、親子で確認しやすい習慣をつくります。',
    icon: 'seat',
  },
  {
    title: '楽しく続けられる',
    description:
      '安全は、毎日続けられることが大切です。子どもが自分の席として受け入れられるように、楽しい合言葉やシールを活用します。',
    icon: 'fun',
  },
] as const;

export const KIMI_STEPS = [
  {
    step: 1,
    title: '名前を書く',
    description:
      '「きみのコクピット」シールやカードに名前を書きます。',
  },
  {
    step: 2,
    title: '自分の席を確認する',
    description:
      '親子で、いつもの席を「自分のコクピット」として確認します。',
  },
  {
    step: 3,
    title: 'カチッとしたらGO！',
    description:
      'ベルトを確認してから出発する習慣をつくります。',
  },
] as const;

export const ROLE_DO = [
  '子どもの安全な席づくりに関する情報発信',
  '保護者が迷ったときのチェックポイント整理',
  '親子で見直すきっかけづくり',
  '「きみのコクピット」シールやカードの配布',
  '家庭で続けやすい合言葉やルールの提案',
  '必要に応じて一次情報や専門窓口への誘導',
] as const;

export const ROLE_DONT = [
  'チャイルドシート装着の安全認定',
  '医学的・法的な判断',
  '個別事故原因の断定',
  '特定商品の安全保証',
  '取扱説明書やメーカー基準に反する案内',
] as const;
