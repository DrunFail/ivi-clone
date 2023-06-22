import { useEffect } from "react";
import { IMovieOne } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { filmAction, getFilm } from "../../store/film";
import { GetServerSideProps } from "next";
import MainModal from "../../components/MainModal/MainModal";
import WatchAnyDevice from "../../components/WatchAnyDevice/WatchAnyDevice";
import { getOneMovie } from "../../api/movieId";
import SimilarSlider from "../../components/Movie/SimilarSlider/SimilarSlider";
import { MoviePageData } from "../../models/global";
import HeadMovie from "../../components/Movie/HeadMovie/HeadMovie";
import MoviePlayer from "../../components/Movie/MoviePlayer/MoviePlayer";
import Medallion from "../../components/PageContainers/Medallion/Medallion";
import Rating from "../../components/Rating/Rating";
import PersonList from "../../components/person/PersonList/PersonList";
import useMoviePageData from "../../components/Movie/hooks/useMoviePageData";
import ShareButtonWithModal from "../../components/Share/ShareButtonWithModal";
import MoviePageButtonContainer from "../../components/Movie/containers/MoviePageButtonsContainer/MoviePageButtonContainer";
import MoviePageTopContainer from "../../components/Movie/containers/MoviePageTopContainer/MoviePageTopContainer";
import MoviePagePlayerContainer from "../../components/Movie/containers/MoviePagePlayerContainer/MoviePagePlayerContainer";
import MoviePageInfoContainer from "../../components/Movie/containers/MoviePageInfoContainer/MoviePageInfoContainer";
import MoviePageVideoInfoContainer from "../../components/Movie/containers/MoviePageVideoInfoContainer/MoviePageVideoInfoContainer";
import MoviePageRatingContainer from "../../components/Movie/containers/MoviePageRatingContainer/MoviePageRatingContainer";
import MoviePagePersonListContainer from "../../components/Movie/containers/MoviePagePersonListContainer/MoviePagePersonListContainer";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../components/PageContainers/PageWrapper/PageWrapper";
import ButtonTrailer from "../../components/UI/ButtonTrailer/ButtonTrailer";
import ButtonWatchLater from "../../components/UI/ButtonWatchLater/ButtonWatchLater";
import ButtonToggleHide from "../../components/UI/ButtonToggleHide/ButtonToggleHide";
import MovieDescription from "../../components/Movie/moviePageComponents/MovieDescription/MovieDescription";
import Info from "../../components/Movie/moviePageComponents/Info/Info";
import MovieInfoContainer from "../../components/Movie/moviePageComponents/MovieInfoContainer/MovieInfoContainer";
import LanguageMovieInfo from "../../components/Movie/moviePageComponents/LanguageMovieInfo/LanguageMovieInfo";
import VideoMovieInfo from "../../components/Movie/moviePageComponents/VideoMovieInfo/VideoMovieInfo";

interface MovieProps {
    movies: MoviePageData;
}
export default function Movie({ movies }: MovieProps) {

    const films = useSelector(getFilm());



    useEffect(() => {
        if (movies) {
            dispatch(filmAction(movies));
        }
    }, [movies]);

    const dispatch = useDispatch();
    const { movieDuration, ageLimit, movieYear, movieName, movieDescription, movieCountry, movieGenre,moviePosterUrl,movieRating } = useMoviePageData({ movieData: films });
    if (!films) {
        return <></>;
    }

    return (
        <>
            <HeadMovie
                pageTitle={movieName}
                contentDescription={films.film.description}
            />

            <PageSection>
                <PageWrapper>
                    <MoviePageTopContainer>
                        <MoviePagePlayerContainer>
                            <MoviePlayer />
                            <MoviePageButtonContainer>
                                <ButtonTrailer />
                                <ButtonWatchLater />
                                <ShareButtonWithModal
                                    posterUrl={moviePosterUrl}
                                    nameRu={movieName}
                                    year={movieYear} />
                            </MoviePageButtonContainer>
                        </MoviePagePlayerContainer>
                        <MoviePageInfoContainer>
                            <Info
                                movieTitle={movieName}
                                movieYear={movieYear}
                                movieDuration={movieDuration}
                                ageLimit={ageLimit}
                                movieCountry={movieCountry}
                                movieGenre={movieGenre}
                            />
                        </MoviePageInfoContainer>
                        <MoviePagePersonListContainer>
                            <Medallion>
                                <Rating variant="small" movieRating={movieRating} />
                                <PersonList />
                            </Medallion>
                            <MovieDescription>
                                {movieDescription}
                            </MovieDescription>
                        </MoviePagePersonListContainer>
                        <MoviePageVideoInfoContainer>
                            <MovieInfoContainer>
                                <LanguageMovieInfo />
                                <VideoMovieInfo />
                            </MovieInfoContainer>
                        </MoviePageVideoInfoContainer>
                        <ButtonToggleHide>
                            details
                        </ButtonToggleHide>
                        <MoviePageRatingContainer>
                            <Rating variant="large" movieRating={movieRating } />
                        </MoviePageRatingContainer>
                    </MoviePageTopContainer>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <SimilarSlider
                        carouselId={"popular"}
                        data={films?.film?.similar}
                        count={films?.film?.similar.length}
                        href={"/moives/all"}
                        headingTitle={"С этим фильмом смотрят"}
                    />
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <MainModal />
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <WatchAnyDevice
                        movieName={movieName}
                        moviePosterUrl={moviePosterUrl}
                    />
                </PageWrapper>
            </PageSection>


        </>
    );
};

// Для SSR страницы
export const getServerSideProps: GetServerSideProps = async (context) => {
    let data: IMovieOne | null = null;
    try {
        data = await getOneMovie(String(context?.params?.id));
    } catch (err) { }

    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: { movies: data }
    };
};


