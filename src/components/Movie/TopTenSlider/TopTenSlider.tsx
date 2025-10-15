'use client';

import { TOP_TEN_SIZES } from '../../../constants/sliderItemSize';
import Carousel from '../../UI/Carousel/Carousel';
import HeaderTitleTop from './HeaderTitleTop/HeaderTitleTop';
import TopTenItem from './TopTenItem/TopTenItem';
import styles from './TopTenSlider.module.scss';

interface TopTenSliderProps {
    data: { id: number; href: string; name: string }[];
    count: number;
}

export default function TopTenSlider({ data, count }: TopTenSliderProps) {
    return (
        <div className={styles.container}>
            <HeaderTitleTop />
            <Carousel mode={'slider'} data={data} count={count} sizes={TOP_TEN_SIZES} component={TopTenItem} />
        </div>
    );
}
