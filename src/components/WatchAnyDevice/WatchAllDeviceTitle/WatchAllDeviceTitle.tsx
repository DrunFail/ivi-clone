import { FormattedMessage } from "react-intl";
import styles from "./WatchAllDeviceTitle.module.scss";

export default function WatchAllDeviceTitle({ movieName }: {movieName:string}) {
    return (
        <h1 className={styles.title }>
            <FormattedMessage
                id="WatchOnAllDevices"
                values={{ value: movieName }}
            />
        </h1>
    );
}