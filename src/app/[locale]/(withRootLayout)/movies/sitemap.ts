import { MetadataRoute } from 'next';
import { MovieAPI } from '../../../../api/MovieAPI';
import { getKeyByValue } from '../../../../utils/getKeyByValue';
import { CLIENT_GENRE_LIST } from '../../../../constants/genreList';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const genreList = await MovieAPI.getGenreList();
    const modifiedGenreList = genreList.map((genre) => {
        return { genre: getKeyByValue(CLIENT_GENRE_LIST, genre.id) };
    });

    return modifiedGenreList.map((genre) => ({
        url: `${BASE_URL}/ru/movies/${genre.genre}`,
        lastModified: new Date(),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/movies/${genre.genre}`,
                en: `${BASE_URL}/en/movies/${genre.genre}`,
            },
        },
    }));
}
