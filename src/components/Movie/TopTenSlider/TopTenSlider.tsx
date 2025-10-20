'use client';

import Carousel from '../../UI/Carousel/Carousel';
import HeaderTitleTop from './HeaderTitleTop/HeaderTitleTop';
import TopTenItem from './TopTenItem/TopTenItem';
import styles from './TopTenSlider.module.scss';

interface TopTenSliderProps {
    data: { id: number; href: string; name: string }[];
}

export default function TopTenSlider({ data }: TopTenSliderProps) {
    return (
        <div className={styles.container}>
            <HeaderTitleTop />
            <Carousel data={data} component={TopTenItem} />
        </div>
    );
}
