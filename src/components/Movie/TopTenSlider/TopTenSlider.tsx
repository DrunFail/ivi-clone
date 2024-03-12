import Carousel from "../../UI/Carousel/Carousel";
import { TOP_TEN_SIZES } from "./constants/contants";
import HeaderTitleTop from "./HeaderTitleTop/HeaderTitleTop";
import TopTenItem from "./TopTenItem/TopTenItem";

interface TopTenSliderProps {
    carouselId: string,
    data: { id: number, href: string }[],
    count: number
}

export default function TopTenSlider({ carouselId, data, count }:TopTenSliderProps) {
    return (
        <>
            <HeaderTitleTop />
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data}
                count={count}
                sizes={TOP_TEN_SIZES}
                component={TopTenItem} />
        </>

    );
}
