import MyButton from "../../../UI/MyButton/MyButton";
import Image from "next/image";
import telegram from "../../../../assets/SVG/Messangers/Telegram.svg";


export default function ButtonTelegram() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={telegram} />
        </MyButton>
    );
}