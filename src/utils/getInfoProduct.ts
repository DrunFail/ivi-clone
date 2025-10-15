import { Country, Genre } from '../models/types';

export function getInfoProduct<T extends { year: number; genres: Genre[]; countries: Country[] }>(movie: T) {
    const yearRelease = movie.year;
    const countries = movie.countries.map((country) => country.countryNameRu).join(',');
    const genres = movie.genres.map((genre) => genre.genreNameRu).join(',');

    const infoProduct = `${yearRelease},${countries},${genres}`;

    return { infoProduct, yearRelease, countries, genres };
}
