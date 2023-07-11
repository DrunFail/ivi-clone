import Image from "next/image";
import { FormattedMessage } from "react-intl";
import google from "../../../assets/SVG/Apps/Google.svg";
import MyButton from "../MyButton/MyButton";
import styles from "./ButtonGoogleDownload.module.scss";

export default function ButtonGoogleDownload() {
    return (
        <MyButton type="button" size="large" bg_color="footer" className={styles.button }>
            <Image alt="" src={google} height={20} width={20} />
            <div>
                <p>
                    <FormattedMessage id="AvailableIn" />
                </p>
                <span>Google Play</span>
            </div>
        </MyButton>
    );
}