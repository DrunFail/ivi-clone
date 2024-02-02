import { GetServerSideProps } from "next";
import WatchAnyDevice from "../../components/WatchAnyDevice/WatchAnyDevice";
import SimilarSlider from "../../components/Movie/SimilarSlider/SimilarSlider";
import HeadMovie from "../../components/Movie/HeadMovie/HeadMovie";
import MoviePlayer from "../../components/Movie/MoviePlayer/MoviePlayer";
import Medallion from "../../components/PageContainers/Medallion/Medallion";
import Rating from "../../components/Rating/Rating";
import PersonList from "../../components/person/PersonList/PersonList";
import useMoviePageData from "../../components/Movie/hooks/useMoviePageData";
import MoviePageTopContainer from "../../components/Movie/containers/MoviePageTopContainer/MoviePageTopContainer";
import MoviePagePlayerContainer from "../../components/Movie/containers/MoviePagePlayerContainer/MoviePagePlayerContainer";
import MoviePageInfoContainer from "../../components/Movie/containers/MoviePageInfoContainer/MoviePageInfoContainer";
import MoviePageVideoInfoContainer from "../../components/Movie/containers/MoviePageVideoInfoContainer/MoviePageVideoInfoContainer";
import MoviePageRatingContainer from "../../components/Movie/containers/MoviePageRatingContainer/MoviePageRatingContainer";
import MoviePagePersonListContainer from "../../components/Movie/containers/MoviePagePersonListContainer/MoviePagePersonListContainer";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import PageWrapper from "../../components/PageContainers/PageWrapper/PageWrapper";
import MovieDescription from "../../components/Movie/moviePageComponents/MovieDescription/MovieDescription";
import Info from "../../components/Movie/moviePageComponents/Info/Info";
import StaffSlider from "../../components/person/StaffSlider/StaffSlider";
import CommentSlider from "../../components/comment/CommentSlider/CommentSlider";
import MoviePageModal from "../../components/Movie/MoviePageModal/MoviePageModal";
import useMoviePageModal from "../../components/Movie/MoviePageModal/hooks/useMoviePageModal";
import { useResize } from "../../hooks/useResize";
import ButtonPlayerBlock from "../../components/Movie/ButtonPlayerBlock/ButtonPlayerBlock";
import MovieExtraInfoBlock from "../../components/Movie/MovieExtraInfoBlock/MovieExtraInfoBlock";
import { MovieById } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";
import { ParsedUrlQuery } from "querystring";

interface MovieProps {
    movie: MovieById;
}
export default function Movie({ movie }: MovieProps) {

    const { movieDuration, ageLimit, movieYear, movieName, movieDescription, movieCountry, movieGenre, moviePosterUrl, movieRating } = useMoviePageData({ movieData: movie });
    const { visible, pushQuery, removeQueryParam, type } = useMoviePageModal();
    const size = useResize();
    console.log(movie)

    return (
        <>
            <HeadMovie
                pageTitle={movieName}
                contentDescription={movie.film.description}
            />

            <PageSection>
                <PageWrapper>
                    <MoviePageTopContainer>
                        <MoviePagePlayerContainer>
                            <MoviePlayer />
                            {size > 1160 &&
                                <ButtonPlayerBlock
                                    variant={"desktop"}
                                    movieName={movieName}
                                    moviePosterUrl={moviePosterUrl}
                                movieYear={movieYear}
                                />
                            }
                            {size < 880 && 
                                <ButtonPlayerBlock
                                    variant={"mobile"}
                                    movieName={movieName}
                                    moviePosterUrl={moviePosterUrl}
                                    movieYear={movieYear}
                                />
                            }
                            
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
                                <PersonList personList={movie.staff} />
                            </Medallion>
                            <MovieDescription>
                                {movieDescription}
                            </MovieDescription>
                        </MoviePagePersonListContainer>
                        {size > 880 && size < 1160 &&
                            <ButtonPlayerBlock
                                variant={"tablet"}
                                movieName={movieName}
                                moviePosterUrl={moviePosterUrl}
                                movieYear={movieYear}
                            />
                        }
                        <MoviePageVideoInfoContainer>
                            {size > 1160
                                ? <MovieExtraInfoBlock variant={"desktop"} />
                                : <MovieExtraInfoBlock variant={"tablet"} />
                            }
                        </MoviePageVideoInfoContainer>
                        {/*<ButtonToggleHide>*/}
                        {/*    details*/}
                        {/*</ButtonToggleHide>*/}
                        <MoviePageRatingContainer>
                            <Rating variant="large" movieRating={movieRating} />
                        </MoviePageRatingContainer>
                    </MoviePageTopContainer>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <SimilarSlider
                        carouselId={"popular"}
                        data={movie?.film?.similar}
                        count={movie?.film?.similar.length}
                        href={"/moives/all"}
                        headingTitle={"С этим фильмом смотрят"}
                    />
                </PageWrapper>
            </PageSection>

            <PageSection>
                <PageWrapper>
                    <div style={{ display: "grid" }}>
                        <StaffSlider callback={() => pushQuery("actors")} data={movie?.staff} />
                    </div>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <CommentSlider callback={() => pushQuery("review")} />
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
            <MoviePageModal
                visible={visible}
                type={type}
                film={movie}
                callback={() => removeQueryParam()}
                movieTitle={movieName}
                movieYear={movieYear} />

        </>
    );
};

interface ContextParams extends ParsedUrlQuery {
    id: string
}


// Для SSR страницы
export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id } = context.params as ContextParams
    const movie = await MovieAPI.getMovieById(id)
    return { props: {movie}}
};


