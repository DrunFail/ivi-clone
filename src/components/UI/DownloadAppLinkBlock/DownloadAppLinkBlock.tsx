import styles from "./DownloadAppLinkBlock.module.scss";
import DownloadAppLink from "../DownloadAppLink/DownloadAppLink";


interface DownloadAppLinkBlockProps {
    variant: "desktop" | "tablet"
}

export default function DownloadAppLinkBlock({ variant }: DownloadAppLinkBlockProps) {
    return (
        <div className={`${styles.container} ${styles[variant]}`} data-testid="dwnld-app-links">
            {variant === "desktop" &&
                <>
                <DownloadAppLink variant="apple" />
                <DownloadAppLink variant="google" />
                <DownloadAppLink variant="apple" />
                <DownloadAppLink variant="apple" />
                    
                </>
            }
            {variant === "tablet" &&
                <>
                <DownloadAppLink variant="apple" />
                <DownloadAppLink variant="apple" />
                </>
            }
        </div>
    );
}