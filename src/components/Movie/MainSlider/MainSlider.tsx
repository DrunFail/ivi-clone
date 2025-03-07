import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Arrows from "./arrows";
import Slide from "./slide";
import mainSliderData from "../../../mockData/mainSlider.json";
import styles from "./MainSlider.module.scss";



/** Компонент, содержащий слайдер, отображаемый на главной странице. */
export default function MainSlider(){
    return (
        <div className={styles.slider__sliderCont}>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                navigation={false}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: true
                }}
            >
                {mainSliderData.map(filmData => (
                    <SwiperSlide key={filmData.id} >
                        <Slide styles={styles} filmData={filmData} />
                    </SwiperSlide>
                ))}
                <Arrows styles={styles} />
            </Swiper >
        </div>
    );
};


