import Image from "next/image";
import { FormattedMessage } from "react-intl";
import youtube from "../../../assets/SVG/Youtube/Youtube.svg";
import Button from "../Button/Button";


export default function ButtonFreeMovies() {
    return (
        <Button>
            <Image src={youtube} alt="" />
                <FormattedMessage
                    id="freeFilm"
                   defaultMessage={"Бесплатные фильмы"}
                />
        </Button>
    );
}