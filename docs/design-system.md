# 巡拓な生活 — Design System

## コンセプト

**ノスタルジック × SF的観察記録**
里山の風景を背景に浮かぶ「スマートフォン幅のカード」という構造。
フィールドノート・観測ログ・ブループリントの3つの美学が混在する。

---

## カラー

| トークン | HEX | 用途 |
|---|---|---|
| `--color-base` | `#f5f2ed` | カード背景（温かみのあるオフホワイト） |
| `--color-surface` | `#faf8f5` | セクション背景（baseより少し明るい） |
| `--color-ink` | `#1a1a1a` | メインテキスト |
| `--color-ink-60` | `#4a4540` | サブテキスト・説明文 |
| `--color-ink-30` | `#9a9390` | ラベル・補足・非アクティブ |
| `--color-border` | `#d5cfc8` | 区切り線・枠線 |
| `--color-accent` | `#daf000` | アクセント塗り・ボーダー・マーカー・グラフ |
| `--color-accent-hover` | `#c0d800` | アクセントhover状態 |
| `--color-accent-text` | `#839008` | 白背景上でのアクセントテキスト（可読性確保） |
| `--color-on-accent` | `#1a1a1a` | アクセント背景上のテキスト |

### アクセントカラーの使い分けルール
- **塗り・ボーダー・グラフ・マーカー** → `#daf000`（明るい黄緑）
- **テキストとして使う場合（白/淡色背景）** → `#839008`（オリーブ）

---

## タイポグラフィ

### フォントファミリー

| ロール | フォント | 用途 |
|---|---|---|
| `--font-mincho` | Shippori Mincho | 見出し・タイトル・サイト名 |
| `--font-serif` | Noto Serif JP | 本文・ボタン・説明文 |
| `--font-mono` | Space Mono | ラベル・コード・座標・注釈 |

### フォントスケール（remベース）

| | モバイル (1rem=15px) | デスクトップ (1rem=17px) |
|---|---|---|
| root | 15px | 17px |
| body | 0.875rem → 13px | 0.875rem → 15px |
| 本文 | 1rem → 15px | 1rem → 17px |
| 大見出し(h1) | 2.1〜2.65rem | スケールアップ |
| 中見出し(h2) | 1.45rem | スケールアップ |
| ナビラベル | 0.875rem | 0.875rem |
| 装飾ラベル(mono) | 0.525〜0.6rem | スケールアップ |
| 極小ラベル | 8px固定(px指定) | 8px固定 |

### タイポグラフィルール
- 本文ウェイト: `300`（light）
- 本文行間: `1.8`
- 記事本文行間: `2.1`
- 見出し行間: `1.3〜1.6`
- モノスペース追跡: `0.08em〜0.4em`（用途で変化）

---

## レイアウト

### 構造
```
画面全体（里山背景・固定・ぼかし）
└── .page-wrapper（max-width: 540px / margin: 12px auto 0）
    └── .page-inner（flex row / padding-left: 12px）
        ├── .nav-rail（幅: 42px mobile / 52px desktop / sticky）
        └── main content（flex: 1）
```

### page-wrapper
- `max-width: 540px`（スマートフォン幅）
- `margin: 12px auto 0`（上に12pxギャップ、スクロールで消える）
- `box-shadow: 0 0 100px rgba(0,0,0,.45), 0 0 30px rgba(0,0,0,.3)`

### page-inner
- `display: flex`
- `padding-left: 12px`（左に背景が見えるギャップ）
- `background: transparent`

### ブレークポイント
- モバイル: `< 680px`
- デスクトップ: `≥ 680px`（Tailwindの`md:`は使わず、カスタム`@media`）

---

## ナビゲーション（nav-rail）

- 縦並びタブ式、左端に固定
- アクティブタブ: `translateX(-4px)` + `width: calc(100% + 4px)` で左に張り出し、右端はコンテンツと面一
- アクティブ下のタブ: 影をつけて奥に引っ込む演出
- アクセントバー: 左端に3px幅の黄緑ライン（activeのみ）

| 状態 | 背景 | ラベル色 |
|---|---|---|
| 通常 | `#f5f2ed` | `ink-60` |
| active | `#f5f2ed` + 左張り出し | `ink` |
| active below | `#e6dfd7` + 内側影 | `ink-30` |

---

## コンポーネント

### ボタン

**btn-primary**
- 背景: `#daf000` / ボーダー: `1.5px solid #daf000`
- padding: `13px 31px` / min-height: `52px` / border-radius: `2px`
- hover: `translateY(-2px)` + `box-shadow: 0 6px 20px rgba(184,240,0,.25)`

**btn-secondary**
- 背景: transparent / ボーダー: `1.5px solid #1a1a1a`
- padding: `13px 31px` / min-height: `52px`
- hover: 背景 `#1a1a1a` / テキスト `#faf8f5` + `translateY(-2px)` + shadow

### ラベルクラス

| クラス | フォント | サイズ | 用途 |
|---|---|---|---|
| `.label` | Space Mono | 0.6rem / 大文字 | 装飾ラベル全般 |
| `.code-tag` | Space Mono | 0.6rem | フィールドノートラベル（左ボーダー付き） |
| `.obs-stamp` | Space Mono | 0.525rem | 日付スタンプ |

### カード（LogCard）
- `border border-border`（個別ボーダー）
- カードリスト: `flex flex-col gap-3`
- 画像: アスペクト比 `4:3` / フィルター `brightness(0.65) saturate(0.3) sepia(0.5)`

### 画像フィルター
```css
filter: brightness(0.65) saturate(0.3) sepia(0.5)
```
ノスタルジック・SF感のある暗い色調。

---

## アニメーション

| 名前 | 内容 |
|---|---|
| `.sf-float` | 8秒周期で浮遊（Y軸±4px + 微回転）|
| `.sf-spin-slow` | 60秒で1回転 |
| `.sf-pulse-ring` | 4秒でスケール1→1.03 + 透明度変化 |
| `.animate-pulse` | 2秒で点滅（STATUS表示用） |
| `.reveal` | スクロール検知でfade + translateY(28px→0) |
| `.highlight-text` | スクロール検知でマーカー塗りアニメ（0.85s） |

---

## テクスチャ・エフェクト

| クラス | 内容 |
|---|---|
| `.scanlines` | 4px間隔の薄い横線（暗面用） |
| `.grain-layer` | 全画面フィルムグレイン（overlay / opacity 0.55） |
| `.grain-overlay` | 画像上グレイン |
| `.bg-dot-grid` | 20pxピッチのドットグリッド |
| `.panel-sf` | 四隅アクセントライン（データパネル） |
| `.bg-satoyama` | 里山背景（blur+brightness+saturate+hue-rotate） |

---

## デスクトップ装飾（サイドバー）

カード幅（540px）を超えた両サイドに表示される装飾テキスト。

- **左サイド**: サイト名（日/英）+ タグライン
- **右サイド**: テーマキーワード + サイト説明文
- フォント色: `rgba(245,242,237, 0.22〜0.42)`（背景に溶け込む）
- `@media (min-width: 680px)` で表示

---

## ローディングスクリーン

- 初回のみ表示（`sessionStorage` で管理）
- フェードイン → ホールド → フェードアウト（計2.1秒）
- 同一タブ内の再アクセスはスキップ
