'use client';

import Carousel from '../../UI/Carousel/Carousel';
import { ResponseWithCountAndRows } from '../../../models/response';
import { Movie } from '../../../models/types';
import LinkShowMore from '@/components/Movie/LinkShowMore/LinkShowMore';
import MovieSliderSizeContainer from '@/components/Movie/MovieSliderSizeContainer/MovieSliderSizeContainer';
import MovieListCardWithOverlay from '@/components/Movie/MovieListCardWithOverlay/MovieListCardWithOverlay';
import MovieListCardWrapper from '@/components/Movie/MovieListCardWrapper/MovieListCardWrapper';

interface MovieSliderProps {
    href: string;
    data: ResponseWithCountAndRows<Movie>;
}

export default function MovieSlider({ href, data }: MovieSliderProps) {
    return (
        <MovieSliderSizeContainer>
            <Carousel
                data={data.rows}
                component={MovieListCardWithOverlay}
                lastElem={
                    <MovieListCardWrapper>
                        <LinkShowMore href={href} />
                    </MovieListCardWrapper>
                }
            />
        </MovieSliderSizeContainer>
    );
}
