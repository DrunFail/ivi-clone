import styles from "./DownloadAppLinkBlock.module.scss";
import DownloadAppLink from "../DownloadAppLink/DownloadAppLink";

export default function DownloadAppLinkBlock({ children }: {children:React.ReactNode}) {
    return (
        <div className={styles.container} data-testid="dwnld-app-links">
            {children }
        </div>
    );
}