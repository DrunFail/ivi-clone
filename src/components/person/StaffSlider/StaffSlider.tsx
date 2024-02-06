import { FormattedMessage } from "react-intl";
import SliderTitle from "../../Movie/MovieSlider/SliderTitle/SliderTitle";
import Carousel from "../../UI/Carousel/Carousel";
import Button from "../../UI/Button/Button";
import { Person } from "../../../models/types";
import { STAFF_CARD_SIZES } from "./StaffCard/const";
import StaffCardContainer from "./StaffCardContainer/StaffCardContainer";
import styles from "./StaffSlider.module.scss";

interface StaffSliderProps {
    data: Person[],
    callback: () => void
}
export default function StaffSlider({ data, callback }: StaffSliderProps) {
    if (!data) return;
    return (
        <>
            <div onClick={() => callback()}>
                <SliderTitle
                    href={""}
                    withArrow={false}
                    intlId={"CreatersAndActors"}
                />
            </div>
            <div className={styles.content}>
                <Carousel
                    carouselId="staff"
                    mode={"collection"}
                    data={data}
                    count={data.length}
                    sizes={STAFF_CARD_SIZES}
                    component={StaffCardContainer}
                    href={""}
                />
                <Button className={styles.button }>
                    <FormattedMessage id="More" />
                </Button>
            </div>
        </>
    );
}