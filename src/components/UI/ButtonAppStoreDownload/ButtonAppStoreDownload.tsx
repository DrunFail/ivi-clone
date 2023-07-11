import Image from "next/image";
import { FormattedMessage } from "react-intl";
import apple from "../../../assets/SVG/Apps/Apple.svg";
import MyButton from "../MyButton/MyButton";
import styles from "./ButtonAppStoreDownload.module.scss";

export default function ButtonAppStoreDownload() {
    return (
        <MyButton type="button" size="large" bg_color="footer" className={styles.button }>
            <Image alt="" src={apple} height={20 } width={ 20} />
            <div>
                <p>
                    <FormattedMessage id="DownloadIn" />
                </p>
                <span>App Store</span>
            </div>
        </MyButton>
    );
}