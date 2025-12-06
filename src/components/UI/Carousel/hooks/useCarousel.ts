import { useEffect, useRef, useState } from 'react';
import { useResize } from '../../../../hooks/useResize';

interface UseCarouselProps {
    dataLength: number;
}

export default function useCarousel({ dataLength }: UseCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const size = useResize();

    const containerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<Array<HTMLElement | null>>([]);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (activeIndex > lastIndex && isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [activeIndex, lastIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                        const index = itemRefs.current.indexOf(entry.target as HTMLElement);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                    if (!entry.isIntersecting || (entry.isIntersecting && entry.intersectionRatio <= 0.15)) {
                        const index = itemRefs.current.indexOf(entry.target as HTMLElement);
                        if (index !== -1) {
                            setLastIndex(index);
                        }
                    }
                });
            },
            {
                root: containerRef.current,
                rootMargin: '0px',
                threshold: [0.1, 0.9],
            },
        );
        itemRefs.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            observer.disconnect();
        };
    }, [size]);

    const handleScroll = (direction: 'next' | 'prev') => {
        const currentItem = itemRefs.current[activeIndex];
        if (currentItem) {
            if (direction === 'next') {
                let nextItem: HTMLElement | null = null;
                if (activeIndex > lastIndex || isFirstRender.current) {
                    nextItem = itemRefs.current[activeIndex];
                } else if (activeIndex < lastIndex) {
                    nextItem = itemRefs.current[lastIndex - 1];
                }
                if (nextItem) {
                    nextItem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        //@ts-ignore
                        container: 'nearest',
                        inline: 'start',
                    });
                }
            } else {
                let prevItem: HTMLElement | null = null;
                if (activeIndex > lastIndex) {
                    prevItem = itemRefs.current[lastIndex + 1];
                } else if (activeIndex < lastIndex) {
                    prevItem = itemRefs.current[activeIndex];
                }
                if (prevItem) {
                    prevItem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        //@ts-ignore
                        container: 'nearest',
                        inline: 'end',
                    });
                }
            }
        }
    };

    // eslint-disable-next-line react-hooks/refs
    const checkPrev = isFirstRender.current ? false : activeIndex !== 0;
    // eslint-disable-next-line react-hooks/refs
    const checkNext = !!itemRefs.current.length && activeIndex !== itemRefs.current.length - 1;

    return {
        checkNext,
        checkPrev,
        containerRef,
        itemRefs,
        handleScroll,
    };
}
