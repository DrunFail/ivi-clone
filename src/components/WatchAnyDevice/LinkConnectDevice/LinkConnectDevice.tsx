import Link from "next/link";
import { FormattedMessage } from "react-intl";
import styles from "./LinkConnectDevice.module.scss";

export default function LinkConnectDevice() {
    return (
        <Link href="https://www.ivi.ru/devices" className={styles.link }>
                <FormattedMessage id="ConnectDevice" />
        </Link>
    );
}