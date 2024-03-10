import Modal from "../../UI/Modal/Modal";
import { FormattedMessage } from "react-intl";
import styles from "./MoviePageModal.module.scss";
import CommentTabContainer from "../../comment/CommentTabContainer/CommentTabContainer";
import MovieTitleWithYear from "../MovieTitleWithYear/MovieTitleWithYear";
import TabTitleContainer from "../../componentsTab/TabTitleContainer/TabTitleContainer";
import RatingOverlayContainer from "../MovieList/UI/RaitingOverlayContainer/RatingOverlayContainer";
import RatingFromNumbers from "../MovieList/UI/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../MovieList/UI/RatingProgressBarBlock/RatingProgressBarBlock";
import InfoProductOverlay from "../MovieList/UI/InfoProductOverlay/InfoProductOverlay";
import DurationOverlay from "../MovieList/UI/DurationOverlay/DurationOverlay";
import MoviePoster from "../MoviePoster/MoviePoster";
import TabTitle from "../../componentsTab/TabTitle/TabTitle";
import CreatersTab from "../../componentsTab/CreatersTab/CreatersTab";
import { MovieById } from "../../../models/types";

interface MoviePageModalProps {
    visible: boolean;
    type: string;
    film: MovieById;
    callback: () => void;
    movieTitle: string;
    movieYear: number
}

export default function MoviePageModal({ visible, type, film, callback, movieTitle, movieYear }: MoviePageModalProps) {
    return (
        <Modal visible={visible} callback={callback}>
            <div className={styles.container}>
                <div className={styles.MainModal}>
                    <MovieTitleWithYear
                        movieTitle={movieTitle}
                        movieYear={movieYear} />
                    <TabTitleContainer>
                        <TabTitle
                            tabTitle={<FormattedMessage id="Creaters" />}
                            tabContent={"actors"}
                        />
                        <TabTitle
                            tabTitle={<FormattedMessage id="Review" />}
                            tabContent={"review"}
                        />
                        {film?.film?.trailers?.length && (
                            <TabTitle
                                tabTitle={<FormattedMessage id="trailer" />}
                                tabContent={"trailer"}
                            />
                        )}
                    </TabTitleContainer>


                    {type === "actors" && <CreatersTab personList={film.staff} />}
                    {type === "trailer" && <p>trailer</p>}
                    {type === "review" &&
                        <CommentTabContainer
                        movieKinopoiskId={film.film.kinopoiskId }
                        />}

                </div>
                <div className={styles.aside}>
                    <MoviePoster posterUrl={film.film.posterUrl} />
                    <div>
                        <RatingOverlayContainer>
                            <RatingFromNumbers rating={["8,", "3"]} />
                            <RatingProgressBarBlock />
                        </RatingOverlayContainer>

                        <InfoProductOverlay
                            string={"dkdkkd"} />

                        <DurationOverlay
                            duration={"132 минуты"} />
                    </div>
                </div>
            </div>
        </Modal>
    );
}