import Image from "next/image";
import { FormattedMessage } from "react-intl";
import youtube from "../../../assets/SVG/Youtube/Youtube.svg";
import MyButton from "../MyButton/MyButton";


export default function ButtonFreeMovies() {
    return (
        <MyButton type="button" bg_color="footer" size="medium">
            <Image src={youtube} alt="" />
            <FormattedMessage
                id="freeFilm"
                defaultMessage={"Бесплатные фильмы"}
            />
        </MyButton>
    );
}