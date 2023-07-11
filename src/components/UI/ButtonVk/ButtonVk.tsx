import Image from "next/image";
import vk from "../../../assets/SVG/Messangers/VK.svg";
import MyButton from "../MyButton/MyButton";
export default function ButtonVk() {
    return (
        <MyButton type="button" bg_color="footer" figure="circle">
            <Image alt="" src={vk} height={15} width={15 } />
        </MyButton>
    );
}