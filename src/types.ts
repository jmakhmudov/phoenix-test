export interface Product {
  id: number,
  name: {
    en: string,
    ru: string,
    uz: string
  },
  image: string,
  description: {
    en: string,
    ru: string,
    uz: string
  },
}

export interface Article {
  id: number,
  title: {
    en: string,
    ru: string,
    uz: string
  },
  image: string
}

export type LanguageKey = 'ru' | 'en' | 'uz';