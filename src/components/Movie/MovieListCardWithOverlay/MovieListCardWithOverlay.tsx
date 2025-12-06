'use client';

import { useState } from 'react';
import MovieListCard from '../MovieListCard/MovieListCard';
import OverlayMovieListCard from '../OverlayMovieListCard/OverlayMovieListCard';
import { Link } from '@/i18n/navigation';
import useMovieListCardData from '@/hooks/movie/useMovieListCardData';
import { Movie, SimilarMovie } from '@/models/types';

interface MovieListCardWithOverlayProps {
    elem: Movie | SimilarMovie;
}
export default function MovieListCardWithOverlay({ elem }: MovieListCardWithOverlayProps) {
    const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);
    const movieData = useMovieListCardData({ movieData: elem });

    const toggleOverlay = () => {
        setIsVisibleOverlay((isVisibleOverlay) => !isVisibleOverlay);
    };
    return (
        <Link
            href={movieData.movieLink}
            aria-label={`перейти на страницу фильма ${movieData.modifiedMovieData.movieName}`}
        >
            <div onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
                <MovieListCard modifiedMovieData={movieData.modifiedMovieData}>
                    {isVisibleOverlay && <OverlayMovieListCard overlayMovieData={movieData.overlayMovieData} />}
                </MovieListCard>
            </div>
        </Link>
    );
}
