import Image from "next/image";
import download from "../../../assets/SVG/Download/Download.svg";
import MyButton from "../MyButton/MyButton";

interface ShareButtonProps {
    handler?: () => void
}
export default function ShareButton({handler}: ShareButtonProps) {
    return (
        <MyButton
            onClick={handler}
            type="button"
            bg_color="footer"
            size="mini"
        >
            <Image src={download} alt="" />
        </MyButton>
    );
}