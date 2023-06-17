import MyButton from "../../../UI/MyButton/MyButton";
import Image from "next/image";
import twitter from "../../../../assets/SVG/Messangers/Twiiter.svg";


export default function ButtonTwitter() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={twitter} />
        </MyButton>
    );
}