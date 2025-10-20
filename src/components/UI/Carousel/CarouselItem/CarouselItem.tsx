import { ForwardedRef, forwardRef } from 'react';
import styles from './CarouselItem.module.scss';

interface CarouselItemProps {
    children: React.ReactNode;
    callback?: () => void;
}

function Item({ children, callback }: CarouselItemProps, ref: ForwardedRef<HTMLElement>) {
    return (
        <article onClick={callback} className={styles.carousel_item} ref={ref}>
            {children}
        </article>
    );
}

const CarouselItem = forwardRef<HTMLElement, CarouselItemProps>(Item);
export default CarouselItem;
