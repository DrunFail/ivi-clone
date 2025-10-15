'use client';

import Carousel from '../../UI/Carousel/Carousel';
import MovieListCardWithOverlayContainer from '../MovieListCardContainer/MovieListCardWithOverlayContainer';
import { MOVIE_LIST_SIZES } from '../../../constants/sliderItemSize';
import { ResponseWithCountAndRows } from '../../../models/response';
import { Movie } from '../../../models/types';
import styles from './MovieSlider.module.scss';

interface MovieSliderProps {
    href: string;
    data: ResponseWithCountAndRows<Movie>;
}

export default function MovieSlider({ href, data }: MovieSliderProps) {
    return (
        <div className={styles.container}>
            <Carousel
                mode={'slider'}
                data={data.rows}
                count={data.count}
                sizes={MOVIE_LIST_SIZES}
                href={href}
                component={MovieListCardWithOverlayContainer}
            />
        </div>
    );
}
