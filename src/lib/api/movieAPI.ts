import { ResponseWithCountAndRows } from '@/models/response';
import { Genre, Movie, MovieById, MovieFilterParams } from '@/models/types';

class MovieAPI {
    private BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
    private HEADERS: HeadersInit = {
        'Content-Type': 'application/json',
    };
    async getMovieById(movieId: string): Promise<MovieById | undefined> {
        const response = await fetch(`${this.BASE_URL}/api/movies/about/${movieId}`, {
            method: 'get',
            headers: this.HEADERS,
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async getMovieListByName(movieName: string) {
        const params = new URLSearchParams({ nameRu: movieName });
        const response = await fetch(`${this.BASE_URL}/movies/name${params}`, {
            method: 'get',
            headers: this.HEADERS,
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async getMovieAll({ size, page }: { size?: number; page?: number }) {
        const params = new URLSearchParams({ size: String(size), page: String(page) });
        const response = await fetch(`${this.BASE_URL}/api/movies${params}`, {
            method: 'get',
            headers: this.HEADERS,
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async getFilteredMovie(filterParams: Partial<MovieFilterParams>): Promise<ResponseWithCountAndRows<Movie> | null> {
        //@ts-ignore
        const params = new URLSearchParams(filterParams);
        const response = await fetch(`${this.BASE_URL}/api/movies/filters?${params}`, {
            method: 'get',
            headers: this.HEADERS,
        });
        if (!response.ok) {
            console.log(await response.json());
            return null;
        }
        return await response.json();
    }
    async updateMovie(movieId: number, newData: { nameRu: string; nameOriginal: string }) {
        const response = await fetch(`${this.BASE_URL}/api/movies/about/${movieId}`, {
            method: 'put',
            body: JSON.stringify(newData),
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }

    async getMovieStaff(movieId: string) {
        const response = await fetch(`${this.BASE_URL}/api/movies/about/${movieId}/staff`, {
            method: 'get',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async getGenreList(): Promise<Genre[] | null> {
        const response = await fetch(`${this.BASE_URL}/api/movies/genres`, {
            method: 'get',
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    }
    async getGenreById(genreId: number) {
        const response = await fetch(`${this.BASE_URL}/api/movies/genres/${genreId}`, {
            method: 'get',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async deleteGenreById(genreId: number) {
        const response = await fetch(`${this.BASE_URL}/api/movies/genres/${genreId}`, {
            method: 'delete',
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    }
    async updateGenreById(genreId: number, newGenreData: { genreNameRu: string; genreNameEng: string }) {
        const response = await fetch(`${this.BASE_URL}/api/movies/genres/${genreId}`, {
            method: 'put',
            body: JSON.stringify(newGenreData),
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    }
    async getCountryList() {
        const response = await fetch(`${this.BASE_URL}/api/movies/countries`, {
            method: 'get',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async getCountryById(countryId: number) {
        const response = await fetch(`${this.BASE_URL}/api/movies/countries/${countryId}`, {
            method: 'get',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async deleteCountryById(countryId: number) {
        const response = await fetch(`${this.BASE_URL}/api/movies/countries/${countryId}`, {
            method: 'delete',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
    async updateCountryById(countryId: number) {
        const response = await fetch(`${this.BASE_URL}/api/movies/countries/${countryId}`, {
            method: 'get',
        });
        if (!response.ok) {
            return;
        }
        return await response.json();
    }
}

export const movieAPI = new MovieAPI();
