import { getTranslations } from 'next-intl/server';
import RootLayout from '../../../components/RootLayout/RootLayout';
import { NAV_MENU } from '../../../constants/headerConstants';
import { LinkData, NavbarLink } from '../../../models/global';
import { movieAPI } from '@/lib/api/movieAPI';
import { Genre } from '@/models/types';

export default async function MovieLayout({ children }: { children: React.ReactNode }) {
    let genres: Genre[] = [];
    try {
        genres = (await movieAPI.getGenreList()) || [];
    } catch (error) {
        console.error('failed fetch genre list');
    }
    const t = await getTranslations();

    const testTransl = (genres: Genre[] | LinkData[]) => {
        return genres
            .map((genre) => {
                if ('link' in genre) {
                    return {
                        ...genre,
                        name: t(`genre.${genre.name}.short`),
                    };
                }
                const link = `/movies/${genre.genreNameEng}`;
                return { name: t(`genre.${genre.genreNameEng}.short`), link };
            })
            .sort((a, b) => a.name.localeCompare(b.name));
    };

    const transformedNav = NAV_MENU.map((navBlock) => {
        if (['movies', 'serials', 'cartoons'].includes(navBlock.name)) {
            return {
                ...navBlock,
                data: {
                    ...navBlock.data,
                    genres: navBlock.name === 'movies' ? testTransl(genres) : testTransl(navBlock.data!.genres),
                    country: navBlock.data?.country.map((country) => {
                        return {
                            ...country,
                            name: t(`genre.${country.name}.short`),
                        };
                    }),
                    years: navBlock.data?.years.map((year) => {
                        return {
                            ...year,
                            name: t(`year.${navBlock.name}.${year.name}`),
                        };
                    }),
                },
            };
        }
        return navBlock;
    });
    return <RootLayout navList={transformedNav as NavbarLink[]}>{children}</RootLayout>;
}
