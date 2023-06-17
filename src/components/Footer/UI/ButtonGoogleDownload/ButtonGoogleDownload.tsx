import MyButton from "../../../UI/MyButton/MyButton";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import google from "../../../../assets/SVG/Apps/Google.svg";

export default function ButtonGoogleDownload() {
    return (
        <MyButton type="button" size="large" bg_color="footer">
            <Image alt="" src={google} />
            <div>
                <p>
                    <FormattedMessage id="AvailableIn" />
                </p>
                <span>Google Play</span>
            </div>
        </MyButton>
    );
}