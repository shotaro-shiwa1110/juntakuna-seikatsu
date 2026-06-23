import type { LogEntry, Project, Theme, Person, Place, ArchiveItem, DashboardStats, LibraryNote } from '@/types'

export const dashboardStats: DashboardStats = {
  places: 15,
  people: 42,
  houses: 8,
  harvestKg: 32,
  projects: 5,
  articles: 24,
}

export const projects: Project[] = [
  {
    slug: 'food',
    number: '01',
    title: '食を取り戻す実験',
    subtitle: '都市生活者がどこまで食に関われるか',
    description: '自ら育て、つくり、選ぶことで、食の主導権を取り戻す。農を通じて、食と暮らしの距離を縮める実験。種を蒔く、手入れをする、収穫し料理する。農業ではなく、家庭菜園の活動記録。',
    themes: ['食', '農', '発酵'],
    tags: ['#自然栽培', '#発酵', '#生産者訪問', '#保存食'],
    status: 'ACTIVE',
    imagePlaceholder: '/images/p1.jpg',
    logs: ['hatake-2months', 'miso-making', 'fermentation-lab', 'seasonal-food-ritual'],
  },
  {
    slug: 'housing',
    number: '02',
    title: '住まいを見直す実験',
    subtitle: '空き家や古民家から住まいを考える',
    description: '急増する空き家と古民家に目を向け、これからの住まい方を探る。',
    themes: ['住', '空き家', '古民家'],
    tags: ['#空き家', '#古民家', '#DIY', '#場づくり'],
    status: 'ACTIVE',
    imagePlaceholder: '/images/p3.jpg',
    logs: ['akiya-8-houses', 'old-house-repair'],
  },
  {
    slug: 'culture',
    number: '03',
    title: '文化を暮らしに戻す実験',
    subtitle: '消費する文化から実践する文化へ',
    description: '日本の文化や伝統を、日常の中で実践してみる。行き過ぎた効率化・生産性重視社会によって消えつつあるもの、既に消えてしまった文化や伝統に目を向けてみる。',
    themes: ['文化', '祭り', '工芸'],
    tags: ['#祭り', '#工芸', '#伝統食', '#和の知恵'],
    status: 'ACTIVE',
    imagePlaceholder: '/images/p2.jpg',
    logs: ['tanue-community', 'seasonal-food-ritual'],
  },
  {
    slug: 'economy',
    number: '04',
    title: '経済のあり方を問い直す実験',
    subtitle: '貨幣だけに依存しない活動を探る',
    description: 'お金に依存しすぎない、循環する経済の模索。交換・小商い・地域通貨など、新しい経済関係の実験記録。',
    themes: ['経済', '交換', '小商い'],
    tags: ['#交換', '#小商い', '#地域通貨', '#自給'],
    status: 'ACTIVE',
    imagePlaceholder: '/images/p5.jpg',
    logs: ['countryside-market'],
  },
  {
    slug: 'community',
    number: '05',
    title: 'つながりを育む実験',
    subtitle: '人と地域との関係を考える',
    description: '地域の人との関わりから、新しいつながりを育てる。関係人口・協働・対話を通じた、コミュニティの再構築。',
    themes: ['コミュニティ', '関係人口'],
    tags: ['#関係人口', '#地域活動', '#コミュニティ', '#対話'],
    status: 'ACTIVE',
    imagePlaceholder: '/images/p4.jpg',
    logs: ['tanue-community'],
  },
]

export const logs: LogEntry[] = [
  {
    slug: 'hatake-2months',
    title: '実践記録のタイトルが入ります 01',
    date: '2026.05.21',
    category: '食',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#自然栽培', '#農', '#実験記録'],
    imagePlaceholder: '/images/p1.jpg',
  },
  {
    slug: 'miso-making',
    title: '実践記録のタイトルが入ります 02',
    date: '2026.05.18',
    category: '文化',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#発酵', '#味噌', '#文化体験'],
    imagePlaceholder: '/images/p2.jpg',
  },
  {
    slug: 'akiya-8-houses',
    title: '実践記録のタイトルが入ります 03',
    date: '2026.05.15',
    category: '住',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#空き家', '#古民家', '#住まい探し'],
    imagePlaceholder: '/images/p3.jpg',
  },
  {
    slug: 'tanue-community',
    title: '実践記録のタイトルが入ります 04',
    date: '2026.05.10',
    category: 'コミュニティ',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#田植え', '#コミュニティ', '#関係人口'],
    imagePlaceholder: '/images/p4.jpg',
  },
  {
    slug: 'fermentation-lab',
    title: '実践記録のタイトルが入ります 05',
    date: '2026.06.01',
    category: '食',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#発酵', '#糠床', '#台所実験', '#甘酒'],
    imagePlaceholder: '/images/p1.jpg',
  },
  {
    slug: 'countryside-market',
    title: '実践記録のタイトルが入ります 06',
    date: '2026.05.28',
    category: '経済',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#朝市', '#経済', '#農家', '#直売'],
    imagePlaceholder: '/images/p5.jpg',
  },
  {
    slug: 'old-house-repair',
    title: '実践記録のタイトルが入ります 07',
    date: '2026.05.25',
    category: '住',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#古民家', '#DIY', '#修繕', '#大工'],
    imagePlaceholder: '/images/p3.jpg',
  },
  {
    slug: 'forest-walk-observation',
    title: '実践記録のタイトルが入ります 08',
    date: '2026.04.20',
    category: '自然',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#自然観察', '#雑木林', '#植物', '#フィールドワーク'],
    imagePlaceholder: '/images/p6.jpg',
  },
  {
    slug: 'seasonal-food-ritual',
    title: '実践記録のタイトルが入ります 09',
    date: '2026.05.05',
    category: '文化',
    excerpt: '記事の概要テキストが入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
    tags: ['#梅仕事', '#歳時記', '#保存食', '#発酵'],
    imagePlaceholder: '/images/p2.jpg',
  },
]

export const themes: Theme[] = [
  {
    slug: 'food',
    name: '食',
    nameEn: 'FOOD',
    description: '農から食卓まで。自分の手で食に関わることの意味を問い続ける。種を蒔き、育て、収穫し、保存し、調理する——食の全連鎖に触れることで、暮らしの根本に立ち返る。',
    relatedTags: ['#農', '#発酵', '#自然栽培', '#保存食', '#梅仕事'],
    relatedProjects: ['food'],
  },
  {
    slug: 'housing',
    name: '住',
    nameEn: 'HOME',
    description: '空き家・古民家・DIY。住まいを自分で選び、つくる実験。「直す」文化から学ぶ、長く使うことの美学。',
    relatedTags: ['#空き家', '#古民家', '#DIY', '#修繕'],
    relatedProjects: ['housing'],
  },
  {
    slug: 'culture',
    name: '文化',
    nameEn: 'CULTURE',
    description: '祭り・工芸・歳時記・伝統。消費するのではなく、実践する文化へ。体を動かすことでしか伝わらないものがある。',
    relatedTags: ['#祭り', '#工芸', '#発酵', '#歳時記', '#和の知恵'],
    relatedProjects: ['culture'],
  },
  {
    slug: 'economy',
    name: '経済',
    nameEn: 'ECONOMY',
    description: '貨幣に頼りすぎない関係性。交換・小商い・朝市・自給の可能性。お金が介在しない豊かさとは何か。',
    relatedTags: ['#交換', '#小商い', '#朝市', '#自給', '#直売'],
    relatedProjects: ['economy'],
  },
  {
    slug: 'community',
    name: 'コミュニティ',
    nameEn: 'COMMUNITY',
    description: '人と地域をつなぐ実践。関係人口・協働・共同作業の記録。言葉より先に汗をかくことで生まれるつながり。',
    relatedTags: ['#コミュニティ', '#関係人口', '#対話', '#田植え'],
    relatedProjects: ['community'],
  },
  {
    slug: 'nature',
    name: '自然',
    nameEn: 'NATURE',
    description: '土・水・季節・生き物。自然と関わる暮らしの感覚を取り戻す。観察することから始まる、自然との対話。',
    relatedTags: ['#農', '#自然観察', '#山', '#季節'],
    relatedProjects: ['food'],
  },
]

export const people: Person[] = [
  {
    slug: 'tanaka-miso',
    name: '田中 誠',
    role: '味噌蔵 三代目蔵元 / 発酵家',
    location: '長野県松本市',
    description: '3代続く味噌蔵の蔵元。祖父の代から変わらない製法を守りながら、現代の食との接点を模索している。「菌に教えてもらいながら生きている」という言葉が印象的だった。年間5000kgの味噌を仕込む。',
    relatedLogs: ['miso-making'],
  },
  {
    slug: 'yamamoto-farmer',
    name: '山本 ゆき',
    role: '自然農 農家 / 種の保存者',
    location: '埼玉県小川町',
    description: '12年間、農薬も肥料も使わない自然農を実践。土と草と作物の関係を、毎日観察している。採種を続けることで地域の在来種を守る活動も行う。「草が教えてくれる」が口癖。',
    relatedLogs: ['hatake-2months'],
  },
  {
    slug: 'sato-akiya',
    name: '佐藤 健一',
    role: '空き家活用コーディネーター',
    location: '島根県邑南町',
    description: '移住して10年、地域と空き家をつなぐ仕事をしている。「物件より先に、地域との関係を」が口癖。年間20件以上の空き家マッチングを手がける。移住者の定着率は全国平均の2倍。',
    relatedLogs: ['akiya-8-houses'],
  },
  {
    slug: 'matsuda-daiku',
    name: '松田 輝明',
    role: '大工 / 古民家再生職人',
    location: '島根県雲南市',
    description: '40年のキャリアを持つ大工。近年は古民家の再生に特化し、若い移住者と共に伝統工法を継承する取り組みを続けている。「直す文化を絶やしたくない」。築100年超の物件も手がける。',
    relatedLogs: ['old-house-repair'],
  },
  {
    slug: 'nishikawa-market',
    name: '西川 あさ子',
    role: '朝市主催者 / 農産物直売所 運営',
    location: '岩手県遠野市',
    description: '15年前に地元農家と共に朝市を立ち上げ、今では50軒が出店する地域の拠点に育てた。「お金より先に信頼が動く場所にしたい」。農家と買い手の顔が見える関係づくりを大切にしている。',
    relatedLogs: ['countryside-market'],
  },
]

export const places: Place[] = [
  {
    slug: 'nagano-farm',
    name: '自然農の畑（長野）',
    prefecture: '長野県松本市 郊外',
    coordinates: '36.6513°N, 138.1812°E',
    description: '標高700mの山間にある自然農の畑。朝晩の寒暖差が大きく、作物の甘みが増す環境。農薬・肥料不使用で12年目。春夏は野菜、秋は根菜、冬は菜の花が咲く。',
    relatedLogs: ['hatake-2months'],
  },
  {
    slug: 'shimane-village',
    name: '中山間集落（島根）',
    prefecture: '島根県邑南町',
    coordinates: '35.4723°N, 133.0505°E',
    description: '人口50人ほどの集落。空き家が全体の3割を超えているが、残った住民の結びつきは強い。毎年秋に行われる収穫祭は、移住者も含めて集落全員が参加する。',
    relatedLogs: ['akiya-8-houses', 'tanue-community'],
  },
  {
    slug: 'saitama-field',
    name: '里山の田んぼ（埼玉）',
    prefecture: '埼玉県比企郡',
    coordinates: '35.8617°N, 139.6455°E',
    description: '都心から1時間半。田んぼオーナー制度で、毎年20名ほどが田植えと稲刈りに参加している。有機栽培で育てたコシヒカリ。田んぼの周囲には里山が広がる。',
    relatedLogs: ['tanue-community'],
  },
  {
    slug: 'iwate-market',
    name: '遠野朝市（岩手）',
    prefecture: '岩手県遠野市',
    coordinates: '39.3285°N, 141.5265°E',
    description: '毎週土曜朝6時から始まる直売市。50軒の農家が並ぶ地域最大の朝市。遠野の食文化が凝縮した場所で、値段より会話が先に立つ独特の空気がある。冬は凍れる朝でも変わらず開く。',
    relatedLogs: ['countryside-market'],
  },
  {
    slug: 'nagano-kura',
    name: '松本 老舗味噌蔵',
    prefecture: '長野県松本市 旧市街',
    coordinates: '36.2382°N, 137.9720°E',
    description: '明治創業の味噌蔵。昔ながらの木桶仕込みを継承し、年間5000kgの味噌を仕込む。見学体験を受け入れ、発酵の仕組みと文化を次世代に伝える活動も続けている。',
    relatedLogs: ['miso-making', 'fermentation-lab'],
  },
]

export const archiveItems: ArchiveItem[] = [
  {
    slug: 'sketch-001',
    title: '資料タイトルが入ります 01',
    date: '2026.05.21',
    type: 'sketch',
    description: '資料の説明テキストが入ります。',
    placeholder: '[FIELD SKETCH PLACEHOLDER]',
  },
  {
    slug: 'map-001',
    title: '資料タイトルが入ります 02',
    date: '2026.05.15',
    type: 'map',
    description: '資料の説明テキストが入ります。',
    placeholder: '[CULTURAL MAP PLACEHOLDER]',
  },
  {
    slug: 'doc-001',
    title: '資料タイトルが入ります 03',
    date: '2026.04.01',
    type: 'document',
    description: '資料の説明テキストが入ります。',
    placeholder: '[ARCHIVE PHOTO PLACEHOLDER]',
  },
  {
    slug: 'photo-001',
    title: '資料タイトルが入ります 04',
    date: '2026.05.10',
    type: 'photo',
    description: '資料の説明テキストが入ります。',
    placeholder: '[ARCHIVE PHOTO PLACEHOLDER]',
  },
]

export const libraryNotes: LibraryNote[] = [
  {
    slug: 'note-satoyama-economy',
    title: '読書メモのタイトルが入ります',
    date: '2026.05.30',
    type: '読書メモ',
    tags: ['#里山', '#経済', '#藻谷浩介'],
    excerpt: 'ノートの概要が入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
  },
  {
    slug: 'note-fermentation-mechanism',
    title: 'ノートのタイトルが入ります',
    date: '2026.06.05',
    type: '学習メモ',
    tags: ['#発酵', '#微生物', '#科学'],
    excerpt: 'ノートの概要が入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
  },
  {
    slug: 'note-field-note-format',
    title: 'メモのタイトルが入ります',
    date: '2026.06.10',
    type: 'アイデア',
    tags: ['#記録', '#方法論', '#観察'],
    excerpt: 'ノートの概要が入ります。',
    body: `テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。`,
  },
]
