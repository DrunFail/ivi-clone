import VideoMovieInfoCard from "../VideoMovieInfoCard/VideoMovieInfoCard";
import styles from "./VideoMovieInfo.module.scss";

const DEFAULT_VIDEO_PROP = ["fullHD", "HD", "1080", "720"];

interface VideoMovieInfoProps {
    variant: "desktop" | "tablet"
}
export default function VideoMovieInfo({ variant }: VideoMovieInfoProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses}>
            {variant === "desktop" && <p>Изображение и звук.<span>Фактическое качество зависит от устройства и ограничений правообладателя.</span> </p>}
            {variant === "tablet" && <p>Качество</p>}
            <div className={styles.icons }>
                {DEFAULT_VIDEO_PROP.map((elem, idx) =>
                    <VideoMovieInfoCard key={idx}>
                        {elem}
                    </VideoMovieInfoCard>)}
            </div>
        </div>
    );
}