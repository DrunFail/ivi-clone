import styles from "./DownloadAppLinkBlock.module.scss";
import ButtonAppStoreDownload from "../../UI/ButtonAppStoreDownload/ButtonAppStoreDownload";
import ButtonGoogleDownload from "../../UI/ButtonGoogleDownload/ButtonGoogleDownload";
import ButtonWatchAllDevices from "../../UI/ButtonWatchAllDevices/ButtonWatchAllDevices";
import ButtonWatchSmartTv from "../../UI/ButtonWatchSmartTv/ButtonWatchSmartTv";


interface DownloadAppLinkBlockProps {
    variant: "desktop" | "tablet"
}

export default function DownloadAppLinkBlock({ variant }: DownloadAppLinkBlockProps) {
    return (
        <div className={styles.container} data-testid="dwnld-app-links">
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