import 'server-only';

const dictionaries = {
    en: () => import('../../../messages/en.json').then((module) => module.default),
    ru: () => import('../../../messages/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'ru') => dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
