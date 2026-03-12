# Brummbooo Driving Society

クルマ文化の原体験を、次の世代へ。

Brummbooo Driving Society の公式サイトです。

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Auth**: Firebase Authentication
- **Form Validation**: React Hook Form + Zod
- **Email**: Resend
- **Hosting**: Vercel

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. Firebase プロジェクトの作成

1. [Firebase Console](https://console.firebase.google.com/) で新規プロジェクト `brummbooo` を作成
2. Firestore Database を有効化
3. Storage を有効化
4. Authentication を有効化（メール/パスワード）
5. 管理者ユーザーを作成

### 3. 環境変数の設定

`.env.example` をコピーして `.env.local` を作成し、Firebase の設定値を入力してください。

```bash
cp .env.example .env.local
```

必要な環境変数:

| 変数名 | 説明 |
|--------|------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Web API キー |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth ドメイン |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase プロジェクト ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase Storage バケット |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Messaging Sender ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase App ID |
| `FIREBASE_PROJECT_ID` | Firebase プロジェクト ID (Admin用) |
| `FIREBASE_CLIENT_EMAIL` | Firebase Admin SDK クライアントメール |
| `FIREBASE_PRIVATE_KEY` | Firebase Admin SDK プライベートキー |
| `RESEND_API_KEY` | Resend の API キー |
| `CONTACT_EMAIL` | お問い合わせ送信先メールアドレス |

### 4. Firestore セキュリティルールのデプロイ

```bash
firebase deploy --only firestore:rules
```

### 5. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でアクセスできます。

## 管理画面

`/admin` で管理画面にアクセスできます。

- `/admin/reports` - 活動報告の管理
- `/admin/contacts` - お問い合わせの確認

Firebase Authentication で登録したユーザーでログインしてください。

## Firestore コレクション構造

### reports（活動報告）

| フィールド | 型 | 説明 |
|------------|------|------|
| title | string | タイトル |
| slug | string | URL用スラッグ |
| publishedAt | timestamp | 公開日 |
| thumbnailUrl | string | サムネイル画像URL |
| excerpt | string | 抜粋 |
| content | string | 本文（HTML） |
| category | string | カテゴリ |
| status | string | draft / published |
| createdAt | timestamp | 作成日 |
| updatedAt | timestamp | 更新日 |

### contacts（お問い合わせ）

| フィールド | 型 | 説明 |
|------------|------|------|
| inquiryType | string | 問い合わせ種別 |
| name | string | 名前 |
| email | string | メールアドレス |
| organization | string | 組織名 |
| message | string | 内容 |
| status | string | new / read / replied |
| createdAt | timestamp | 受信日 |

## デプロイ

### Vercel へのデプロイ

1. GitHub リポジトリを Vercel に接続
2. 環境変数を Vercel のプロジェクト設定で追加
3. デプロイ

### Firebase ルールのデプロイ

```bash
firebase deploy --only firestore:rules,storage
```

## ディレクトリ構成

```
src/
├── app/
│   ├── admin/             # 管理画面
│   ├── api/               # API Routes
│   ├── about/             # 設立趣旨
│   ├── contact/           # お問い合わせ
│   ├── organization/      # 団体概要
│   ├── privacy/           # プライバシーポリシー
│   ├── project/           # プロジェクト紹介
│   ├── recipients/        # 提供先募集
│   ├── relay-box/         # リレーボックス設置協力
│   └── reports/           # 活動報告
├── components/
│   ├── contact/           # お問い合わせ関連
│   ├── home/              # トップページ関連
│   ├── layout/            # レイアウト関連
│   ├── reports/           # 活動報告関連
│   └── ui/                # 汎用 UI コンポーネント
├── content/               # 静的コンテンツ
├── hooks/                 # カスタムフック
├── lib/                   # ユーティリティ・サービス
└── types/                 # 型定義
```

## ライセンス

© Brummbooo Driving Society
