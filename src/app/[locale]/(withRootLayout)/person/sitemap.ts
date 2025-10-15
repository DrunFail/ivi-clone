import { MetadataRoute } from 'next';
import { NewPersonAPI } from '../../../../api/newPersonAPI';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

const personAmount = 10000;
export async function generateSitemaps() {
    const personList = await NewPersonAPI.getAllPersonList();
    const sitemapsAmount = Math.ceil(personList.count / personAmount);
    const my_array = Array.from(Array(sitemapsAmount), (_, index) => {
        return { id: index };
    });
    return my_array;
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
    const page = id;
    const personList = await NewPersonAPI.getAllPersonList({ size: personAmount, page });

    return personList.rows.map((person) => ({
        url: `${BASE_URL}/ru/person/${person.personId}`,
        lastModified: new Date(),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/person/${person.personId}`,
                en: `${BASE_URL}/en/person/${person.personId}`,
            },
        },
    }));
}
