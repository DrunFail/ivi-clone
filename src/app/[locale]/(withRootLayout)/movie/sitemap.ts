import { MetadataRoute } from 'next';
import { MovieAPI } from '../../../../api/MovieAPI';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const MOVIE_AMOUNT = 10 * 1000;
const LOCALES = ['ru', 'en'];

export async function generateSitemaps() {
    return [{ id: 'movie' }, { id: 'actors' }, { id: 'review' }];
}

export default async function sitemap(props: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
    const sitemapId = await props.id;
    const movie = await MovieAPI.getMovieAll({ size: MOVIE_AMOUNT });

    return movie.rows.flatMap((movie) => {
        return LOCALES.map((locale) => {
            return {
                url: `${BASE_URL}/${locale}/movie/${movie.kinopoiskId}/${sitemapId === 'movie' ? '' : sitemapId}`,
                lastModified: new Date(),
                alternates: {
                    languages: {
                        ru: `${BASE_URL}/ru/movie/${movie.kinopoiskId}/${sitemapId === 'movie' ? '' : sitemapId}`,
                        en: `${BASE_URL}/en/movie/${movie.kinopoiskId}/${sitemapId === 'movie' ? '' : sitemapId}`,
                        'x-default': `${BASE_URL}/en/movie/${movie.kinopoiskId}/${sitemapId === 'movie' ? '' : sitemapId}`,
                    },
                },
            };
        });
    });
}
