import VideoMovieInfoCard from "../VideoMovieInfoCard/VideoMovieInfoCard";
import styles from "./VideoMovieInfo.module.scss";

const DEFAULT_VIDEO_PROP = ["fullHD", "HD", "1080", "720"]
export default function VideoMovieInfo() {
    return (
        <div className={styles.container }>
            <p>Изображение и звук.<span>Фактическое качество зависит от устройства и ограничений правообладателя.</span> </p>
            <div className={styles.icons }>
                {DEFAULT_VIDEO_PROP.map((elem, idx) => <VideoMovieInfoCard key={idx} children={elem} />)}
            </div>
        </div>
    );
}