"use client";

import Carousel from "../../UI/Carousel/Carousel";
import { Person } from "../../../models/types";
import { STAFF_CARD_SIZES } from "./StaffCard/const";
import StaffCardContainer from "./StaffCardContainer/StaffCardContainer";
import styles from "./StaffSlider.module.scss";
import Button from "../../UI/core/Button/Button";
import { useTranslations } from "next-intl";

interface StaffSliderProps {
    data: Person[],
}

export default function StaffSlider({ data }: StaffSliderProps) {
    const t = useTranslations();
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
                {t("More") }
                </Button>
            </div>
    );
}