import React, { useEffect, FC } from "react";
import styles from "./movies.module.scss";
import { IMovieOne } from "../../models";
import { useDispatch, useSelector } from "react-redux";
import { filmAction, getFilm } from "../../store/film";
import { GetServerSideProps } from "next";
import { IPropsMovie } from "../../models/IPropsMovie";
import HeadMovie from "../../components/HeadMovie/HeadMovie";
import MainModal from "../../components/MainModal/MainModal";
import WatchAnyDevice from "../../components/WatchAnyDevice/WatchAnyDevice";
import { getOneMovie } from "../../api/movieId";
import MainContainer from "../../components/mainContainer";
import ContentBlock from "../../components/Movie/ContentBlock/ContentBlock";
import SimilarSlider from "../../components/Movie/SimilarSlider/SimilarSlider";

/** Компонент страницы фильма. */
const Movie: FC<IPropsMovie> = ({ movies }): React.ReactElement => {
    const films = useSelector(getFilm());

    useEffect(() => {
        if (movies) {
            dispatch(filmAction(movies));
        }
    }, [movies]);

    const dispatch = useDispatch();

    if (!films) {
        return <></>;
    }

    return (
        <MainContainer title={films?.currentFilm?.nameOriginal || ""}>
            <HeadMovie/>
            <section className={styles.Container}>
                <div className={styles.Container__main}>
                    <ContentBlock />
                    <div>
                        <SimilarSlider
                            carouselId={"popular"}
                            data={films?.currentFilm?.similar}
                            count={films?.currentFilm?.similar.length}
                            href={"/moives/all"}
                            headingTitle={"С этим фильмом смотрят"}
                        />
                    </div>
                    <MainModal />
                </div>
                <WatchAnyDevice />
            </section>
        </MainContainer>
    );
};

// Для SSR страницы
export const getServerSideProps: GetServerSideProps = async (context) => {
    let data: IMovieOne | null = null;
    try {
        data = await getOneMovie(String(context?.params?.id));
    } catch (err) {}

    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: { movies: data }
    };
};

export default Movie;
