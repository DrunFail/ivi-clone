'use client';

import Carousel from '../../UI/Carousel/Carousel';
import MovieListCardWithOverlayContainer from '../MovieListCardContainer/MovieListCardWithOverlayContainer';
import { ResponseWithCountAndRows } from '../../../models/response';
import { Movie } from '../../../models/types';
import MovieListCardWrapper from '@/components/Movie/MovieListCardWrapper/MovieListCardWrapper';
import LinkShowMore from '@/components/Movie/LinkShowMore/LinkShowMore';
import MovieSliderSizeContainer from '@/components/Movie/MovieSliderSizeContainer/MovieSliderSizeContainer';

interface MovieSliderProps {
    href: string;
    data: ResponseWithCountAndRows<Movie>;
}

export default function MovieSlider({ href, data }: MovieSliderProps) {
    return (
        <MovieSliderSizeContainer>
            <Carousel
                data={data.rows}
                component={MovieListCardWithOverlayContainer}
                lastElem={
                    <MovieListCardWrapper>
                        <LinkShowMore href={href} />
                    </MovieListCardWrapper>
                }
            />
        </MovieSliderSizeContainer>
    );
}
