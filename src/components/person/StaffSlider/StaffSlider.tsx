import { FormattedMessage } from "react-intl";
import { IStaff } from "../../../models";
import SliderTitle from "../../Movie/MovieSlider/SliderTitle/SliderTitle";
import Carousel from "../../UI/Carousel/Carousel";
import MyButton from "../../UI/MyButton/MyButton";
import StaffCard from "../StaffCard/StaffCard";
import { STAFF_CARD_SIZES } from "../StaffCard/const";

interface StaffSliderProps {
    data: IStaff[],
    callback: () => void
}
export default function StaffSlider({ data, callback }: StaffSliderProps) {
    return (
        <>
            <div onClick={() => callback()}>
                <SliderTitle title={"Актёры и создатели"} href={""} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr max-content" }}>
                <Carousel
                    carouselId="staff"
                    mode={"collection"}
                    data={data}
                    count={data.length}
                    sizes={STAFF_CARD_SIZES}
                    component={StaffCard}
                    href={""}
                />
                <MyButton
                    style={{ width: "88px", height: "88px", marginTop: "25px" }}
                    type="button"

                    bg_color="footer"
                    figure="circle"
                    size="large"
                >
                    <FormattedMessage id="More" />
                </MyButton>
            </div>
        </>
    );
}