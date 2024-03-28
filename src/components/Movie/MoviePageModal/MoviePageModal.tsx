import Modal from "../../UI/Modal/Modal";
import { FormattedMessage } from "react-intl";
import styles from "./MoviePageModal.module.scss";
import CommentTabContainer from "../../comment/CommentTabContainer/CommentTabContainer";
import MovieTitleWithYear from "../MovieTitleWithYear/MovieTitleWithYear";
import TabTitleContainer from "../../componentsTab/TabTitleContainer/TabTitleContainer";
import MoviePoster from "../MoviePoster/MoviePoster";
import TabTitle from "../../componentsTab/TabTitle/TabTitle";
import CreatersTab from "../../componentsTab/CreatersTab/CreatersTab";
import { MovieById } from "../../../models/types";
import RatingOverlayContainer from "../../UI/movie/RaitingOverlayContainer/RatingOverlayContainer";
import RatingFromNumbers from "../../UI/movie/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../../UI/movie/RatingProgressBarBlock/RatingProgressBarBlock";
import InfoProductOverlay from "../../UI/movie/InfoProductOverlay/InfoProductOverlay";
import DurationOverlay from "../../UI/movie/DurationOverlay/DurationOverlay";
import { useResize } from "../../../hooks/useResize";
import useMovieListCardData from "../../../hooks/movie/useMovieListCardData";
import TrailerTab from "../../componentsTab/TrailerTab/TrailerTab";
import TabContentContainer from "../../componentsTab/TabContentContainer/TabContentContainer";

interface MoviePageModalProps {
    visible: boolean;
    type: string;
    film: MovieById;
    callback: () => void;
    movieTitle: string;
    movieYear: number,
    movieInfo: { infoProduct: string },
    trailerList: string[]
}

export default function MoviePageModal({ visible, type, film, callback, movieTitle, movieYear,movieInfo,trailerList }: MoviePageModalProps) {
    const size = useResize();

    const {overlayMovieData } = useMovieListCardData({ movieData: film.film })
    return (
        <Modal visible={visible} callback={callback}>
            <div className={styles.container}>
                <div className={styles.modal}>
                    <MovieTitleWithYear
                        movieTitle={movieTitle}
                        movieYear={movieYear} />
                    <TabTitleContainer>
                        <TabTitle
                            active={type === "actors"}
                            tabTitle={<FormattedMessage id="Creaters" />}
                            tabContent={"actors"}
                        />
                        <TabTitle
                            active={type === "review"}
                            tabTitle={<FormattedMessage id="Review" />}
                            tabContent={"review"}
                            count={film.reviews.count}
                            showCount
                        />
                        {film.film.trailers.length && (
                            <TabTitle
                                active={type === "trailer"}
                                count={film.film.trailers.length}
                                tabTitle={<FormattedMessage id="trailer" />}
                                tabContent={"trailer"}
                            />
                        )}
                    </TabTitleContainer>

                    <TabContentContainer>
                    {type === "actors" && <CreatersTab personList={film.staff} />}
                    {type === "trailer" && <TrailerTab trailerList={trailerList} />}
                    {type === "review" &&
                        <CommentTabContainer
                        
                            movieKinopoiskId={film.film.kinopoiskId}
                        />}
                    </TabContentContainer>
                </div>
                {size > 900 &&
                    <div className={styles.aside}>
                        <MoviePoster posterUrl={film.film.posterUrl} />
                        <div>
                            <RatingOverlayContainer>
                                <RatingFromNumbers rating={overlayMovieData.rating} />
                                <RatingProgressBarBlock />
                            </RatingOverlayContainer>

                            <InfoProductOverlay
                                string={movieInfo.infoProduct} />

                            <DurationOverlay
                                duration={overlayMovieData.duration} />
                        </div>
                    </div>}
            </div>

        </Modal>
    );
}