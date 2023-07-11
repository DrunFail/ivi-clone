import useCarousel from "./hooks/useCarousel";
import React from "react";
import styles from "./Carousel.module.scss";
import ButtonControl from "./ButtonControl/ButtonControl";
import CarouselGallery from "./CarouselGallery/CarouselGallery";
import CarouselItem from "./CarouselItem/CarouselItem";
import ShowMoreItem from "./ShowMoreItem/ShowMoreItem";
import PageSectionContainerInner from "../PageContainers/PageSectionContainerInner/PageSectionContainerInner";
import { MovieItemTest } from "../Movie/MovieList/interfaces/interfaces";
import MyButton from "../UI/MyButton/MyButton";
import { FormattedMessage } from "react-intl";

interface CarouselProps {
    mode: "list" | "slider" | "collection";
    carouselId: string;
    data: any[];
    count: number;
    sizes: { resol: number; items: number }[];
    href?: string;
    component: React.ComponentType<{ elem: MovieItemTest }>;
    callback?: () => void;
    showMoreHandler?: () => void
}

export default function Carousel({
    callback,
    data,
    count,
    mode,
    carouselId,
    sizes,
    href,
    component: Component,
    showMoreHandler
}: CarouselProps) {
    const {
        checkNext,
        checkPrev,
        handleClickNextSlide,
        handleClickPrevSlide,
        valueDirection,
        itemAmountOnPage
    } = useCarousel({
        dataLength: data.length,
        idSlider: carouselId,
        sizes,
        count
    });
    return (
        <PageSectionContainerInner>
            <div className={styles.container}>

                <div className={styles.test}>
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
                    <div style={{ overflow: "hidden", paddingInline: "12px" }}>
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
                                    showMoreHandler={showMoreHandler}
                                />
                            )}
                           
                        </CarouselGallery>
                    </div>
                </div>
                
            </div>
        </PageSectionContainerInner>
    );
}
