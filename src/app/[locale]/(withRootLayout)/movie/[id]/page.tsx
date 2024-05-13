import { MovieAPI } from "../../../../../api/MovieAPI";
import PageWrapper from "../../../../../components/PageContainers/PageWrapper/PageWrapper";
import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import PageWrapperInner from "../../../../../components/PageContainers/PageWrapperInner/PageWrapperInner";
import MoviePageGridTemplate from "../../../../../components/Movie/containers/MoviePageGridTemplate/MoviePageGridTemplate";
import MoviePageGridArea from "../../../../../components/Movie/containers/MoviePageGridArea/MoviePageGridArea";
import MoviePlayerStickyContainer from "../../../../../components/Movie/containers/MoviePlayerStickyContainer/MoviePlayerStickyContainer";
import CustomReactPlayer from "../../../../../components/CustomReactPlayer/CustomReactPlayer";
import Info from "../../../../../components/Movie/moviePageComponents/Info/Info";
import PersonListWithRating from "../../../../../components/person/PersonListWithRating/PersonListWithRating";
import ButtonPlayerBlock from "../../../../../components/Movie/ButtonPlayerBlock/ButtonPlayerBlock";
import MovieHideInfoContainer from "../../../../../components/Movie/MovieHideInfoContainer/MovieHideInfoContainer";
import MovieExtraInfoBlock from "../../../../../components/Movie/MovieExtraInfoBlock/MovieExtraInfoBlock";
import Rating from "../../../../../components/Rating/Rating";
import SimilarSlider from "../../../../../components/Movie/SimilarSlider/SimilarSlider";
import StaffSlider from "../../../../../components/person/StaffSlider/StaffSlider";
import WatchAnyDevice from "../../../../../components/WatchAnyDevice/WatchAnyDevice";
import { getLinksForPlayer } from "../../../../../utils/getLinksForPlayer";
import { calculateMovieName } from "../../../../../utils/calculateMovieName";
import { minHours } from "../../../../../utils/minHours";
import { calculateGenreName } from "../../../../../utils/calculateGenreName";
import { getInfoProduct } from "../../../../../utils/getInfoProduct";
import { calculateCountryName } from "../../../../../utils/calculateCountryName";
import SectionTitle from "../../../../../components/UI/SectionTitle/SectionTitle";
import { getDictionary } from "../../../dictionaries";
import Link from "next/link";
import BreadCrumbs from "../../../../../components/UI/BreadCrumbs/BreadCrumbs";
import { getBreadcrumbsLinks } from "../../../../../utils/getBreadcrumbsLinks";
import SizeConditionContainer from "../../../../../components/SizeConditionContainer/SizeConditionContainer";
import type { Metadata } from "next";
import CommentSlider from "../../../../../components/comment/CommentSlider/CommentSlider";
import { getTranslations } from "next-intl/server";



type Props = {
    params: { id: string, locale: "en" | "ru" }
}

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, locale } = params;
    const movie = await getMovieById(id);
    const movieName = calculateMovieName(movie.film, locale);

    return {
        title: `${movieName} смотреть в хорошем качестве`,
    }
}



export default async function Movie({ params: { id, locale } }: { params: { id: string, locale: "ru" | "en" } }) {
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);
    const t = await getTranslations();

    const movieName = calculateMovieName(movie.film, locale);
    const movieDuration = minHours(Number(movie.film.filmLength))
    const ageLimit = movie.film.ratingAgeLimits.replace("age", "")
    const firstCounry = movie.film.countries[0];
    const movieCountry = calculateCountryName(firstCounry, locale);
    const firstGenre = movie.film.genres[0]
    const movieGenre = calculateGenreName(firstGenre, locale)
    const movieInfo = getInfoProduct(movie.film)

    const {firstTrailerLink,trailerLinkList } = getLinksForPlayer(movie.film.trailers);


    const breadCrumbsData = getBreadcrumbsLinks({ movie, lang:locale, dict });

    return (
        <>
            <PageSection>
                <PageWrapper>
                    <BreadCrumbs
                        breadcrumbs={breadCrumbsData.shortList}
                    />
                </PageWrapper>
            </PageSection>

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
                                    movieYear={movie.film.year}
                                    movieDuration={movieDuration}
                                    ageLimit={ageLimit}
                                    movieCountry={movieCountry}
                                    movieGenre={movieGenre}
                                />
                            </MoviePageGridArea>

                            <MoviePageGridArea area="person">
                                <PersonListWithRating
                                    movieRating={movie.film.ratingKinopoisk ?? 5}
                                    persons={movie.staff}
                                />
                            </MoviePageGridArea>

                            <MoviePageGridArea area="buttons">

                                <ButtonPlayerBlock
                                    variant={"tablet"}
                                    movieName={movieName}
                                    moviePosterUrl={movie.film.posterUrl}
                                    movieYear={movie.film.year}
                                />
                            </MoviePageGridArea>

                            <MoviePageGridArea area="description">
                                <MovieHideInfoContainer
                                    movieDescription={movie.film.description}
                                    isHideText="Детали о фильме"
                                    notIsHideText="Свернуть детали"
                                >
                                    <MovieExtraInfoBlock variant={"desktop"} />
                                </MovieHideInfoContainer>
                            </MoviePageGridArea>




                            <SizeConditionContainer more={1160}>
                                <MoviePageGridArea area="rating">
                                    <Rating variant="large" movieRating={+(movie.film.ratingKinopoisk ?? 5)} />
                                </MoviePageGridArea>
                            </SizeConditionContainer>


                        </MoviePageGridTemplate>
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>


            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <SectionTitle withArrow={false}>
                            {t("WithFilm", { name: movieName })}
                        </SectionTitle>
                        <SimilarSlider
                            similarGenreId={movie.film.genres[0].id}
                            similarMovieList={movie.film.similar}
                            movieName={movieName}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>


            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <Link href={`/movie/${id}/actors`} prefetch>
                            <SectionTitle withArrow={false}>
                                {dict.CreatersAndActors}
                            </SectionTitle>
                        </Link>
                        <StaffSlider data={movie.staff} />

                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>

            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <Link href={`/movie/${id}/review`}>
                            <SectionTitle withArrow={false}>
                                {dict.review}
                            </SectionTitle>
                        </Link>
                        <CommentSlider
                            commentData={movie.reviews}
                            movieName={movieName}
                            movieId={movie.film.kinopoiskId}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageSection>
                <PageWrapper>
                    <PageWrapperInner>
                        <WatchAnyDevice
                            movieName={movieName}
                            moviePosterUrl={movie.film.posterUrl}
                        />
                    </PageWrapperInner>
                </PageWrapper>
            </PageSection>
            <PageWrapper>
                <PageWrapperInner>
                    <BreadCrumbs
                        breadcrumbs={breadCrumbsData.fullList}
                        isLastCrumbActive={false}
                    />
                </PageWrapperInner>
            </PageWrapper>
        </>
    );
};
