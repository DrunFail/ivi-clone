import { forwardRef } from 'react';
import styles from './CarouselGallery.module.scss';

interface CarouselGalleryProps {
    children: React.ReactNode;
}

function Gallery({ children }: CarouselGalleryProps, ref: React.Ref<HTMLDivElement>) {
    return (
        <div className={styles.gallery} ref={ref}>
            {children}
        </div>
    );
}

const CarouselGallery = forwardRef<HTMLDivElement, CarouselGalleryProps>(Gallery);

export default CarouselGallery;
