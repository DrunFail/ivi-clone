import Image from "next/image";
import bookmark from "../../../assets/SVG/Bookmark/Bookmark.svg";
import MyButton from "../MyButton/MyButton";

export default function ButtonWatchLater() {
    return (
        <MyButton type="button" bg_color="footer" size="mini">
            <Image src={bookmark} alt="" />
        </MyButton>
    );
}