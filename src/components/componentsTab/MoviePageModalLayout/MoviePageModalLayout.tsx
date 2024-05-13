import { Fragment } from "react";
import MoviePoster from "../../Movie/MoviePoster/MoviePoster";
import PageWrapper from "../../PageContainers/PageWrapper/PageWrapper";
import DurationOverlay from "../../UI/movie/DurationOverlay/DurationOverlay";
import InfoProductOverlay from "../../UI/movie/InfoProductOverlay/InfoProductOverlay";
import RatingOverlayContainer from "../../UI/movie/RaitingOverlayContainer/RatingOverlayContainer";
import RatingFromNumbers from "../../UI/movie/RatingFromNumbers/RatingFromNumbers";
import RatingProgressBarBlock from "../../UI/movie/RatingProgressBarBlock/RatingProgressBarBlock";
import Link from "next/link";
import ActiveTab from "../ActiveTab/ActiveTab";
import TabTitle from "../TabTitle/TabTitle";
import TabTitleContainer from "../TabTitleContainer/TabTitleContainer";
import BackToMovieLink from "../BackToMovieLink/BackToMovieLink";
import MovieTitleWithYear from "../../Movie/MovieTitleWithYear/MovieTitleWithYear";
import { MovieById } from "../../../models/types";
import { calculateDurationMovie } from "../../../utils/calculateDurationMovie";
import { getInfoProduct } from "../../../utils/getInfoProduct";
import { calculateMovieName } from "../../../utils/calculateMovieName";
import styles from "./MoviePageModalLayout.module.scss";
import { getLinksForPlayer } from "../../../utils/getLinksForPlayer";

const newTabs: { tabName: string, count: number | null, isShowCount: boolean }[] = [
    {
        tabName: "actors",
        count: null,
        isShowCount: false,

    },
    {
        tabName: "review",
        count: null,
        isShowCount: true,

    },
    {
        tabName: "trailer",
        count: null,
        isShowCount: true,

    }
]




export default function MoviePageModalLayout({ movie, dict, lang, children }: { movie: MovieById, dict: { [key: string]: string }, lang: "ru" | "en", children: React.ReactNode }) {
    const movieName = calculateMovieName(movie.film, lang);
    const movieDuration = calculateDurationMovie(movie.film.filmLength);
    const movieInfo = getInfoProduct(movie.film);
    const {trailerLinkList } = getLinksForPlayer(movie.film.trailers)

    const generateTabs = () => {

        const calculateTabs = newTabs.map(tab => {
            if (tab.tabName === "review") {
                return { ...tab, count: movie.reviews.count }
            }
            if (tab.tabName === "trailer") {
                return { ...tab, count: movie.film.trailers.length }
            }
            return tab;
        })

        return calculateTabs;
    }
    const renderTabs = generateTabs();



    return (
        <>
            <PageWrapper>
                <BackToMovieLink
                    backLink={`/movie/${movie.film.kinopoiskId}`}
                    textLink={dict["movie.back"]}
                />
            </PageWrapper>
            <div className={styles.main}>
                <div>


                    <div className={styles.header}>
                        <MovieTitleWithYear
                            movieTitle={movieName}
                            movieYear={movie.film.year} />

                        <TabTitleContainer>
                            {renderTabs.map((tab, index) =>
                                <Fragment key={index}>
                                    {tab.tabName === "trailer" && !trailerLinkList.length
                                        ? <></>
                                        : <Link href={`/movie/${movie.film.kinopoiskId}/${tab.tabName}` }>

                                           
                                            <ActiveTab partPathname={tab.tabName}>
                                                <TabTitle
                                                    active={false}
                                                    tabTitle={dict[tab.tabName as keyof typeof dict]}
                                                    showCount={tab.isShowCount}
                                                    count={tab.count}
                                                />
                                                </ActiveTab>
                                            
                                        </Link>

                                    }
                                </Fragment>
                            )}
                        </TabTitleContainer>
                    </div>



                    <div style={{ "marginInline": "auto", "maxInlineSize": "800px", "marginBlock": "20px" }}>
                        {children}
                    </div>
                </div>

                <div>
                    <MoviePoster posterUrl={movie.film.posterUrl} />
                    <div>
                        <RatingOverlayContainer>
                            <RatingFromNumbers rating={["5", "5"]} />
                            <RatingProgressBarBlock />
                        </RatingOverlayContainer>

                        <InfoProductOverlay
                            string={movieInfo.infoProduct} />

                        <DurationOverlay
                            duration={movieDuration} />
                    </div>
                </div>
            </div>
        </>
    );
}