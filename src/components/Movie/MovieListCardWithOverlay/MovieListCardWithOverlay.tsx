'use client';

import { useState } from 'react';
import MovieListCard from '../MovieListCard/MovieListCard';
import OverlayMovieListCard from '../OverlayMovieListCard/OverlayMovieListCard';

interface MovieListCardWithOverlayProps {
    modifiedMovieData: {
        movieName: string;
        moviePoster: string;
    };
    overlayMovieData?: {
        rating: string[];
        mainRatingPercentage: number;
        infoProduct: string;
        duration: string;
    };
    icons: React.ReactNode;
}
export default function MovieListCardWithOverlay({
    modifiedMovieData,
    overlayMovieData,
    icons,
}: MovieListCardWithOverlayProps) {
    const [isVisibleOverlay, setIsVisibleOverlay] = useState(false);
    const toggleOverlay = () => {
        setIsVisibleOverlay((isVisibleOverlay) => !isVisibleOverlay);
    };
    return (
        <div style={{ paddingInlineEnd: '24px' }}>
            <div onMouseEnter={toggleOverlay} onMouseLeave={toggleOverlay}>
                <MovieListCard modifiedMovieData={modifiedMovieData}>
                    {isVisibleOverlay && <OverlayMovieListCard icons={icons} overlayMovieData={overlayMovieData} />}
                </MovieListCard>
            </div>
        </div>
    );
}
