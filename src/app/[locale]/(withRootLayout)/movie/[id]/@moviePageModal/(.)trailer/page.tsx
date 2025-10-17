import { MovieAPI } from '../../../../../../../api/MovieAPI';
import MoviePageModal from '../../../../../../../components/Movie/MoviePageModal/MoviePageModal';
import MoviePageModalLayout from '../../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout';
import TrailerTab from '../../../../../../../components/TrailerTab/TrailerTab';
import { getLinksForPlayer } from '../../../../../../../utils/getLinksForPlayer';

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function TrailerPageModal({ params }: { params: Promise<{ id: string; locale: 'ru' | 'en' }> }) {
    const { id, locale } = await params;
    const movie = await getMovieById(id);
    const { trailerLinkList } = getLinksForPlayer(movie.film.trailers);

    return (
        <MoviePageModal>
            <MoviePageModalLayout movie={movie} lang={locale}>
                <TrailerTab trailerList={trailerLinkList} />
            </MoviePageModalLayout>
        </MoviePageModal>
    );
}
