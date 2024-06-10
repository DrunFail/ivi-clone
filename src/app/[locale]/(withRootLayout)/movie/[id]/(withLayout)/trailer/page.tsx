import { MovieAPI } from "../../../../../../../api/MovieAPI";
import TrailerTab from "../../../../../../../components/TrailerTab/TrailerTab";
import { getTrailerLink } from "../../../../../../../utils/getTrailerLink";

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function TrailerPage({ params: { id } }:{ params: {id:string } }) {
    const movie = await getMovieById(id);
    const trailerLinks = movie.film.trailers.map(trailer => getTrailerLink(trailer));
    return (
        <TrailerTab trailerList={trailerLinks} />
    );
}