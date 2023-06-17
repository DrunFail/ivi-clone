import { BsEnvelope } from "react-icons/bs";
import MyButton from "../../../UI/MyButton/MyButton";

export default function ButtonMail() {
    return (
        <MyButton type="button" bg_color="footer" size="mini">
            <BsEnvelope />
        </MyButton>
    );
}