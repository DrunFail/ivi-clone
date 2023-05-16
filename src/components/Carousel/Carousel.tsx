import useCarousel from "./hooks/useCarousel";
import React from "react";
import styles from "./Carousel.module.scss";
import ButtonControl from "./ButtonControl/ButtonControl";
import CarouselGallery from "./CarouselGallery/CarouselGallery";
import CarouselItem from "./CarouselItem/CarouselItem";
import ShowMoreItem from "./ShowMoreItem/ShowMoreItem";
import PageSectionContainerInner from "../PageContainers/PageSectionContainerInner/PageSectionContainerInner";

interface CarouselProps {
    mode: "list" | "slider";
    carouselId: string;
    data: any[];
    count: number;
    sizes: { resol: number; items: number }[];
    href?: string;
    component: React.ComponentType<unknown>;
    callback?: () => void;
}

export default function Carousel({
    callback,
    data,
    count,
    mode,
    carouselId,
    sizes,
    href,
    component: Component
}: CarouselProps) {
    const {
        checkNext,
        checkPrev,
        handleClickNextSlide,
        handleClickPrevSlide,
        valueDirection
    } = useCarousel({
        dataLength: data.length,
        idSlider: carouselId,
        sizes,
        count
    });

    return (
        <PageSectionContainerInner>
            <div className={styles.container}>
               
                <div className={styles.test }>
                    {mode === "slider" && (
                        <>
                            {checkPrev && (
                                <ButtonControl
                                    direction={"left"}
                                    onClick={handleClickPrevSlide}
                                />
                            )}
                            {checkNext && (
                                <ButtonControl
                                    direction={"right"}
                                    onClick={handleClickNextSlide}
                                />
                            )}
                        </>
                    )}
                <div style={{overflow:"hidden", paddingInline: "12px"} }>
                <CarouselGallery carouselId={carouselId} mode={mode}>
                    {data.map((elem) => (
                        <CarouselItem
                            callback={callback}
                            key={elem?.id}
                            style={{
                                transform: `translate(${valueDirection}%, 0)`
                            }}
                        >
                            <Component elem={elem} />
                        </CarouselItem>
                    ))}
                    {count > data.length && (
                        <ShowMoreItem
                            href={href}
                            valueDirection={valueDirection}
                            mode={mode}
                        />
                    )}
                    </CarouselGallery>
                    </div>
                </div>
            </div>
        </PageSectionContainerInner>
    );
}
