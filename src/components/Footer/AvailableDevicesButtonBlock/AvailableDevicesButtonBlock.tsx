import styles from "./AvailableDevicesButtonBlock.module.scss";
import ButtonAppStoreDownload from "../../UI/ButtonAppStoreDownload/ButtonAppStoreDownload";
import ButtonGoogleDownload from "../../UI/ButtonGoogleDownload/ButtonGoogleDownload";
import ButtonWatchAllDevices from "../../UI/ButtonWatchAllDevices/ButtonWatchAllDevices";
import ButtonWatchSmartTv from "../../UI/ButtonWatchSmartTv/ButtonWatchSmartTv";
export default function AvailableDevicesButtonBlock({ variant }: { variant: "desktop" | "tablet" }) {
    return (
        <div className={styles.container}>
            {variant === "desktop" &&
                <>
                    <ButtonAppStoreDownload />
                <ButtonGoogleDownload />
                <ButtonWatchAllDevices />
                <ButtonWatchSmartTv />

                </>
            }
            {variant === "tablet" &&
                <>
                    <ButtonWatchAllDevices />
                    <ButtonWatchSmartTv />
                </>
            }
        </div>
    );
}