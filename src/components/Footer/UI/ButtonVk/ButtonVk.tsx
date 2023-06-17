import MyButton from "../../../UI/MyButton/MyButton";
import Image from "next/image";
import vk from "../../../../assets/SVG/Messangers/VK.svg";
export default function ButtonVk() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={vk} />
        </MyButton>
    );
}