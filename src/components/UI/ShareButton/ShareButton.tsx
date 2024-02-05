import Image from "next/image";
import download from "../../../assets/SVG/Download/Download.svg";
import Button from "../Button/Button";

interface ShareButtonProps {
    clickHandler?: () => void
}
export default function ShareButton({clickHandler}: ShareButtonProps) {
    return (
        <Button size="mini" onClick={clickHandler}>
            <Image src={download} alt="" />
        </Button>
    );
}