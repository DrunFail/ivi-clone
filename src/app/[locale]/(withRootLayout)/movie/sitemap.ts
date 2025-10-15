import { MetadataRoute } from 'next';
import { MovieAPI } from '../../../../api/MovieAPI';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const MOVIE_AMOUNT = 10 * 1000;
const LOCALES = ['ru', 'en'];

export async function generateSitemaps() {
    return [{ id: 'movie' }, { id: 'actors' }, { id: 'review' }];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const movie = await MovieAPI.getMovieAll({ size: MOVIE_AMOUNT });

    return movie.rows.flatMap((movie) => {
        return LOCALES.map((locale) => {
            return {
                url: `${BASE_URL}/${locale}/movie/${movie.kinopoiskId}/${id === 'movie' ? '' : id}`,
                lastModified: new Date(),
                alternates: {
                    languages: {
                        ru: `${BASE_URL}/ru/movie/${movie.kinopoiskId}/${id === 'movie' ? '' : id}`,
                        en: `${BASE_URL}/en/movie/${movie.kinopoiskId}/${id === 'movie' ? '' : id}`,
                        'x-default': `${BASE_URL}/movie/${movie.kinopoiskId}/${id === 'movie' ? '' : id}`,
                    },
                },
            };
        });
    });
}
