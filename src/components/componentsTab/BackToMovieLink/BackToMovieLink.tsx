import Link from "next/link";
import FontIcon from "../../UI/FontIcon/FontIcon";
import styles from "./BackToMovieLink.module.scss";

interface BackToMovieLinkProps {
    backLink: string,
    textLink: string
}
export default function BackToMovieLink({backLink,textLink }:BackToMovieLinkProps) {
    return (
        <Link href={backLink} className={styles.link}>
            <FontIcon variant="arrowLeft" size={20} />
            <span>{textLink}</span>
        </Link>
    );
}