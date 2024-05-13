"use client";

import { FormattedMessage } from "react-intl";
import Carousel from "../../UI/Carousel/Carousel";
import { Person } from "../../../models/types";
import { STAFF_CARD_SIZES } from "./StaffCard/const";
import StaffCardContainer from "./StaffCardContainer/StaffCardContainer";
import styles from "./StaffSlider.module.scss";
import Button from "../../UI/core/Button/Button";

interface StaffSliderProps {
    data: Person[],
}

export default function StaffSlider({ data }: StaffSliderProps) {
    
    return (
            <div className={styles.content}>
                <Carousel
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
    );
}