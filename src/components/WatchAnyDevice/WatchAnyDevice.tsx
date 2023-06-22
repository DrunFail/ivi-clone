import styles from "./WatchAnyDevice.module.scss";
import WatchAllDeviceImage from "./WatchAllDeviceImage/WatchAllDeviceImage";
import WatchAllDeviceTitle from "./WatchAllDeviceTitle/WatchAllDeviceTitle";
import WatchAllDeviceDescription from "./WatchAllDeviceDescription/WatchAllDeviceDescription";
import LinkConnectDevice from "./LinkConnectDevice/LinkConnectDevice";

interface WatchAnyDeviceProps {
    movieName: string,
    moviePosterUrl: string
}
export default function WatchAnyDevice({movieName, moviePosterUrl }:WatchAnyDeviceProps) {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
               
                <WatchAllDeviceTitle movieName={movieName} />
                
                <WatchAllDeviceDescription />
                
                <LinkConnectDevice />
            </div>
            <div className={styles.img }>
                <WatchAllDeviceImage moviePosterUrl={moviePosterUrl} />
            </div>
        </div>
    );
};


