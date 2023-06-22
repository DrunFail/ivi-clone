import Image from "next/image";
import styles from "./WatchAllDeviceImage.module.scss";
import poster from "../../../assets/PNG/Poster.png";
import tablet from "../../../assets/PNG/Tablet.png";

interface WatchAllDeviceImageProps {
    moviePosterUrl: string
}
export default function WatchAllDeviceImage({moviePosterUrl }:WatchAllDeviceImageProps) {
    return (
        <div className={styles.container}>
            <Image alt="" src={poster} className={styles.img_container} />
            <Image
                alt=""
                className={styles.desktop}
                src={moviePosterUrl}
                width={337}
                height={192}
            />
            <Image
                alt=""
                className={styles.tablet}
                src={tablet}
                width={337}
                height={192}
            />
            <Image
                alt=""
                className={styles.phone}
                src={moviePosterUrl}
                width={188}
                height={102}
            />
        </div>
    );
}