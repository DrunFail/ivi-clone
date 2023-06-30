import MyButton from "../MyButton/MyButton";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import diamond from "../../../assets/SVG/Diamond/Diamond.svg";


export default function ButtonSubscription() {
    return (
        <MyButton type="button" bg_color="footer" size="large">
            <Image src={diamond} alt="" />
            <p>
                <FormattedMessage id="ConnectSubscription" />
            </p>
        </MyButton>
    );
}