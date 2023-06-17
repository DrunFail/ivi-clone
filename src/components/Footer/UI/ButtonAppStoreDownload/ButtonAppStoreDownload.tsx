import MyButton from "../../../UI/MyButton/MyButton";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import apple from "../../../../assets/SVG/Apps/Apple.svg";

export default function ButtonAppStoreDownload() {
    return (
        <MyButton type="button" size="large" bg_color="footer">
            <Image alt="" src={apple} />
            <div>
                <p>
                    <FormattedMessage id="DownloadIn" />
                </p>
                <span>App Store</span>
            </div>
        </MyButton>
    );
}