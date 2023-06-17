import { BsTelephone } from "react-icons/bs";
import MyButton from "../../../UI/MyButton/MyButton";

export default function ButtonCall() {
    return (
        <MyButton type="button" bg_color="footer" size="mini">
            <BsTelephone />
        </MyButton>
    );
}