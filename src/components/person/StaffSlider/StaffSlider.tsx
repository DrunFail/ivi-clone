import { FormattedMessage } from "react-intl";
import Carousel from "../../UI/Carousel/Carousel";
import Button from "../../UI/Button/Button";
import { Person } from "../../../models/types";
import { STAFF_CARD_SIZES } from "./StaffCard/const";
import StaffCardContainer from "./StaffCardContainer/StaffCardContainer";
import styles from "./StaffSlider.module.scss";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";

interface StaffSliderProps {
    data: Person[],
    callback: () => void
}
export default function StaffSlider({ data, callback }: StaffSliderProps) {
    
    return (
        <>
            <div onClick={() => callback()}>
                <SectionTitle withArrow={false}>
                    <FormattedMessage id="CreatersAndActors" />
                </SectionTitle>
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
                <Button className={styles.button}>
                    <FormattedMessage id="More" />
                </Button>
            </div>
        </>
    );
}