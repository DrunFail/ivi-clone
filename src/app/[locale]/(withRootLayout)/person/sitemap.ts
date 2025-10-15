import { MetadataRoute } from 'next';
import { NewPersonAPI } from '../../../../api/newPersonAPI';
import { Locale } from '@/i18n/type';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const LOCALES: Locale[] = ['ru', 'en'];
const PERSON_AMOUNT = 10000;

export async function generateSitemaps() {
    const personList = await NewPersonAPI.getAllPersonList();
    const sitemapsAmount = Math.ceil(personList.count / PERSON_AMOUNT);
    return Array.from(Array(sitemapsAmount), (_, index) => {
        return { id: index };
    });
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const page = id;
    const personList = await NewPersonAPI.getAllPersonList({ size: PERSON_AMOUNT, page });

    return personList.rows.flatMap((person) => {
        const defaultAlternate = { 'x-default': `${BASE_URL}/person/${person.personId}` };
        const alternateList = {} as Record<Locale, string>;
        LOCALES.forEach((locale) => (alternateList[locale] = `${BASE_URL}/${locale}/person/${person.personId}`));
        const urlList = LOCALES.map((locale) => `${BASE_URL}/${locale}/person/${person.personId}`);
        return urlList.map((url) => {
            return {
                url: url,
                lastModified: new Date(),
                alternates: {
                    languages: {
                        ...alternateList,
                        ...defaultAlternate,
                    },
                },
            };
        });
    });
}
