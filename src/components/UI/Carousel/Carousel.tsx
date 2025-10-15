'use client';

import useCarousel from './hooks/useCarousel';
import styles from './Carousel.module.scss';
import CarouselGallery from './CarouselGallery/CarouselGallery';
import CarouselItem from './CarouselItem/CarouselItem';
import ShowMoreItem from './ShowMoreItem/ShowMoreItem';
import PageSectionContainerInner from '../../PageContainers/PageSectionContainerInner/PageSectionContainerInner';
import NewButtonControl from './NewButtonControl/NewButtonControl';
import FontIcon from '../FontIcon/FontIcon';

interface CarouselProps<T extends { id: number }> {
    mode: 'list' | 'slider' | 'collection';
    data: T[];
    count: number;
    sizes: { resol: number; items: number }[];
    href?: string;
    component: React.ComponentType<{ elem: T }>;
    callback?: () => void;
    showMoreHandler?: () => void;
}

export default function Carousel<T extends { id: number }>({
    callback,
    data,
    count,
    mode,
    sizes,
    href,
    component: Component,
    showMoreHandler,
}: CarouselProps<T>) {
    const {
        checkNext,
        checkPrev,
        handleClickNextSlide,
        handleClickPrevSlide,
        valueDirection,
        itemAmountOnPage,
        sliderId,
    } = useCarousel({
        dataLength: data.length,
        sizes,
        count,
    });
    return (
        <PageSectionContainerInner>
            <div className={styles.container}>
                <div className={styles.test}>
                    {mode === 'slider' && (
                        <>
                            {checkPrev && (
                                <NewButtonControl onClick={handleClickPrevSlide} direction="left">
                                    <FontIcon variant="arrowLeft" size={32} />
                                </NewButtonControl>
                            )}
                            {checkNext && (
                                <NewButtonControl onClick={handleClickNextSlide} direction="right">
                                    <FontIcon variant="arrowRight" size={32} />
                                </NewButtonControl>
                            )}
                        </>
                    )}
                    <div style={{ overflow: 'hidden', paddingInline: '12px' }}>
                        <CarouselGallery carouselId={sliderId} mode={mode}>
                            {data.map((elem) => (
                                <CarouselItem
                                    callback={callback}
                                    key={elem.id}
                                    style={{
                                        transform: `translate(${valueDirection}%, 0)`,
                                    }}
                                >
                                    <Component elem={elem} />
                                </CarouselItem>
                            ))}
                            {count > data.length && mode === 'slider' && (
                                <ShowMoreItem
                                    href={href}
                                    valueDirection={valueDirection}
                                    mode={mode}
                                    showMoreHandler={showMoreHandler}
                                />
                            )}
                        </CarouselGallery>
                        {count > data.length && mode === 'list' && (
                            <ShowMoreItem
                                href={href}
                                valueDirection={valueDirection}
                                mode={mode}
                                showMoreHandler={showMoreHandler}
                            />
                        )}
                    </div>
                </div>
            </div>
        </PageSectionContainerInner>
    );
}
