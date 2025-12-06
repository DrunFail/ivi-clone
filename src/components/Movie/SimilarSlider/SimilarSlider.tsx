'use client';

import { Movie, SimilarMovie } from '../../../models/types';
import Carousel from '../../UI/Carousel/Carousel';
import MovieSliderSizeContainer from '../MovieSliderSizeContainer/MovieSliderSizeContainer';
import MovieListCardWithOverlay from '@/components/Movie/MovieListCardWithOverlay/MovieListCardWithOverlay';

interface SimilarSliderProps {
    similarData: Movie[] | SimilarMovie[];
}

export default function SimilarSlider({ similarData }: SimilarSliderProps) {
    return (
        <MovieSliderSizeContainer>
            <Carousel data={similarData} component={MovieListCardWithOverlay} />
        </MovieSliderSizeContainer>
    );
}
