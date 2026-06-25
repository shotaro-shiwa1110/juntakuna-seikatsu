export type Category = '食' | '住' | '文化' | '経済' | 'コミュニティ' | '自然'

export interface LogEntry {
  slug: string
  title: string
  date: string
  category: Category
  excerpt: string
  body: string
  tags: string[]
  imagePlaceholder: string
}

export interface Project {
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  themes: string[]
  tags: string[]
  status: 'ACTIVE' | 'PLANNED' | 'PAUSED' | 'COMPLETED'
  imagePlaceholder: string
  logs: string[]
}

export interface Theme {
  slug: string
  name: string
  nameEn: string
  description: string
  relatedTags: string[]
  relatedProjects: string[]
}

export interface Person {
  slug: string
  name: string
  role: string
  location: string
  description: string
  relatedLogs: string[]
}

export interface Place {
  slug: string
  name: string
  prefecture: string
  coordinates: string
  description: string
  relatedLogs: string[]
}

export interface ArchiveItem {
  slug: string
  title: string
  date: string
  type: 'photo' | 'document' | 'sketch' | 'map'
  description: string
  placeholder: string
}

export type NoteType = '読書メモ' | '学習メモ' | 'アイデア' | '調査メモ' | '思考の断片'

export interface LibraryNote {
  slug: string
  title: string
  date: string
  type: NoteType
  tags: string[]
  excerpt: string
  body: string
}

export interface DashboardStats {
  places: number
  people: number
  houses: number
  harvestKg: number
  projects: number
  articles: number
}
