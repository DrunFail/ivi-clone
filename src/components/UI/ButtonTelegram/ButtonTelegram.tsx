import Image from "next/image";
import telegram from "../../../assets/SVG/Messangers/Telegram.svg";
import MyButton from "../MyButton/MyButton";


export default function ButtonTelegram() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={telegram} height={15} width={15 } />
        </MyButton>
    );
}