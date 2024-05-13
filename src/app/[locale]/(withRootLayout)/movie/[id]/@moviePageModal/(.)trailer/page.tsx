import { MovieAPI } from "../../../../../../../api/MovieAPI";
import MoviePageModal from "../../../../../../../components/componentsTab/MoviePageModal/MoviePageModal";
import MoviePageModalLayout from "../../../../../../../components/componentsTab/MoviePageModalLayout/MoviePageModalLayout";
import TrailerTab from "../../../../../../../components/componentsTab/TrailerTab/TrailerTab";
import { getLinksForPlayer } from "../../../../../../../utils/getLinksForPlayer";
import { getDictionary } from "../../../../../dictionaries";

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}


export default async function TrailerPageModal({ params: { id, locale } }: { params: { id: string, locale: "ru" | "en" } }) {
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);
    const {trailerLinkList } = getLinksForPlayer(movie.film.trailers)


    return (
        <MoviePageModal>
            <MoviePageModalLayout
                movie={movie}
                dict={dict}
                lang={locale}
            >
                <TrailerTab trailerList={trailerLinkList} />
            </MoviePageModalLayout>
        </MoviePageModal>
    );
}