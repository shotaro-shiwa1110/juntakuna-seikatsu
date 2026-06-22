import type { LogEntry, Project, Theme, Person, Place, ArchiveItem, DashboardStats } from '@/types'

export const dashboardStats: DashboardStats = {
  places: 15,
  people: 42,
  houses: 8,
  harvestKg: 32,
  projects: 5,
  articles: 23,
}

export const projects: Project[] = [
  {
    slug: 'food',
    number: '01',
    title: '食を取り戻す実験',
    subtitle: '都市生活者がどこまで食に関われるか',
    description: '自ら育て、つくり、選ぶことで、食の主導権を取り戻す。農・発酵・生産者訪問を通じて、食と暮らしの距離を縮める実験。',
    themes: ['食', '農', '発酵'],
    tags: ['#自然栽培', '#発酵', '#生産者訪問', '#保存食'],
    status: 'ACTIVE',
    imagePlaceholder: '[FIELD SKETCH PLACEHOLDER — 農]',
    logs: ['hatake-2months', 'miso-making'],
  },
  {
    slug: 'housing',
    number: '02',
    title: '住まいを見直す実験',
    subtitle: '空き家や古民家から住まいを考える',
    description: '急増する空き家と古民家に目を向け、これからの住まい方を探る。DIYと地域の知恵を組み合わせた、新しい住まいの実験。',
    themes: ['住', '空き家', '古民家'],
    tags: ['#空き家', '#古民家', '#DIY', '#場づくり'],
    status: 'ACTIVE',
    imagePlaceholder: '[FIELD SKETCH PLACEHOLDER — 住]',
    logs: ['akiya-8-houses'],
  },
  {
    slug: 'culture',
    number: '03',
    title: '文化を暮らしに戻す実験',
    subtitle: '消費する文化から実践する文化へ',
    description: '日本の文化や伝統を、日常の中で実践してみる。祭りに参加し、工芸を学び、文化を「体験するもの」から「実践するもの」へ。',
    themes: ['文化', '祭り', '工芸'],
    tags: ['#祭り', '#工芸', '#伝統食', '#和の知恵'],
    status: 'ACTIVE',
    imagePlaceholder: '[FIELD SKETCH PLACEHOLDER — 文化]',
    logs: ['tanue-community'],
  },
  {
    slug: 'economy',
    number: '04',
    title: '経済のあり方を問い直す実験',
    subtitle: '貨幣だけに依存しない関係性を探る',
    description: 'お金に依存しすぎない、循環する経済の模索。交換・小商い・地域通貨など、新しい経済関係の実験記録。',
    themes: ['経済', '交換', '小商い'],
    tags: ['#交換', '#小商い', '#地域通貨', '#自給'],
    status: 'ACTIVE',
    imagePlaceholder: '[FIELD SKETCH PLACEHOLDER — 経済]',
    logs: [],
  },
  {
    slug: 'community',
    number: '05',
    title: 'つながりを育む実験',
    subtitle: '人と地域との新しい関係を考える',
    description: '地域の人との関わりから、新しいつながりを育てる。関係人口・協働・対話を通じた、コミュニティの再構築。',
    themes: ['コミュニティ', '関係人口'],
    tags: ['#関係人口', '#地域活動', '#コミュニティ', '#対話'],
    status: 'ACTIVE',
    imagePlaceholder: '[FIELD SKETCH PLACEHOLDER — コミュニティ]',
    logs: ['tanue-community'],
  },
]

export const logs: LogEntry[] = [
  {
    slug: 'hatake-2months',
    title: '畑を始めて2ヶ月。見えてきた3つの課題',
    date: '2026.05.21',
    category: '食',
    excerpt: '自然農の畑で種を蒔き始めて2ヶ月が過ぎた。嬉しいこと、想定外のこと、そして直面した3つの課題について。',
    body: `自然農の畑で種を蒔き始めて2ヶ月が過ぎた。\n\n最初の1ヶ月は、土を触ること自体が嬉しかった。土の匂い、虫の動き、雨上がりの畑の色。都市生活では気づかなかった感覚が次々と開いていく感じがした。\n\nしかし2ヶ月目に入ると、現実の課題が見えてきた。\n\n**課題1：雑草との向き合い方**\n自然農では草を「敵」とみなさない。しかし、実際には作物を覆いつくす勢いで草が育つ。どこまで共存し、どこから介入するか。その判断基準がまだわからない。\n\n**課題2：水やりのタイミング**\n天候に任せるといっても、苗が小さい時期の乾燥は致命的だ。「自然に任せる」と「適切に介入する」の境界線を学ぶ必要がある。\n\n**課題3：継続のコスト**\n週1回の通いが精一杯の現状で、日々の変化に追いつけない。農は毎日のことだ。「週末農業」の限界を感じ始めている。`,
    tags: ['#自然栽培', '#農', '#実験記録'],
    imagePlaceholder: '[ARCHIVE PHOTO PLACEHOLDER — 畑の風景]',
  },
  {
    slug: 'miso-making',
    title: '味噌づくり体験から学んだ、時間を味方にするということ',
    date: '2026.05.18',
    category: '文化',
    excerpt: '地域の味噌蔵で味噌づくりを体験。麹と向き合うことで、暮らしの時間の使い方を見つめ直した。',
    body: `地域の老舗味噌蔵で、1日味噌づくり体験に参加した。\n\n大豆を茹で、麹と塩を混ぜ、樽に詰める。工程自体はシンプルだ。しかしその後、味噌は6ヶ月から1年かけてゆっくりと熟成する。\n\n「急いでも仕方ない。菌が働く時間を邪魔しないことが大事」と蔵元の方は言った。\n\n現代の暮らしと、この言葉の距離感を考えた。私たちは結果をすぐに求めすぎている。発酵は、時間そのものを材料として使う技術だ。`,
    tags: ['#発酵', '#味噌', '#文化体験'],
    imagePlaceholder: '[ARCHIVE PHOTO PLACEHOLDER — 味噌づくり]',
  },
  {
    slug: 'akiya-8-houses',
    title: '空き家を8件見学して気づいたこと',
    date: '2026.05.15',
    category: '住',
    excerpt: '空き家バンクを通じて8件の物件を見学した。物件ごとに違う「時間の堆積」と、活用の可能性について。',
    body: `空き家バンクに登録し、先月から物件見学を続けている。今月で8件目になった。\n\nそれぞれの空き家は、前の住人の時間を抱えている。縁側の木の焼け具合、かまどの煤、押し入れに残された農具。建物は単なる「箱」ではなく、誰かの暮らしの記録だ。\n\n見学を続けてわかってきたこと：空き家の問題は「物件」ではなく「つながり」だ。建物を活かすには、地域との関係が先に必要だ。`,
    tags: ['#空き家', '#古民家', '#住まい探し'],
    imagePlaceholder: '[ARCHIVE PHOTO PLACEHOLDER — 古民家外観]',
  },
  {
    slug: 'tanue-community',
    title: '地域の田植えに参加して感じたこと',
    date: '2026.05.10',
    category: 'コミュニティ',
    excerpt: '地域の田植えに参加した一日。世代を超えたつながりの中で、見えること、学んだことを記録する。',
    body: `隣の集落の田植えに参加させてもらった。\n\n朝6時集合。参加者は地元の農家さん、UIターンの若者、子どもたち。世代も背景もバラバラな20人ほど。\n\n腰を折って苗を植える作業は、単純だが体に効く。隣の人と話しながら、少しずつ列を進める。2時間も経つと、田んぼの半分が緑に変わっていた。\n\n昼食は農家の縁側で。おにぎりと漬物と味噌汁。「去年も来てくれたね」と声をかけてもらった。つながりは、こういう積み重ねで生まれる。`,
    tags: ['#田植え', '#コミュニティ', '#関係人口'],
    imagePlaceholder: '[ARCHIVE PHOTO PLACEHOLDER — 田植えの様子]',
  },
]

export const themes: Theme[] = [
  { slug: 'food', name: '食', nameEn: 'FOOD', description: '農から食卓まで。自分の手で食に関わることの意味を問い続ける。', relatedTags: ['#農', '#発酵', '#自然栽培', '#保存食'], relatedProjects: ['food'] },
  { slug: 'housing', name: '住', nameEn: 'HOME', description: '空き家・古民家・DIY。住まいを自分で選び、つくる実験。', relatedTags: ['#空き家', '#古民家', '#DIY'], relatedProjects: ['housing'] },
  { slug: 'culture', name: '文化', nameEn: 'CULTURE', description: '祭り・工芸・伝統。消費するのではなく、実践する文化へ。', relatedTags: ['#祭り', '#工芸', '#発酵', '#和の知恵'], relatedProjects: ['culture'] },
  { slug: 'economy', name: '経済', nameEn: 'ECONOMY', description: '貨幣に頼りすぎない関係性。交換・小商い・自給の可能性。', relatedTags: ['#交換', '#小商い', '#自給'], relatedProjects: ['economy'] },
  { slug: 'community', name: 'コミュニティ', nameEn: 'COMMUNITY', description: '人と地域をつなぐ実践。関係人口・協働・対話の記録。', relatedTags: ['#コミュニティ', '#関係人口', '#対話'], relatedProjects: ['community'] },
  { slug: 'nature', name: '自然', nameEn: 'NATURE', description: '土・水・季節・生き物。自然と関わる暮らしの感覚を取り戻す。', relatedTags: ['#農', '#自然観察', '#山'], relatedProjects: ['food'] },
]

export const people: Person[] = [
  { slug: 'tanaka-miso', name: '田中 誠', role: '味噌蔵 蔵元 / 発酵家', location: '長野県', description: '3代続く味噌蔵の蔵元。「菌に教えてもらいながら生きている」という言葉が印象的だった。', relatedLogs: ['miso-making'] },
  { slug: 'yamamoto-farmer', name: '山本 ゆき', role: '自然農 農家', location: '埼玉県', description: '12年間、農薬も肥料も使わない自然農を実践。土と草と作物の関係を、毎日観察している。', relatedLogs: ['hatake-2months'] },
  { slug: 'sato-akiya', name: '佐藤 健一', role: '空き家活用コーディネーター', location: '島根県', description: '移住して10年、地域と空き家をつなぐ仕事をしている。「物件より先に、地域との関係を」が口癖。', relatedLogs: ['akiya-8-houses'] },
]

export const places: Place[] = [
  { slug: 'nagano-farm', name: '自然農の畑（長野）', prefecture: '長野県', coordinates: '36.6513°N, 138.1812°E', description: '標高700mの山間にある自然農の畑。朝晩の寒暖差が大きく、作物の甘みが増す環境。', relatedLogs: ['hatake-2months'] },
  { slug: 'shimane-village', name: '中山間集落（島根）', prefecture: '島根県', coordinates: '35.4723°N, 133.0505°E', description: '人口50人ほどの集落。空き家が全体の3割を超えているが、残った住民の結びつきは強い。', relatedLogs: ['akiya-8-houses', 'tanue-community'] },
  { slug: 'saitama-field', name: '里山の田んぼ（埼玉）', prefecture: '埼玉県', coordinates: '35.8617°N, 139.6455°E', description: '都心から1時間半。田んぼオーナー制度で、毎年20名ほどが田植えと稲刈りに参加している。', relatedLogs: ['tanue-community'] },
]

export const archiveItems: ArchiveItem[] = [
  { slug: 'sketch-001', title: '畑のフィールドスケッチ #001', date: '2026.05.21', type: 'sketch', description: '種まきから2ヶ月後の畑の様子。草の配置と作物の位置を記録。', placeholder: '[FIELD SKETCH PLACEHOLDER]' },
  { slug: 'map-001', title: '空き家見学マップ Vol.1', date: '2026.05.15', type: 'map', description: '8件の空き家見学ルートと、各物件の状態メモ。', placeholder: '[CULTURAL MAP PLACEHOLDER]' },
  { slug: 'doc-001', title: '自然農 観察ノート 2026年春', date: '2026.04.01', type: 'document', description: '3月〜5月の畑の観察記録。温度・降水量・作物の状態を記録。', placeholder: '[ARCHIVE PHOTO PLACEHOLDER]' },
  { slug: 'photo-001', title: '田植え記録写真集', date: '2026.05.10', type: 'photo', description: '地域の田植えに参加した際の記録写真。', placeholder: '[ARCHIVE PHOTO PLACEHOLDER]' },
]
