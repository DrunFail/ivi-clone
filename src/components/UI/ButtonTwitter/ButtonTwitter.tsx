import Image from "next/image";
import twitter from "../../../assets/SVG/Messangers/Twiiter.svg";
import MyButton from "../MyButton/MyButton";


export default function ButtonTwitter() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={twitter} height={15} width={15 } />
        </MyButton>
    );
}