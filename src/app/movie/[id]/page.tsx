"use client";

import { GetServerSideProps } from "next";
import { MovieById } from "../../../models/types";
import useMoviePageModal from "../../../hooks/movie/useMoviePageModal";
import useMoviePageData from "../../../hooks/movie/useMoviePageData";
import useCustomReactPlayer from "../../../hooks/movie/useCustomReactPlayer";
import useBreadCrumbsMoviePage from "../../../hooks/useBreadCrumbsMoviePage";
import { useResize } from "../../../hooks/useResize";
import HeadMovie from "../../../components/Movie/HeadMovie/HeadMovie";
import PageWrapper from "../../../components/PageContainers/PageWrapper/PageWrapper";
import BreadCrumbs from "../../../components/UI/BreadCrumbs/BreadCrumbs";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import PageWrapperInner from "../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import MoviePlayerStickyContainer from "../../../components/Movie/containers/MoviePlayerStickyContainer/MoviePlayerStickyContainer";
import CustomReactPlayer from "../../../components/CustomReactPlayer/CustomReactPlayer";
import ButtonPlayerBlock from "../../../components/Movie/ButtonPlayerBlock/ButtonPlayerBlock";
import Info from "../../../components/Movie/moviePageComponents/Info/Info";
import Rating from "../../../components/Rating/Rating";
import MovieExtraInfoBlock from "../../../components/Movie/MovieExtraInfoBlock/MovieExtraInfoBlock";
import StaffSlider from "../../../components/person/StaffSlider/StaffSlider";
import SimilarSlider from "../../../components/Movie/SimilarSlider/SimilarSlider";
import WatchAnyDevice from "../../../components/WatchAnyDevice/WatchAnyDevice";
import { ParsedUrlQuery } from "querystring";
import { MovieAPI } from "../../../api/MovieAPI";
import PersonListWithRating from "../../../components/person/PersonListWithRating/PersonListWithRating";
import MovieHideInfoContainer from "../../../components/Movie/MovieHideInfoContainer/MovieHideInfoContainer";
import MoviePageGridArea from "../../../components/Movie/containers/MoviePageGridArea/MoviePageGridArea";
import MoviePageGridTemplate from "../../../components/Movie/containers/MoviePageGridTemplate/MoviePageGridTemplate";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const MoviePageModal = dynamic(() =>
    import("../../../components/Movie/MoviePageModal/MoviePageModal").then((mod) => mod.default))

const CommentSlider = dynamic(() =>
    import("../../../components/comment/CommentSlider/CommentSlider").then((mod) => mod.default))



interface MovieProps {
    movie: MovieById;
}
export default function Movie() {
    const [movie, setMovie] = useState<MovieById>();


    const { visible, pushQuery, removeQueryParam, type } = useMoviePageModal();
    
    const size = useResize();

    const movieId = useParams<{ id: string }>()!.id;

    useEffect(() => {
        async function getPersonDataById(movieId: string) {
            const movie = await MovieAPI.getMovieById(movieId);
            setMovie(movie)
        }

        getPersonDataById(movieId);
    }, [movieId])

    
    const modifiedMovieData = useMoviePageData({ movieData: movie });

    const linkData = useCustomReactPlayer(movie?.film.trailers);
    const breadCrumbsData = useBreadCrumbsMoviePage({ movie });

    if (!movie || !linkData || !breadCrumbsData || !modifiedMovieData) return <></>;
    const { firstTrailerLink, trailerLinkList } = linkData;
    const { movieDuration,
        ageLimit,
        movieYear,
        movieName,
        movieDescription,
        movieCountry,
        movieGenre,
        moviePosterUrl,
        movieRating,
        similarMovieList,
        movieInfo
    } = modifiedMovieData;
    

    return (
        <>
            <HeadMovie
                pageTitle={movieName}
                contentDescription={movie.film.description}
            />

            <PageWrapper>
                <BreadCrumbs breadcrumbs={breadCrumbsData.shortList} />
            </PageWrapper>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <MoviePageGridTemplate>
                            <MoviePageGridArea area="player">
                                <MoviePlayerStickyContainer>
                                    <CustomReactPlayer videoUrl={firstTrailerLink} />
                                </MoviePlayerStickyContainer>
                            </MoviePageGridArea>

                            <MoviePageGridArea area="info">
                                <Info
                                    movieTitle={movieName}
                                    movieYear={movieYear}
                                    movieDuration={movieDuration}
                                    ageLimit={ageLimit}
                                    movieCountry={movieCountry}
                                    movieGenre={movieGenre}
                                />
                            </MoviePageGridArea>

                            <MoviePageGridArea area="person">
                                <PersonListWithRating
                                    movieRating={movieRating}
                                    persons={movie.staff}
                                />
                            </MoviePageGridArea>

                            <MoviePageGridArea area="buttons">
                                {size > 1 &&
                                    <ButtonPlayerBlock
                                        variant={"tablet"}
                                        movieName={movieName}
                                        moviePosterUrl={moviePosterUrl}
                                        movieYear={movieYear}
                                    />
                                }
                                {/*{size < 880 &&*/}
                                {/*    <ButtonPlayerBlock*/}
                                {/*        variant={"mobile"}*/}
                                {/*        movieName={movieName}*/}
                                {/*        moviePosterUrl={moviePosterUrl}*/}
                                {/*        movieYear={movieYear}*/}
                                {/*    />*/}
                                {/*    }*/}
                                {/*    {size > 880 && size < 1160 &&*/}
                                {/*        <ButtonPlayerBlock*/}
                                {/*            variant={"tablet"}*/}
                                {/*            movieName={movieName}*/}
                                {/*            moviePosterUrl={moviePosterUrl}*/}
                                {/*            movieYear={movieYear}*/}
                                {/*        />*/}
                                {/*    }*/}
                            </MoviePageGridArea>

                            <MoviePageGridArea area="description">
                                <MovieHideInfoContainer
                                    movieDescription={movieDescription}
                                    isHideText="Детали о фильме"
                                    notIsHideText="Свернуть детали"
                                >
                                    {size > 1160 && <MovieExtraInfoBlock variant={"desktop"} />}
                                </MovieHideInfoContainer>
                            </MoviePageGridArea>




                            {size > 1160 &&
                                <MoviePageGridArea area="rating">
                                    <Rating variant="large" movieRating={movieRating} />
                                </MoviePageGridArea>
                            }

                        </MoviePageGridTemplate>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>


            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <SimilarSlider
                            similarGenreId={movie.film.genres[0].id}
                            similarMovieList={similarMovieList}
                            movieName={movieName}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>


            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <div style={{ display: "grid" }}>
                            <StaffSlider callback={() => pushQuery("actors")} data={movie.staff} />
                        </div>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>

            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <CommentSlider
                            commentData={movie.reviews}
                            movieName={movieName}
                            movieId={movie.film.kinopoiskId}
                            callback={() => pushQuery("review")} />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <WatchAnyDevice
                            movieName={movieName}
                            moviePosterUrl={moviePosterUrl}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageWrapper>
                <PageWrapperInner>
                    <BreadCrumbs breadcrumbs={breadCrumbsData.fullList} isLastCrumbActive={false} />
                </PageWrapperInner>
            </PageWrapper>
            <MoviePageModal
                visible={visible}
                type={type}
                film={movie}
                callback={() => removeQueryParam()}
                movieTitle={movieName}
                movieYear={movieYear}
                movieInfo={movieInfo}
                trailerList={trailerLinkList}
            />

        </>
    );
};
