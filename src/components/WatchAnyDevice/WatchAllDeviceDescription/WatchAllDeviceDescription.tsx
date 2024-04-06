import styles from "./WatchAllDeviceDescription.module.scss";
export default function WatchAllDeviceDescription() {
    return (
        <p className={styles.text}>
            Приложение доступно для скачивания на iOS, Android, SmartTV
            и приставках
        </p>
    );
}