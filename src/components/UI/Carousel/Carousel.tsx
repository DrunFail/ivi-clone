'use client';

import useCarousel from './hooks/useCarousel';
import styles from './Carousel.module.scss';
import CarouselGallery from './CarouselGallery/CarouselGallery';
import CarouselItem from './CarouselItem/CarouselItem';
import NewButtonControl from './NewButtonControl/NewButtonControl';
import FontIcon from '../FontIcon/FontIcon';

interface CarouselProps<T extends { id: number }> {
    data: T[];
    component: React.ComponentType<{ elem: T }>;
    callback?: () => void;
    showMoreHandler?: () => void;
    lastElem?: React.ReactNode;
}

export default function Carousel<T extends { id: number }>({
    callback,
    data,
    component: Component,
    lastElem,
}: CarouselProps<T>) {
    const { checkNext, checkPrev, containerRef, itemRefs, handleScroll } = useCarousel({
        dataLength: data.length,
    });
    return (
        <div className={styles.test}>
            <>
                {checkPrev && (
                    <NewButtonControl onClick={() => handleScroll('prev')} direction="left">
                        <FontIcon variant="arrowLeft" size={32} />
                    </NewButtonControl>
                )}
                {checkNext && (
                    <NewButtonControl onClick={() => handleScroll('next')} direction="right">
                        <FontIcon variant="arrowRight" size={32} />
                    </NewButtonControl>
                )}
            </>

            <CarouselGallery ref={containerRef}>
                {data.map((elem, index) => (
                    <CarouselItem
                        ref={(el) => {
                            itemRefs.current[index] = el;
                        }}
                        callback={callback}
                        key={elem.id}
                    >
                        <Component elem={elem} />
                    </CarouselItem>
                ))}
                {lastElem && (
                    <CarouselItem
                        ref={(el) => {
                            itemRefs.current[data.length] = el;
                        }}
                    >
                        {lastElem}
                    </CarouselItem>
                )}
            </CarouselGallery>
        </div>
    );
}
