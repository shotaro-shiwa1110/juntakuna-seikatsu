# 巡拓な生活 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 「巡拓な生活」個人メディアサイトを Next.js 14 + TypeScript + Tailwind で構築する。全14ページ+モックデータ。

**Architecture:** App Router (Next.js 14)、モックデータは `lib/mock-data.ts` から静的配信、デザイントークンは `globals.css` の CSS カスタムプロパティ、SVG 装飾は React コンポーネント。

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Google Fonts (Shippori Mincho / Noto Serif JP / Space Mono)

**Design Tokens (locked):**

- Base bg: `#F5F2ED`, Surface: `#FAF8F5`, Ink: `#1A1A1A`, Border: `#D5CFC8`
- Accent: `#B8F000`
- Font — Heading: Shippori Mincho, Body: Noto Serif JP 16px / lh 2.2, Annotation: Space Mono

---

## File Map

```
juntakuna-seikatsu/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        # TOP
│   ├── globals.css
│   ├── projects/
│   │   ├── page.tsx                    # PROJECT list
│   │   └── [slug]/page.tsx             # PROJECT detail
│   ├── log/
│   │   ├── page.tsx                    # LOG list
│   │   └── [slug]/page.tsx             # LOG detail
│   ├── theme/
│   │   ├── page.tsx                    # THEME list
│   │   └── [slug]/page.tsx             # THEME detail
│   ├── profile/page.tsx
│   ├── people/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── place/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── archive/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── NetworkGraph.tsx
│   │   ├── FieldAnnotation.tsx
│   │   ├── ImagePlaceholder.tsx
│   │   ├── CategoryBadge.tsx
│   │   ├── Tag.tsx
│   │   ├── LogCard.tsx
│   │   ├── ProjectCard.tsx
│   │   └── DashboardStats.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── DashboardSection.tsx
│       ├── ProjectsSection.tsx
│       └── LatestLogSection.tsx
├── lib/
│   └── mock-data.ts
├── types/
│   └── index.ts
└── tailwind.config.ts
```

---

### Task 1: Project Scaffolding

**Files:**

- Create: `package.json` (via CLI)
- Modify: `tailwind.config.ts`, `next.config.ts`

- [ ] **Step 1: Scaffold Next.js project**

```bash
cd /Users/shotaroshiwa
npx create-next-app@latest juntakuna-seikatsu \
  --typescript --tailwind --eslint --app --src-dir no \
  --import-alias "@/*" --use-npm
cd juntakuna-seikatsu
```

- [ ] **Step 2: Install zero extra deps (none needed)**

```bash
npm run build
```

Expected: Build succeeds with default scaffolding.

- [ ] **Step 3: Replace `tailwind.config.ts`**

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#F5F2ED",
        surface: "#FAF8F5",
        ink: "#1A1A1A",
        "ink-60": "#4A4540",
        "ink-30": "#9A9390",
        border: "#D5CFC8",
        accent: "#B8F000",
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', "serif"],
        serif: ['"Noto Serif JP"', "serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      fontSize: {
        body: ["16px", { lineHeight: "2.2" }],
        "xs-mono": ["9px", { letterSpacing: "0.2em" }],
        "sm-mono": ["10px", { letterSpacing: "0.15em" }],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: scaffold Next.js project with Tailwind config"
```

---

### Task 2: globals.css + Fonts

**Files:**

- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/globals.css`**

```css
@import url("https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600&family=Noto+Serif+JP:wght@300;400;500&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-base: #f5f2ed;
  --color-surface: #faf8f5;
  --color-ink: #1a1a1a;
  --color-ink-60: #4a4540;
  --color-ink-30: #9a9390;
  --color-border: #d5cfc8;
  --color-accent: #b8f000;
}

html {
  background-color: var(--color-base);
  color: var(--color-ink);
}

body {
  font-family: "Noto Serif JP", serif;
  font-size: 16px;
  line-height: 2.2;
  font-weight: 300;
  background-color: var(--color-base);
}

/* Utility: Space Mono label */
.label {
  font-family: "Space Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-30);
}

/* Utility: accent code tag */
.code-tag {
  font-family: "Space Mono", monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  border-left: 2px solid var(--color-accent);
  padding-left: 10px;
  line-height: 1.8;
}

/* Thin border rule */
.rule {
  border-color: var(--color-border);
}
```

- [ ] **Step 2: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "巡拓な生活 | Juntakuna Seikatsu",
  description:
    "日本の暮らしを、もう一度自分の手に取り戻す。実践アーカイブメディア。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: No errors (Nav/Footer stubs created in Task 4).

---

### Task 3: Type Definitions

**Files:**

- Create: `types/index.ts`

- [ ] **Step 1: Create `types/index.ts`**

```ts
export type Category = "食" | "住" | "文化" | "経済" | "コミュニティ" | "自然";

export interface LogEntry {
  slug: string;
  title: string;
  date: string; // "2026.05.21"
  category: Category;
  excerpt: string;
  body: string; // markdown-like plain text
  tags: string[];
  imagePlaceholder: string; // e.g. "[ARCHIVE PHOTO PLACEHOLDER]"
}

export interface Project {
  slug: string;
  number: string; // "01"
  title: string;
  subtitle: string;
  description: string;
  themes: string[];
  tags: string[];
  status: "ACTIVE" | "PAUSED" | "COMPLETE";
  imagePlaceholder: string;
  logs: string[]; // LogEntry slugs
}

export interface Theme {
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  relatedTags: string[];
  relatedProjects: string[]; // Project slugs
}

export interface Person {
  slug: string;
  name: string;
  role: string;
  location: string;
  description: string;
  relatedLogs: string[];
}

export interface Place {
  slug: string;
  name: string;
  prefecture: string;
  coordinates: string; // "39.5010°N, 141.0010°E"
  description: string;
  relatedLogs: string[];
}

export interface ArchiveItem {
  slug: string;
  title: string;
  date: string;
  type: "photo" | "document" | "sketch" | "map";
  description: string;
  placeholder: string;
}

export interface DashboardStats {
  places: number;
  people: number;
  houses: number;
  harvestKg: number;
  projects: number;
  articles: number;
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add types/index.ts && git commit -m "feat: add type definitions"
```

---

### Task 4: Mock Data

**Files:**

- Create: `lib/mock-data.ts`

- [ ] **Step 1: Create `lib/mock-data.ts`**

```ts
import type {
  LogEntry,
  Project,
  Theme,
  Person,
  Place,
  ArchiveItem,
  DashboardStats,
} from "@/types";

export const dashboardStats: DashboardStats = {
  places: 15,
  people: 42,
  houses: 8,
  harvestKg: 32,
  projects: 5,
  articles: 23,
};

export const projects: Project[] = [
  {
    slug: "food",
    number: "01",
    title: "食を取り戻す実験",
    subtitle: "都市生活者がどこまで食に関われるか",
    description:
      "自ら育て、つくり、選ぶことで、食の主導権を取り戻す。農を通じて、食と暮らしの距離を縮める実験。",
    themes: ["食", "農", "発酵"],
    tags: ["#自然栽培", "#発酵", "#生産者訪問", "#保存食"],
    status: "ACTIVE",
    imagePlaceholder: "[FIELD SKETCH PLACEHOLDER — 農]",
    logs: ["hatake-2months", "miso-making"],
  },
  {
    slug: "housing",
    number: "02",
    title: "住まいを見直す実験",
    subtitle: "空き家や古民家から住まいを考える",
    description:
      "急増する空き家と古民家に目を向け、これからの住まい方を探る。DIYと地域の知恵を組み合わせた、新しい住まいの実験。",
    themes: ["住", "空き家", "古民家"],
    tags: ["#空き家", "#古民家", "#DIY", "#場づくり"],
    status: "ACTIVE",
    imagePlaceholder: "[FIELD SKETCH PLACEHOLDER — 住]",
    logs: ["akiya-8-houses"],
  },
  {
    slug: "culture",
    number: "03",
    title: "文化を暮らしに戻す実験",
    subtitle: "消費する文化から実践する文化へ",
    description:
      "日本の文化や伝統を、日常の中で実践してみる。祭りに参加し、工芸を学び、文化を「体験するもの」から「実践するもの」へ。",
    themes: ["文化", "祭り", "工芸"],
    tags: ["#祭り", "#工芸", "#伝統食", "#和の知恵"],
    status: "ACTIVE",
    imagePlaceholder: "[FIELD SKETCH PLACEHOLDER — 文化]",
    logs: ["tanue-community"],
  },
  {
    slug: "economy",
    number: "04",
    title: "経済のあり方を問い直す実験",
    subtitle: "貨幣だけに依存しない活動を探る",
    description:
      "お金に依存しすぎない、循環する経済の模索。交換・小商い・地域通貨など、新しい経済関係の実験記録。",
    themes: ["経済", "交換", "小商い"],
    tags: ["#交換", "#小商い", "#地域通貨", "#自給"],
    status: "ACTIVE",
    imagePlaceholder: "[FIELD SKETCH PLACEHOLDER — 経済]",
    logs: [],
  },
  {
    slug: "community",
    number: "05",
    title: "つながりを育む実験",
    subtitle: "人と地域との関係を考える",
    description:
      "地域の人との関わりから、新しいつながりを育てる。関係人口・協働・対話を通じた、コミュニティの再構築。",
    themes: ["コミュニティ", "関係人口"],
    tags: ["#関係人口", "#地域活動", "#コミュニティ", "#対話"],
    status: "ACTIVE",
    imagePlaceholder: "[FIELD SKETCH PLACEHOLDER — コミュニティ]",
    logs: ["tanue-community"],
  },
];

export const logs: LogEntry[] = [
  {
    slug: "hatake-2months",
    title: "畑を始めて2ヶ月。見えてきた3つの課題",
    date: "2026.05.21",
    category: "食",
    excerpt:
      "自然農の畑で種を蒔き始めて2ヶ月が過ぎた。嬉しいこと、想定外のこと、そして直面した3つの課題について。",
    body: `自然農の畑で種を蒔き始めて2ヶ月が過ぎた。\n\n最初の1ヶ月は、土を触ること自体が嬉しかった。土の匂い、虫の動き、雨上がりの畑の色。都市生活では気づかなかった感覚が次々と開いていく感じがした。\n\nしかし2ヶ月目に入ると、現実の課題が見えてきた。\n\n**課題1：雑草との向き合い方**\n自然農では草を「敵」とみなさない。しかし、実際には作物を覆いつくす勢いで草が育つ。どこまで共存し、どこから介入するか。その判断基準がまだわからない。\n\n**課題2：水やりのタイミング**\n天候に任せるといっても、苗が小さい時期の乾燥は致命的だ。「自然に任せる」と「適切に介入する」の境界線を学ぶ必要がある。\n\n**課題3：継続のコスト**\n週1回の通いが精一杯の現状で、日々の変化に追いつけない。農は毎日のことだ。「週末農業」の限界を感じ始めている。`,
    tags: ["#自然栽培", "#農", "#実験記録"],
    imagePlaceholder: "[ARCHIVE PHOTO PLACEHOLDER — 畑の風景]",
  },
  {
    slug: "miso-making",
    title: "味噌づくり体験から学んだ、時間を味方にするということ",
    date: "2026.05.18",
    category: "文化",
    excerpt:
      "地域の味噌蔵で味噌づくりを体験。麹と向き合うことで、暮らしの時間の使い方を見つめ直した。",
    body: `地域の老舗味噌蔵で、1日味噌づくり体験に参加した。\n\n大豆を茹で、麹と塩を混ぜ、樽に詰める。工程自体はシンプルだ。しかしその後、味噌は6ヶ月から1年かけてゆっくりと熟成する。\n\n「急いでも仕方ない。菌が働く時間を邪魔しないことが大事」と蔵元の方は言った。\n\n現代の暮らしと、この言葉の距離感を考えた。私たちは結果をすぐに求めすぎている。発酵は、時間そのものを材料として使う技術だ。`,
    tags: ["#発酵", "#味噌", "#文化体験"],
    imagePlaceholder: "[ARCHIVE PHOTO PLACEHOLDER — 味噌づくり]",
  },
  {
    slug: "akiya-8-houses",
    title: "空き家を8件見学して気づいたこと",
    date: "2026.05.15",
    category: "住",
    excerpt:
      "空き家バンクを通じて8件の物件を見学した。物件ごとに違う「時間の堆積」と、活用の可能性について。",
    body: `空き家バンクに登録し、先月から物件見学を続けている。今月で8件目になった。\n\nそれぞれの空き家は、前の住人の時間を抱えている。縁側の木の焼け具合、かまどの煤、押し入れに残された農具。建物は単なる「箱」ではなく、誰かの暮らしの記録だ。\n\n見学を続けてわかってきたこと：空き家の問題は「物件」ではなく「つながり」だ。建物を活かすには、地域との関係が先に必要だ。`,
    tags: ["#空き家", "#古民家", "#住まい探し"],
    imagePlaceholder: "[ARCHIVE PHOTO PLACEHOLDER — 古民家外観]",
  },
  {
    slug: "tanue-community",
    title: "地域の田植えに参加して感じたこと",
    date: "2026.05.10",
    category: "コミュニティ",
    excerpt:
      "地域の田植えに参加した一日。世代を超えたつながりの中で、見えること、学んだことを記録する。",
    body: `隣の集落の田植えに参加させてもらった。\n\n朝6時集合。参加者は地元の農家さん、UIターンの若者、子どもたち。世代も背景もバラバラな20人ほど。\n\n腰を折って苗を植える作業は、単純だが体に効く。隣の人と話しながら、少しずつ列を進める。2時間も経つと、田んぼの半分が緑に変わっていた。\n\n昼食は農家の縁側で。おにぎりと漬物と味噌汁。「去年も来てくれたね」と声をかけてもらった。つながりは、こういう積み重ねで生まれる。`,
    tags: ["#田植え", "#コミュニティ", "#関係人口"],
    imagePlaceholder: "[ARCHIVE PHOTO PLACEHOLDER — 田植えの様子]",
  },
];

export const themes: Theme[] = [
  {
    slug: "food",
    name: "食",
    nameEn: "FOOD",
    description: "農から食卓まで。自分の手で食に関わることの意味を問い続ける。",
    relatedTags: ["#農", "#発酵", "#自然栽培", "#保存食"],
    relatedProjects: ["food"],
  },
  {
    slug: "housing",
    name: "住",
    nameEn: "HOME",
    description: "空き家・古民家・DIY。住まいを自分で選び、つくる実験。",
    relatedTags: ["#空き家", "#古民家", "#DIY"],
    relatedProjects: ["housing"],
  },
  {
    slug: "culture",
    name: "文化",
    nameEn: "CULTURE",
    description: "祭り・工芸・伝統。消費するのではなく、実践する文化へ。",
    relatedTags: ["#祭り", "#工芸", "#発酵", "#和の知恵"],
    relatedProjects: ["culture"],
  },
  {
    slug: "economy",
    name: "経済",
    nameEn: "ECONOMY",
    description: "貨幣に頼りすぎない関係性。交換・小商い・自給の可能性。",
    relatedTags: ["#交換", "#小商い", "#自給"],
    relatedProjects: ["economy"],
  },
  {
    slug: "community",
    name: "コミュニティ",
    nameEn: "COMMUNITY",
    description: "人と地域をつなぐ実践。関係人口・協働・対話の記録。",
    relatedTags: ["#コミュニティ", "#関係人口", "#対話"],
    relatedProjects: ["community"],
  },
  {
    slug: "nature",
    name: "自然",
    nameEn: "NATURE",
    description: "土・水・季節・生き物。自然と関わる暮らしの感覚を取り戻す。",
    relatedTags: ["#農", "#自然観察", "#山"],
    relatedProjects: ["food"],
  },
];

export const people: Person[] = [
  {
    slug: "tanaka-miso",
    name: "田中 誠",
    role: "味噌蔵 蔵元 / 発酵家",
    location: "長野県",
    description:
      "3代続く味噌蔵の蔵元。「菌に教えてもらいながら生きている」という言葉が印象的だった。",
    relatedLogs: ["miso-making"],
  },
  {
    slug: "yamamoto-farmer",
    name: "山本 ゆき",
    role: "自然農 農家",
    location: "埼玉県",
    description:
      "12年間、農薬も肥料も使わない自然農を実践。土と草と作物の関係を、毎日観察している。",
    relatedLogs: ["hatake-2months"],
  },
  {
    slug: "sato-akiya",
    name: "佐藤 健一",
    role: "空き家活用コーディネーター",
    location: "島根県",
    description:
      "移住して10年、地域と空き家をつなぐ仕事をしている。「物件より先に、地域との関係を」が口癖。",
    relatedLogs: ["akiya-8-houses"],
  },
];

export const places: Place[] = [
  {
    slug: "nagano-farm",
    name: "自然農の畑（長野）",
    prefecture: "長野県",
    coordinates: "36.6513°N, 138.1812°E",
    description:
      "標高700mの山間にある自然農の畑。朝晩の寒暖差が大きく、作物の甘みが増す環境。",
    relatedLogs: ["hatake-2months"],
  },
  {
    slug: "shimane-village",
    name: "中山間集落（島根）",
    prefecture: "島根県",
    coordinates: "35.4723°N, 133.0505°E",
    description:
      "人口50人ほどの集落。空き家が全体の3割を超えているが、残った住民の結びつきは強い。",
    relatedLogs: ["akiya-8-houses", "tanue-community"],
  },
  {
    slug: "saitama-field",
    name: "里山の田んぼ（埼玉）",
    prefecture: "埼玉県",
    coordinates: "35.8617°N, 139.6455°E",
    description:
      "都心から1時間半。田んぼオーナー制度で、毎年20名ほどが田植えと稲刈りに参加している。",
    relatedLogs: ["tanue-community"],
  },
];

export const archiveItems: ArchiveItem[] = [
  {
    slug: "sketch-001",
    title: "畑のフィールドスケッチ #001",
    date: "2026.05.21",
    type: "sketch",
    description: "種まきから2ヶ月後の畑の様子。草の配置と作物の位置を記録。",
    placeholder: "[FIELD SKETCH PLACEHOLDER]",
  },
  {
    slug: "map-001",
    title: "空き家見学マップ Vol.1",
    date: "2026.05.15",
    type: "map",
    description: "8件の空き家見学ルートと、各物件の状態メモ。",
    placeholder: "[CULTURAL MAP PLACEHOLDER]",
  },
  {
    slug: "doc-001",
    title: "自然農 観察ノート 2026年春",
    date: "2026.04.01",
    type: "document",
    description: "3月〜5月の畑の観察記録。温度・降水量・作物の状態を記録。",
    placeholder: "[ARCHIVE PHOTO PLACEHOLDER]",
  },
  {
    slug: "photo-001",
    title: "田植え記録写真集",
    date: "2026.05.10",
    type: "photo",
    description: "地域の田植えに参加した際の記録写真。",
    placeholder: "[ARCHIVE PHOTO PLACEHOLDER]",
  },
];
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add lib/mock-data.ts && git commit -m "feat: add mock data for all content types"
```

---

### Task 5: Nav Component

**Files:**

- Create: `components/layout/Nav.tsx`

- [ ] **Step 1: Create `components/layout/Nav.tsx`**

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "TOP" },
  { href: "/projects", label: "プロジェクト" },
  { href: "/log", label: "実践録" },
  { href: "/theme", label: "テーマ" },
  { href: "/people", label: "人と場所" },
  { href: "/profile", label: "プロフィール" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-base/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-3">
        <Link href="/" className="group">
          <div className="font-mincho text-[15px] tracking-wider text-ink">
            巡拓な生活
          </div>
          <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mt-0.5">
            JUNTAKUNA SEIKATSU
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-[8px] tracking-[0.12em] transition-colors ${
                  active
                    ? "text-ink border-b border-accent pb-0.5"
                    : "text-ink-30 hover:text-ink-60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="font-mono text-[14px] text-ink-30 hover:text-accent transition-colors ml-2">
            ≡
          </button>
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npx tsc --noEmit
```

---

### Task 6: Footer Component

**Files:**

- Create: `components/layout/Footer.tsx`

- [ ] **Step 1: Create `components/layout/Footer.tsx`**

```tsx
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "TOP" },
  { href: "/log", label: "LOG" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/theme", label: "THEME" },
  { href: "/profile", label: "PROFILE" },
  { href: "/archive", label: "ARCHIVE" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-surface mt-24">
      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="font-mincho text-[18px] tracking-wider mb-2">
              巡拓な生活
            </div>
            <div className="font-mono text-[7px] tracking-[0.2em] text-ink-60 mb-1">
              JUNTAKUNA SEIKATSU — ARCHIVE_001
            </div>
            <div className="font-mono text-[7px] tracking-[0.15em] text-ink-60">
              日本の暮らしを、もう一度自分の手に取り戻す。
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[7px] tracking-[0.15em] text-ink-60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-right">
            <div className="font-mono text-[7px] text-accent tracking-[0.15em]">
              STATUS_ACTIVE
            </div>
            <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em] mt-1">
              FIELD_NOTE / 001
            </div>
            <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">
              PROJECT 2026–
            </div>
          </div>
        </div>

        <div className="border-t border-ink-60 mt-8 pt-6 flex justify-between items-center">
          <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">
            © 2026 JUNTAKUNA SEIKATSU
          </div>
          <div className="font-mono text-[7px] text-ink-60 tracking-[0.1em]">
            39.5010°N, 141.0010°E
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ && git commit -m "feat: add Nav and Footer layout components"
```

---

### Task 7: Shared UI Components

**Files:**

- Create: `components/ui/ImagePlaceholder.tsx`
- Create: `components/ui/CategoryBadge.tsx`
- Create: `components/ui/Tag.tsx`

- [ ] **Step 1: Create `components/ui/ImagePlaceholder.tsx`**

```tsx
interface Props {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className = "" }: Props) {
  return (
    <div
      className={`bg-[#E5E0D8] border border-dashed border-border flex items-center justify-center ${className}`}
    >
      <span className="font-mono text-[7px] tracking-[0.08em] text-ink-30 text-center px-4">
        {label}
      </span>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/ui/CategoryBadge.tsx`**

```tsx
import type { Category } from "@/types";

const categoryColors: Record<Category, { bg: string; text: string }> = {
  食: { bg: "bg-[#F0F7D4]", text: "text-[#5A7A00]" },
  住: { bg: "bg-[#D4ECF7]", text: "text-[#005A7A]" },
  文化: { bg: "bg-[#F7F0D4]", text: "text-[#7A5A00]" },
  経済: { bg: "bg-[#F7D4D4]", text: "text-[#7A0000]" },
  コミュニティ: { bg: "bg-[#F7D4F0]", text: "text-[#7A0060]" },
  自然: { bg: "bg-[#D4F7D4]", text: "text-[#006A00]" },
};

interface Props {
  category: Category;
}

export default function CategoryBadge({ category }: Props) {
  const { bg, text } = categoryColors[category];
  return (
    <span
      className={`inline-block font-mono text-[7px] tracking-[0.1em] px-2 py-0.5 ${bg} ${text}`}
    >
      {category}
    </span>
  );
}
```

- [ ] **Step 3: Create `components/ui/Tag.tsx`**

```tsx
interface Props {
  label: string;
}

export default function Tag({ label }: Props) {
  return (
    <span className="inline-block font-mono text-[8px] tracking-[0.08em] px-2 py-0.5 border border-border text-ink-30">
      {label}
    </span>
  );
}
```

- [ ] **Step 4: Verify + Commit**

```bash
npx tsc --noEmit
git add components/ui/ && git commit -m "feat: add ImagePlaceholder, CategoryBadge, Tag components"
```

---

### Task 8: LogCard + ProjectCard

**Files:**

- Create: `components/ui/LogCard.tsx`
- Create: `components/ui/ProjectCard.tsx`

- [ ] **Step 1: Create `components/ui/LogCard.tsx`**

```tsx
import Link from "next/link";
import type { LogEntry } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";
import CategoryBadge from "./CategoryBadge";

interface Props {
  entry: LogEntry;
}

export default function LogCard({ entry }: Props) {
  return (
    <Link
      href={`/log/${entry.slug}`}
      className="group block border border-border bg-surface hover:bg-base transition-colors"
    >
      <ImagePlaceholder label={entry.imagePlaceholder} className="h-[120px]" />
      <div className="p-4">
        <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mb-1">
          {entry.date}
        </div>
        <div className="mb-2">
          <CategoryBadge category={entry.category} />
        </div>
        <h3 className="font-mincho text-[13px] leading-[1.7] text-ink group-hover:text-ink-60 transition-colors">
          {entry.title}
        </h3>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Create `components/ui/ProjectCard.tsx`**

```tsx
import Link from "next/link";
import type { Project } from "@/types";
import ImagePlaceholder from "./ImagePlaceholder";
import Tag from "./Tag";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-base border-r border-border last:border-r-0 p-5 hover:bg-surface transition-colors"
    >
      <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-3">
        {project.number}
      </div>
      <ImagePlaceholder
        label={project.imagePlaceholder}
        className="h-[80px] mb-3"
      />
      <h3 className="font-mincho text-[13px] leading-[1.7] mb-2">
        {project.title}
      </h3>
      <p className="font-serif text-[12px] text-ink-60 leading-[1.9] mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 2).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}
```

- [ ] **Step 3: Verify + Commit**

```bash
npx tsc --noEmit
git add components/ui/LogCard.tsx components/ui/ProjectCard.tsx
git commit -m "feat: add LogCard and ProjectCard components"
```

---

### Task 9: NetworkGraph SVG Component

**Files:**

- Create: `components/ui/NetworkGraph.tsx`

- [ ] **Step 1: Create `components/ui/NetworkGraph.tsx`**

```tsx
export default function NetworkGraph() {
  const nodes = [
    { x: 160, y: 140, label: "豊かな\n暮らし", isCenter: true },
    { x: 160, y: 28, labelJa: "食", labelEn: "FOOD", accent: true },
    { x: 292, y: 140, labelJa: "住", labelEn: "HOME" },
    { x: 160, y: 254, labelJa: "文化", labelEn: "CULTURE" },
    { x: 28, y: 140, labelJa: "自然", labelEn: "NATURE" },
    { x: 264, y: 55, labelJa: "経済", labelEn: "ECONOMY", accent: true },
    { x: 50, y: 48, labelJa: "コミュ\nニティ", labelEn: "COMMUNITY" },
  ];

  const edges = [
    [160, 102, 160, 47],
    [215, 140, 274, 140],
    [105, 140, 46, 140],
    [160, 178, 160, 236],
    [205, 107, 250, 68],
    [114, 106, 64, 62],
  ] as const;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 320 280"
      className="w-full h-full"
      aria-label="豊かな暮らしのネットワーク図"
    >
      {/* 外円装飾 */}
      <circle
        cx="160"
        cy="140"
        r="75"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.5"
        strokeDasharray="2 4"
      />
      <circle
        cx="160"
        cy="140"
        r="55"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.8"
      />

      {/* エッジ */}
      {edges.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={i === 4 ? "#B8F000" : "#CCC"}
          strokeWidth="0.8"
        />
      ))}

      {/* 中心ノード */}
      <circle
        cx="160"
        cy="140"
        r="38"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1"
      />
      <text
        x="160"
        y="136"
        fontFamily="Shippori Mincho, serif"
        fontSize="12"
        fill="#1A1A1A"
        textAnchor="middle"
      >
        豊かな
      </text>
      <text
        x="160"
        y="152"
        fontFamily="Shippori Mincho, serif"
        fontSize="12"
        fill="#1A1A1A"
        textAnchor="middle"
      >
        暮らし
      </text>

      {/* 食 */}
      <circle
        cx="160"
        cy="28"
        r="20"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.6"
      />
      <text
        x="160"
        y="31"
        fontFamily="Shippori Mincho, serif"
        fontSize="11"
        fill="#555"
        textAnchor="middle"
      >
        食
      </text>
      <text
        x="160"
        y="20"
        fontFamily="Space Mono, monospace"
        fontSize="6"
        fill="#B8F000"
        textAnchor="middle"
      >
        FOOD
      </text>

      {/* 住 */}
      <circle
        cx="292"
        cy="140"
        r="20"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.6"
      />
      <text
        x="292"
        y="143"
        fontFamily="Shippori Mincho, serif"
        fontSize="11"
        fill="#555"
        textAnchor="middle"
      >
        住
      </text>
      <text
        x="292"
        y="132"
        fontFamily="Space Mono, monospace"
        fontSize="6"
        fill="#9A9390"
        textAnchor="middle"
      >
        HOME
      </text>

      {/* 自然 */}
      <circle
        cx="28"
        cy="140"
        r="20"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.6"
      />
      <text
        x="28"
        y="143"
        fontFamily="Shippori Mincho, serif"
        fontSize="11"
        fill="#555"
        textAnchor="middle"
      >
        自然
      </text>
      <text
        x="28"
        y="132"
        fontFamily="Space Mono, monospace"
        fontSize="5.5"
        fill="#9A9390"
        textAnchor="middle"
      >
        NATURE
      </text>

      {/* 文化 */}
      <circle
        cx="160"
        cy="254"
        r="20"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.6"
      />
      <text
        x="160"
        y="257"
        fontFamily="Shippori Mincho, serif"
        fontSize="11"
        fill="#555"
        textAnchor="middle"
      >
        文化
      </text>
      <text
        x="160"
        y="246"
        fontFamily="Space Mono, monospace"
        fontSize="5.5"
        fill="#9A9390"
        textAnchor="middle"
      >
        CULTURE
      </text>

      {/* 経済（accent） */}
      <circle
        cx="264"
        cy="55"
        r="20"
        fill="none"
        stroke="#B8F000"
        strokeWidth="0.6"
      />
      <text
        x="264"
        y="58"
        fontFamily="Shippori Mincho, serif"
        fontSize="11"
        fill="#555"
        textAnchor="middle"
      >
        経済
      </text>
      <text
        x="264"
        y="47"
        fontFamily="Space Mono, monospace"
        fontSize="5.5"
        fill="#B8F000"
        textAnchor="middle"
      >
        ECONOMY
      </text>

      {/* コミュニティ */}
      <circle
        cx="50"
        cy="48"
        r="24"
        fill="none"
        stroke="#D5CFC8"
        strokeWidth="0.6"
      />
      <text
        x="50"
        y="45"
        fontFamily="Shippori Mincho, serif"
        fontSize="9"
        fill="#555"
        textAnchor="middle"
      >
        コミュ
      </text>
      <text
        x="50"
        y="57"
        fontFamily="Shippori Mincho, serif"
        fontSize="9"
        fill="#555"
        textAnchor="middle"
      >
        ニティ
      </text>
      <text
        x="50"
        y="34"
        fontFamily="Space Mono, monospace"
        fontSize="5"
        fill="#9A9390"
        textAnchor="middle"
      >
        COMMUNITY
      </text>

      {/* 座標マーカー */}
      <line
        x1="4"
        y1="140"
        x2="12"
        y2="140"
        stroke="#B8F000"
        strokeWidth="0.5"
      />
      <line
        x1="8"
        y1="136"
        x2="8"
        y2="144"
        stroke="#B8F000"
        strokeWidth="0.5"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add components/ui/NetworkGraph.tsx && git commit -m "feat: add NetworkGraph SVG component"
```

---

### Task 10: FieldAnnotation Component

**Files:**

- Create: `components/ui/FieldAnnotation.tsx`

- [ ] **Step 1: Create `components/ui/FieldAnnotation.tsx`**

```tsx
interface Props {
  id: string;
  coords?: string;
  status?: string;
  className?: string;
}

export default function FieldAnnotation({
  id,
  coords = "39.5010°N",
  status = "ACTIVE",
  className = "",
}: Props) {
  return (
    <div
      className={`font-mono text-[7px] tracking-[0.12em] leading-[1.9] ${className}`}
    >
      <div className="code-tag">
        <span className="text-accent">{id}</span>
        <br />
        <span className="text-ink-30">{coords}</span>
        <br />
        <span className="text-ink-30">STATUS_{status}</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create decorative SVG line component inline in Hero — handled in Task 11.**

---

### Task 11: TOP Page — Hero Section

**Files:**

- Create: `components/sections/HeroSection.tsx`

- [ ] **Step 1: Create `components/sections/HeroSection.tsx`**

```tsx
import NetworkGraph from "@/components/ui/NetworkGraph";
import FieldAnnotation from "@/components/ui/FieldAnnotation";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border min-h-[520px]">
      {/* LEFT */}
      <div className="flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
        <div>
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-8">
            FIELD NOTE / 001 — PROJECT: JUNTAKUNA SEIKATSU 2026–
          </div>
          <h1 className="font-mincho text-[36px] md:text-[44px] leading-[1.55] tracking-[0.02em] mb-8">
            未来の豊かさを
            <br />
            今の暮らしから
            <br />
            つくり変える
          </h1>
          <p className="font-serif text-body text-ink-60 max-w-md mb-10">
            農・食・住まい・文化・地域との関わりを通じて、
            これからの豊かな暮らしを実践し記録するプロジェクト。
            小さな暮らしの積み重ねが、日本の未来をつくる。
          </p>
        </div>
        <div className="flex gap-8">
          {[
            { value: "39.5010°N", label: "観測緯度" },
            { value: "141.0010°E", label: "観測経度" },
            { value: "2026", label: "開始年" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-mono text-[11px] tracking-[0.05em] text-ink">
                {value}
              </div>
              <div className="font-mono text-[7px] tracking-[0.12em] text-ink-30 mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Network Graph */}
      <div className="relative flex items-center justify-center p-8 min-h-[360px]">
        <div className="absolute top-5 right-6 text-right">
          <FieldAnnotation
            id="JUNTAKUNA_001"
            coords="39.5010°N"
            status="ACTIVE"
            className="text-right"
          />
          <div className="font-mono text-[6px] tracking-[0.15em] text-ink-30 mt-3 leading-[2]">
            PROJECT
            <br />
            JUNTAKUNA
            <br />
            SEIKATSU
            <br />
            2026–
          </div>
        </div>
        <div className="w-full max-w-[340px] aspect-square">
          <NetworkGraph />
        </div>
      </div>
    </section>
  );
}
```

---

### Task 12: TOP Page — Dashboard + Projects + Log Sections

**Files:**

- Create: `components/sections/DashboardSection.tsx`
- Create: `components/sections/ProjectsSection.tsx`
- Create: `components/sections/LatestLogSection.tsx`

- [ ] **Step 1: Create `components/sections/DashboardSection.tsx`**

```tsx
import type { DashboardStats } from "@/types";

const statDefs = [
  { key: "places" as const, icon: "◎", label: "PLACES", sub: "訪れた場所" },
  { key: "people" as const, icon: "⊙", label: "PEOPLE", sub: "出会った人" },
  { key: "houses" as const, icon: "⊞", label: "HOUSES", sub: "空き家見学" },
  { key: "harvestKg" as const, icon: "⊿", label: "KG", sub: "収穫した量" },
  {
    key: "projects" as const,
    icon: "◈",
    label: "PROJECTS",
    sub: "実験したこと",
  },
  { key: "articles" as const, icon: "▣", label: "ARTICLES", sub: "書いた記事" },
];

interface Props {
  stats: DashboardStats;
}

export default function DashboardSection({ stats }: Props) {
  return (
    <section className="border-b border-border bg-surface px-8 md:px-14 py-10">
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-1">
            DASHBOARD
          </div>
          <h2 className="font-mincho text-[18px]">実践ダッシュボード</h2>
          <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30 mt-1">
            2026.05.24 現在
          </div>
        </div>
        <div className="font-mono text-[20px] text-border">+</div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {statDefs.map(({ key, icon, label, sub }) => (
          <div key={key} className="text-center">
            <div className="font-mono text-[16px] text-border mb-2">{icon}</div>
            <div className="font-mincho text-[36px] leading-none">
              {stats[key]}
            </div>
            <div className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mt-2 uppercase">
              {label}
            </div>
            <div className="font-mono text-[7px] text-ink-30 mt-0.5">{sub}</div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8">
        <span className="font-mono text-[8px] tracking-[0.15em] text-ink-30">
          VIEW ALL DATA →
        </span>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/ProjectsSection.tsx`**

```tsx
import Link from "next/link";
import type { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className="border-b border-border px-8 md:px-14 py-10">
      <div className="flex items-baseline justify-between mb-2">
        <div>
          <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-1">
            PROJECTS
          </div>
          <h2 className="font-mincho text-[18px]">進行中のプロジェクト</h2>
        </div>
        <Link
          href="/projects"
          className="font-mono text-[7px] tracking-[0.1em] text-ink-30 hover:text-ink transition-colors"
        >
          すべてのプロジェクトを見る →
        </Link>
      </div>
      <p className="font-serif text-[13px] text-ink-30 mb-6">
        暮らしの5つの領域で、実践と実験を続けています。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border border-border divide-x divide-border">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/LatestLogSection.tsx`**

```tsx
import Link from "next/link";
import type { LogEntry } from "@/types";
import LogCard from "@/components/ui/LogCard";

interface Props {
  entries: LogEntry[];
}

export default function LatestLogSection({ entries }: Props) {
  return (
    <section className="px-8 md:px-14 py-10">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-6">
        LATEST LOG
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <div>
          <h2 className="font-mincho text-[18px] mb-4">最新の実践記録</h2>
          <p className="font-serif text-[13px] text-ink-60 leading-[2]">
            日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
          </p>
          <Link
            href="/log"
            className="block font-mono text-[7px] tracking-[0.1em] text-ink-30 hover:text-ink transition-colors mt-6"
          >
            すべての記事を見る →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
          {entries.map((entry) => (
            <LogCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify + Commit**

```bash
npx tsc --noEmit
git add components/sections/ components/ui/FieldAnnotation.tsx
git commit -m "feat: add Hero, Dashboard, Projects, LatestLog sections"
```

---

### Task 13: TOP Page Assembly

**Files:**

- Modify: `app/page.tsx`

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
import HeroSection from "@/components/sections/HeroSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import LatestLogSection from "@/components/sections/LatestLogSection";
import { dashboardStats, projects, logs } from "@/lib/mock-data";

export default function TopPage() {
  return (
    <>
      <HeroSection />
      <DashboardSection stats={dashboardStats} />
      <ProjectsSection projects={projects} />
      <LatestLogSection entries={logs.slice(0, 4)} />
    </>
  );
}
```

- [ ] **Step 2: Run dev server and verify top page**

```bash
npm run dev
```

Open http://localhost:3000. Confirm:

- Nav visible with all links
- Hero: large copy left, network graph right
- Dashboard: 6 stats
- Projects: 5 cards in a row
- Log: 4 cards
- Footer visible

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx && git commit -m "feat: assemble TOP page"
```

---

### Task 14: PROJECT List Page

**Files:**

- Create: `app/projects/page.tsx`

- [ ] **Step 1: Create `app/projects/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/mock-data";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Tag from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "PROJECTS | 巡拓な生活",
};

export default function ProjectsPage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="mb-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          PROJECTS
        </div>
        <h1 className="font-mincho text-[32px] mb-3">進行中のプロジェクト</h1>
        <p className="font-serif text-body text-ink-60">
          暮らしの5つの領域それぞれで、実践と実験を続けています。
          これらは「答え」ではなく、問いかけの記録です。
        </p>
      </div>

      <div className="space-y-0 border-t border-border">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group grid grid-cols-1 md:grid-cols-[100px_1fr_280px] gap-0 border-b border-border py-8 hover:bg-surface transition-colors px-0"
          >
            <div className="font-mono text-[9px] tracking-[0.2em] text-accent pt-1">
              {project.number}
            </div>
            <div className="pr-8">
              <div className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mb-2">
                {project.status === "ACTIVE"
                  ? "STATUS_ACTIVE"
                  : "STATUS_PAUSED"}
              </div>
              <h2 className="font-mincho text-[22px] leading-[1.5] mb-2 group-hover:text-ink-60 transition-colors">
                {project.title}
              </h2>
              <p className="font-mono text-[9px] tracking-[0.05em] text-ink-30 mb-4">
                {project.subtitle}
              </p>
              <p className="font-serif text-body text-ink-60 max-w-md">
                {project.description}
              </p>
            </div>
            <div>
              <ImagePlaceholder
                label={project.imagePlaceholder}
                className="h-[140px] mb-4"
              />
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/projects/page.tsx && git commit -m "feat: add PROJECT list page"
```

---

### Task 15: PROJECT Detail Page

**Files:**

- Create: `app/projects/[slug]/page.tsx`

- [ ] **Step 1: Create `app/projects/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, logs } from "@/lib/mock-data";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Tag from "@/components/ui/Tag";
import LogCard from "@/components/ui/LogCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} | 巡拓な生活` : "NOT FOUND" };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const relatedLogs = logs.filter((l) => project.logs.includes(l.slug));

  return (
    <div>
      {/* Header */}
      <div className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          PROJECT_{project.number}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="font-mincho text-[36px] leading-[1.4] mb-4">
              {project.title}
            </h1>
            <p className="font-mono text-[9px] tracking-[0.1em] text-ink-30 mb-6">
              {project.subtitle}
            </p>
            <p className="font-serif text-body text-ink-60 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div>
            <ImagePlaceholder
              label={project.imagePlaceholder}
              className="h-[240px]"
            />
          </div>
        </div>
      </div>

      {/* Themes */}
      <div className="border-b border-border px-8 md:px-14 py-8">
        <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-4">
          THEMES
        </div>
        <div className="flex gap-4">
          {project.themes.map((t) => (
            <span key={t} className="font-mincho text-[16px] text-ink-60">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Related Logs */}
      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            RELATED LOG
          </div>
          <h2 className="font-mincho text-[20px] mb-6">関連する実践記録</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((entry) => (
              <LogCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      )}

      {/* Back */}
      <div className="px-8 md:px-14 pb-12">
        <Link
          href="/projects"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← PROJECTS に戻る
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/projects/ && git commit -m "feat: add PROJECT detail page"
```

---

### Task 16: LOG List Page

**Files:**

- Create: `app/log/page.tsx`

- [ ] **Step 1: Create `app/log/page.tsx`**

```tsx
import type { Metadata } from "next";
import { logs } from "@/lib/mock-data";
import LogCard from "@/components/ui/LogCard";
import type { Category } from "@/types";

export const metadata: Metadata = { title: "LOG | 巡拓な生活" };

const allCategories: Category[] = [
  "食",
  "住",
  "文化",
  "経済",
  "コミュニティ",
  "自然",
];

export default function LogPage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="mb-10">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          LATEST LOG
        </div>
        <h1 className="font-mincho text-[32px] mb-3">実践記録</h1>
        <p className="font-serif text-body text-ink-60">
          日々の実践と思考の記録。暮らしを通して見えてきたことを綴っています。
        </p>
      </div>

      {/* Category filter (静的表示) */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-6">
        <span className="font-mono text-[7px] tracking-[0.15em] text-ink-30 mr-2 self-center">
          FILTER:
        </span>
        {allCategories.map((cat) => (
          <span
            key={cat}
            className="font-mono text-[8px] tracking-[0.08em] px-3 py-1 border border-border text-ink-30 cursor-pointer hover:border-accent hover:text-ink transition-colors"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-y divide-border">
        {logs.map((entry) => (
          <LogCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/log/page.tsx && git commit -m "feat: add LOG list page"
```

---

### Task 17: LOG Detail Page

**Files:**

- Create: `app/log/[slug]/page.tsx`

- [ ] **Step 1: Create `app/log/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { logs, projects } from "@/lib/mock-data";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CategoryBadge from "@/components/ui/CategoryBadge";
import Tag from "@/components/ui/Tag";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return logs.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = logs.find((l) => l.slug === params.slug);
  return { title: entry ? `${entry.title} | 巡拓な生活` : "NOT FOUND" };
}

export default function LogDetailPage({ params }: Props) {
  const entry = logs.find((l) => l.slug === params.slug);
  if (!entry) notFound();

  const relatedProject = projects.find((p) => p.logs.includes(entry.slug));

  return (
    <article>
      {/* Header */}
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.2em] text-ink-30 mb-2">
          {entry.date}
        </div>
        <div className="mb-4">
          <CategoryBadge category={entry.category} />
        </div>
        <h1 className="font-mincho text-[32px] md:text-[40px] leading-[1.45] max-w-2xl mb-6">
          {entry.title}
        </h1>
        <p className="font-serif text-body text-ink-60 max-w-xl">
          {entry.excerpt}
        </p>
      </header>

      {/* Main image */}
      <ImagePlaceholder
        label={entry.imagePlaceholder}
        className="h-[280px] md:h-[400px]"
      />

      {/* Body */}
      <div className="px-8 md:px-14 py-12 max-w-2xl">
        {entry.body.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="font-serif text-body text-ink mb-6 whitespace-pre-line"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="px-8 md:px-14 pb-8 flex flex-wrap gap-2 border-t border-border pt-6">
        {entry.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      {/* Related Project */}
      {relatedProject && (
        <div className="border-t border-border px-8 md:px-14 py-8 bg-surface">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-3">
            RELATED PROJECT
          </div>
          <Link
            href={`/projects/${relatedProject.slug}`}
            className="font-mincho text-[18px] hover:text-ink-60 transition-colors"
          >
            {relatedProject.title} →
          </Link>
        </div>
      )}

      {/* Back */}
      <div className="px-8 md:px-14 py-8">
        <Link
          href="/log"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← LOG に戻る
        </Link>
      </div>
    </article>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/log/ && git commit -m "feat: add LOG detail page"
```

---

### Task 18: THEME Pages

**Files:**

- Create: `app/theme/page.tsx`
- Create: `app/theme/[slug]/page.tsx`

- [ ] **Step 1: Create `app/theme/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { themes } from "@/lib/mock-data";

export const metadata: Metadata = { title: "THEME | 巡拓な生活" };

export default function ThemePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
        THEME
      </div>
      <h1 className="font-mincho text-[32px] mb-3">テーマ</h1>
      <p className="font-serif text-body text-ink-60 mb-12">
        巡拓な生活が探求する、暮らしの6つの領域。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {themes.map((theme) => (
          <Link
            key={theme.slug}
            href={`/theme/${theme.slug}`}
            className="group p-8 border-b border-border hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-2">
              {theme.nameEn}
            </div>
            <h2 className="font-mincho text-[28px] mb-3 group-hover:text-ink-60 transition-colors">
              {theme.name}
            </h2>
            <p className="font-serif text-body text-ink-60 mb-4">
              {theme.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {theme.relatedTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[7px] tracking-[0.08em] px-2 py-0.5 border border-border text-ink-30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/theme/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { themes, projects, logs } from "@/lib/mock-data";
import LogCard from "@/components/ui/LogCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const theme = themes.find((t) => t.slug === params.slug);
  return { title: theme ? `${theme.name} | 巡拓な生活` : "NOT FOUND" };
}

export default function ThemeDetailPage({ params }: Props) {
  const theme = themes.find((t) => t.slug === params.slug);
  if (!theme) notFound();

  const relatedProjects = projects.filter((p) =>
    theme.relatedProjects.includes(p.slug),
  );
  const relatedLogs = logs.filter((l) =>
    theme.relatedTags.some((tag) => l.tags.includes(tag)),
  );

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          {theme.nameEn}
        </div>
        <h1 className="font-mincho text-[48px] mb-4">{theme.name}</h1>
        <p className="font-serif text-body text-ink-60 max-w-xl">
          {theme.description}
        </p>
      </header>

      {relatedProjects.length > 0 && (
        <div className="border-b border-border px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-4">
            RELATED PROJECTS
          </div>
          {relatedProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block font-mincho text-[20px] py-3 border-b border-border hover:text-ink-60 transition-colors last:border-0"
            >
              {p.number} — {p.title} →
            </Link>
          ))}
        </div>
      )}

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            RELATED LOG
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => (
              <LogCard key={l.slug} entry={l} />
            ))}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link
          href="/theme"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← THEME に戻る
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify + Commit**

```bash
npx tsc --noEmit
git add app/theme/ && git commit -m "feat: add THEME list and detail pages"
```

---

### Task 19: PROFILE Page

**Files:**

- Create: `app/profile/page.tsx`

- [ ] **Step 1: Create `app/profile/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "PROFILE | 巡拓な生活" };

export default function ProfilePage() {
  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          PROFILE
        </div>
        <h1 className="font-mincho text-[36px] mb-2">このサイトについて</h1>
        <div className="font-mono text-[8px] tracking-[0.12em] text-ink-30">
          FIELD_NOTE / PROFILE_001
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            VISION
          </div>
          <h2 className="font-mincho text-[24px] leading-[1.6] mb-6">
            日本の暮らしを、
            <br />
            もう一度自分の手に取り戻す。
          </h2>
          <div className="space-y-6 font-serif text-body text-ink-60">
            <p>
              農・食・住まい・文化・地域。これらはかつて、すべて「日常」だった。しかし今、多くの人にとってそれらは「遠いもの」になってしまっている。
            </p>
            <p>
              私はそれを嘆くのではなく、実際に手を動かして確かめたい。どこまで自分でできるのか。どこで他者を必要とするのか。その境界線を、実践を通じて探っている。
            </p>
            <p>このサイトは、その過程の記録である。</p>
          </div>
        </div>
        <div className="p-10 md:p-14">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            ABOUT
          </div>
          <ImagePlaceholder
            label="[ARCHIVE PHOTO PLACEHOLDER — プロフィール写真]"
            className="h-[200px] mb-6"
          />
          <div className="space-y-4 font-serif text-body text-ink-60">
            <p>
              1990年代生まれ。都市と地方を行き来しながら、暮らしの実験を続けている。
            </p>
            <p>
              ウェブ制作を生業としながら、農・発酵・空き家・地域コミュニティに関わる実践を記録している。
            </p>
          </div>
        </div>
      </div>

      {/* なぜこの活動をするか */}
      <div className="px-8 md:px-14 py-12 max-w-2xl">
        <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
          WHY
        </div>
        <h2 className="font-mincho text-[24px] mb-6">サイトの思想</h2>
        <div className="space-y-6 font-serif text-body text-ink-60">
          <p>
            グローバル化と資本主義の加速は、多くの豊かさをもたらした。同時に、失われたものもある。季節の食、地域の祭り、手仕事の時間、隣人との関係。
          </p>
          <p>
            しかし私は、それを「取り戻す」と言いたいわけではない。懐古主義でも、政治的な主張でもない。ただ、「もし今の技術と知識を持ちながら、古い知恵と関わったら何が起きるか」を知りたい。
          </p>
          <p>
            思想 → 実践 → 記録 → 考察 → 提案。この流れがこのサイトの骨格だ。
          </p>
        </div>
      </div>

      <div className="border-t border-border px-8 md:px-14 py-8">
        <Link
          href="/contact"
          className="font-mono text-[8px] tracking-[0.15em] text-ink hover:text-accent transition-colors border border-ink px-6 py-3 inline-block hover:border-accent"
        >
          CONTACT →
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/profile/page.tsx && git commit -m "feat: add PROFILE page"
```

---

### Task 20: PEOPLE Pages (Phase 2)

**Files:**

- Create: `app/people/page.tsx`
- Create: `app/people/[slug]/page.tsx`

- [ ] **Step 1: Create `app/people/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { people } from "@/lib/mock-data";

export const metadata: Metadata = { title: "PEOPLE | 巡拓な生活" };

export default function PeoplePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
        PEOPLE
      </div>
      <h1 className="font-mincho text-[32px] mb-3">人物アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 mb-12">
        実践の中で出会った人々の記録。それぞれの暮らし方が、問いへの答えのひとつになっている。
      </p>

      <div className="space-y-0 border-t border-border">
        {people.map((person) => (
          <Link
            key={person.slug}
            href={`/people/${person.slug}`}
            className="group flex gap-8 border-b border-border py-8 hover:bg-surface transition-colors"
          >
            <div className="font-mincho text-[22px] min-w-[120px]">
              {person.name}
            </div>
            <div>
              <div className="font-mono text-[8px] tracking-[0.12em] text-accent mb-2">
                {person.location}
              </div>
              <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30 mb-2">
                {person.role}
              </div>
              <p className="font-serif text-body text-ink-60">
                {person.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/people/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { people, logs } from "@/lib/mock-data";
import LogCard from "@/components/ui/LogCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const person = people.find((p) => p.slug === params.slug);
  return { title: person ? `${person.name} | 巡拓な生活` : "NOT FOUND" };
}

export default function PersonDetailPage({ params }: Props) {
  const person = people.find((p) => p.slug === params.slug);
  if (!person) notFound();

  const relatedLogs = logs.filter((l) => person.relatedLogs.includes(l.slug));

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-4">
          {person.location}
        </div>
        <h1 className="font-mincho text-[40px] mb-2">{person.name}</h1>
        <div className="font-mono text-[9px] tracking-[0.12em] text-ink-30 mb-6">
          {person.role}
        </div>
        <p className="font-serif text-body text-ink-60">{person.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        <ImagePlaceholder
          label="[ARCHIVE PHOTO PLACEHOLDER]"
          className="h-[280px]"
        />
        <div className="p-10 flex items-center">
          <div className="code-tag">
            <div>NAME: {person.name}</div>
            <div>LOCATION: {person.location}</div>
            <div>ROLE: {person.role}</div>
            <div>STATUS: ACTIVE</div>
          </div>
        </div>
      </div>

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            RELATED LOG
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => (
              <LogCard key={l.slug} entry={l} />
            ))}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link
          href="/people"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← PEOPLE に戻る
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify + Commit**

```bash
npx tsc --noEmit
git add app/people/ && git commit -m "feat: add PEOPLE list and detail pages"
```

---

### Task 21: PLACE Pages (Phase 2)

**Files:**

- Create: `app/place/page.tsx`
- Create: `app/place/[slug]/page.tsx`

- [ ] **Step 1: Create `app/place/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { places } from "@/lib/mock-data";

export const metadata: Metadata = { title: "PLACE | 巡拓な生活" };

export default function PlacePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
        PLACE
      </div>
      <h1 className="font-mincho text-[32px] mb-3">場所アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 mb-12">
        実践の舞台となった場所の記録。それぞれの土地が持つ文脈を探る。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-border divide-x divide-border">
        {places.map((place) => (
          <Link
            key={place.slug}
            href={`/place/${place.slug}`}
            className="group p-8 border-b border-border hover:bg-surface transition-colors"
          >
            <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-2">
              {place.coordinates}
            </div>
            <h2 className="font-mincho text-[18px] leading-[1.5] mb-2 group-hover:text-ink-60 transition-colors">
              {place.name}
            </h2>
            <div className="font-mono text-[7px] tracking-[0.1em] text-ink-30 mb-3">
              {place.prefecture}
            </div>
            <p className="font-serif text-[13px] text-ink-60 leading-[1.9]">
              {place.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/place/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { places, logs } from "@/lib/mock-data";
import LogCard from "@/components/ui/LogCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return places.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = places.find((p) => p.slug === params.slug);
  return { title: place ? `${place.name} | 巡拓な生活` : "NOT FOUND" };
}

export default function PlaceDetailPage({ params }: Props) {
  const place = places.find((p) => p.slug === params.slug);
  if (!place) notFound();

  const relatedLogs = logs.filter((l) => place.relatedLogs.includes(l.slug));

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          {place.coordinates}
        </div>
        <h1 className="font-mincho text-[40px] mb-2">{place.name}</h1>
        <div className="font-mono text-[9px] tracking-[0.12em] text-ink-30 mb-6">
          {place.prefecture}
        </div>
        <p className="font-serif text-body text-ink-60">{place.description}</p>
      </header>

      <ImagePlaceholder
        label="[CULTURAL MAP PLACEHOLDER]"
        className="h-[280px]"
      />

      {relatedLogs.length > 0 && (
        <div className="px-8 md:px-14 py-10">
          <div className="font-mono text-[7px] tracking-[0.2em] text-accent mb-6">
            RELATED LOG
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-border divide-x divide-border">
            {relatedLogs.map((l) => (
              <LogCard key={l.slug} entry={l} />
            ))}
          </div>
        </div>
      )}

      <div className="px-8 md:px-14 pb-12">
        <Link
          href="/place"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← PLACE に戻る
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify + Commit**

```bash
npx tsc --noEmit
git add app/place/ && git commit -m "feat: add PLACE list and detail pages"
```

---

### Task 22: ARCHIVE Pages (Phase 2)

**Files:**

- Create: `app/archive/page.tsx`
- Create: `app/archive/[slug]/page.tsx`

- [ ] **Step 1: Create `app/archive/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { archiveItems } from "@/lib/mock-data";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "ARCHIVE | 巡拓な生活" };

const typeLabel: Record<string, string> = {
  photo: "PHOTO",
  document: "DOCUMENT",
  sketch: "SKETCH",
  map: "MAP",
};

export default function ArchivePage() {
  return (
    <div className="px-8 md:px-14 py-12">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
        ARCHIVE
      </div>
      <h1 className="font-mincho text-[32px] mb-3">アーカイブ</h1>
      <p className="font-serif text-body text-ink-60 mb-12">
        写真・ドキュメント・スケッチ・地図。実践の痕跡を収める場所。
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-border divide-x divide-y divide-border">
        {archiveItems.map((item) => (
          <Link
            key={item.slug}
            href={`/archive/${item.slug}`}
            className="group block hover:bg-surface transition-colors"
          >
            <ImagePlaceholder label={item.placeholder} className="h-[140px]" />
            <div className="p-4">
              <div className="font-mono text-[7px] tracking-[0.15em] text-accent mb-1">
                {typeLabel[item.type]}
              </div>
              <div className="font-mono text-[7px] text-ink-30 mb-2">
                {item.date}
              </div>
              <h3 className="font-mincho text-[12px] leading-[1.6] group-hover:text-ink-60 transition-colors">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/archive/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { archiveItems } from "@/lib/mock-data";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return archiveItems.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = archiveItems.find((a) => a.slug === params.slug);
  return { title: item ? `${item.title} | 巡拓な生活` : "NOT FOUND" };
}

export default function ArchiveDetailPage({ params }: Props) {
  const item = archiveItems.find((a) => a.slug === params.slug);
  if (!item) notFound();

  return (
    <div>
      <header className="border-b border-border px-8 md:px-14 py-12">
        <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
          ARCHIVE / {item.type.toUpperCase()}
        </div>
        <h1 className="font-mincho text-[32px] mb-4">{item.title}</h1>
        <div className="font-mono text-[8px] tracking-[0.1em] text-ink-30">
          {item.date}
        </div>
      </header>

      <ImagePlaceholder label={item.placeholder} className="h-[400px]" />

      <div className="px-8 md:px-14 py-10 max-w-xl">
        <p className="font-serif text-body text-ink-60">{item.description}</p>
      </div>

      <div className="px-8 md:px-14 pb-12">
        <Link
          href="/archive"
          className="font-mono text-[8px] tracking-[0.15em] text-ink-30 hover:text-ink transition-colors"
        >
          ← ARCHIVE に戻る
        </Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify + Commit**

```bash
npx tsc --noEmit
git add app/archive/ && git commit -m "feat: add ARCHIVE list and detail pages"
```

---

### Task 23: CONTACT Page

**Files:**

- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create `app/contact/page.tsx`**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = { title: "CONTACT | 巡拓な生活" };

export default function ContactPage() {
  return (
    <div className="px-8 md:px-14 py-12 max-w-2xl">
      <div className="font-mono text-[7px] tracking-[0.25em] text-accent mb-2">
        CONTACT
      </div>
      <h1 className="font-mincho text-[32px] mb-6">お問い合わせ</h1>
      <p className="font-serif text-body text-ink-60 mb-10">
        実践への参加・コラボレーション・メディア掲載などのお問い合わせはこちらから。
      </p>

      <div className="border border-border p-8 bg-surface">
        <div className="code-tag mb-8">
          CONTACT_FORM / JUNTAKUNA_001
          <br />
          STATUS: ACTIVE
        </div>

        <div className="space-y-6">
          {[
            { label: "お名前", type: "text", placeholder: "山田 太郎" },
            {
              label: "メールアドレス",
              type: "email",
              placeholder: "your@email.com",
            },
            {
              label: "お問い合わせ種別",
              type: "text",
              placeholder: "取材依頼 / コラボレーション / その他",
            },
          ].map(({ label, type, placeholder }) => (
            <div key={label}>
              <label className="font-mono text-[8px] tracking-[0.15em] text-ink-30 block mb-2">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-base border border-border px-4 py-3 font-serif text-[14px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent"
              />
            </div>
          ))}
          <div>
            <label className="font-mono text-[8px] tracking-[0.15em] text-ink-30 block mb-2">
              メッセージ
            </label>
            <textarea
              rows={5}
              placeholder="メッセージを入力してください"
              className="w-full bg-base border border-border px-4 py-3 font-serif text-[14px] text-ink placeholder:text-ink-30 focus:outline-none focus:border-accent resize-none"
            />
          </div>
          <button className="font-mono text-[8px] tracking-[0.2em] text-ink border border-ink px-8 py-3 hover:bg-ink hover:text-surface transition-colors">
            SEND MESSAGE →
          </button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify + Commit**

```bash
npx tsc --noEmit
git add app/contact/page.tsx && git commit -m "feat: add CONTACT page"
```

---

### Task 24: 404 Page

**Files:**

- Create: `app/not-found.tsx`

- [ ] **Step 1: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-8 text-center">
      <div className="font-mono text-[7px] tracking-[0.3em] text-accent mb-8">
        ERROR_404
      </div>

      <svg width="200" height="120" viewBox="0 0 200 120" className="mb-8">
        <line
          x1="0"
          y1="60"
          x2="200"
          y2="60"
          stroke="#D5CFC8"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="120"
          stroke="#D5CFC8"
          strokeWidth="0.5"
        />
        <circle
          cx="100"
          cy="60"
          r="4"
          fill="none"
          stroke="#B8F000"
          strokeWidth="1.5"
        />
        <circle
          cx="100"
          cy="60"
          r="24"
          fill="none"
          stroke="#D5CFC8"
          strokeWidth="0.5"
          strokeDasharray="3 3"
        />
        <text
          x="100"
          y="54"
          fontFamily="Space Mono, monospace"
          fontSize="7"
          fill="#9A9390"
          textAnchor="middle"
        >
          RECORD
        </text>
        <text
          x="100"
          y="65"
          fontFamily="Space Mono, monospace"
          fontSize="7"
          fill="#9A9390"
          textAnchor="middle"
        >
          NOT FOUND
        </text>
      </svg>

      <h1 className="font-mincho text-[28px] mb-4">
        このページは見つかりませんでした
      </h1>
      <p className="font-serif text-body text-ink-60 max-w-sm mb-8">
        記録が移動したか、まだ書かれていないかもしれません。
      </p>
      <Link
        href="/"
        className="font-mono text-[8px] tracking-[0.2em] text-ink border border-ink px-6 py-3 hover:bg-ink hover:text-surface transition-colors"
      >
        ← TOP に戻る
      </Link>
    </div>
  );
}
```

- [ ] **Step 2: Final build verify + Commit**

```bash
npm run build
```

Expected: All 14+ pages build without errors.

```bash
git add app/not-found.tsx && git commit -m "feat: add 404 page — site complete"
```

---

## Self-Review

**Spec Coverage Check:**

- ✅ TOP (Hero + Dashboard + Projects + Log)
- ✅ PROJECT list + detail
- ✅ LOG list + detail
- ✅ THEME list + detail
- ✅ PROFILE
- ✅ PEOPLE list + detail
- ✅ PLACE list + detail
- ✅ ARCHIVE list + detail
- ✅ CONTACT
- ✅ 404
- ✅ デザインシステム (Tailwind tokens, CSS vars, fonts)
- ✅ SVG グラフィック (NetworkGraph, FieldAnnotation)
- ✅ モックデータ (all content types)
- ✅ ImagePlaceholder (replaces all images)
- ✅ 蛍光ライム アクセント (#B8F000)
- ✅ 明朝 × Space Mono タイポグラフィ
- ✅ 本文 16px / lh 2.2

**Placeholder Scan:** No TBDs found. All components have real code.

**Type Consistency:** `DashboardStats` keys used in `statDefs` match the interface. `Category` union used in `CategoryBadge` matches `LogEntry.category`. All `slug` references use string lookup pattern consistently.
