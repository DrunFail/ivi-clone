import Image from "next/image";
import bookmark from "../../../assets/SVG/Bookmark/Bookmark.svg";
import Button from "../Button/Button";

export default function ButtonWatchLater() {
    return (
        <Button size="mini">
            <Image src={bookmark} alt="" />
        </Button>
    );
}