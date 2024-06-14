import { MetadataRoute } from 'next'
import { MovieAPI } from '../../../../api/MovieAPI';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL

export async function generateSitemaps() {
    return [{ id: "movie" }, { id: "actors" }, { id: "review" }]

}

export default async function sitemap({ id }: {id:string}): Promise<MetadataRoute.Sitemap> {
    const movie = await MovieAPI.getMovieAll({ size: 5000 });

    return movie.rows.map((movie) => ({
        url: `${BASE_URL}/ru/movie/${movie.kinopoiskId}/${id === "movie" ? "" : id}`,
        lastModified: new Date(),
        alternates: {
            languages: {
                ru: `${BASE_URL}/ru/movie/${movie.kinopoiskId}/${id === "movie" ? "" : id}`,
                en: `${BASE_URL}/en/movie/${movie.kinopoiskId}/${id === "movie" ? "" : id}`
            }
        }
    }))
}