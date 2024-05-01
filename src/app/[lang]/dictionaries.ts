import 'server-only'

const dictionaries = {
    en: () => import('../../languages/es-US.json').then((module) => module.default),
    ru: () => import('../../languages/es-RU.json').then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "ru") => dictionaries[locale]()