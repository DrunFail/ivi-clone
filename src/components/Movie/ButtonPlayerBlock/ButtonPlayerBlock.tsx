"use client";

import MemoizedFormattedMessage from "react-intl/src/components/message";
import ShareButtonWithModal from "../../Share/ShareButtonWithModal";
import FontIcon from "../../UI/FontIcon/FontIcon";
import Button from "../../UI/core/Button/Button";
import styles from "./ButtonPlayerBlock.module.scss";

interface ButtonPlayerBlockProps {
    moviePosterUrl: string;
    movieName: string;
    movieYear: number;
    variant: "desktop" | "tablet" | "mobile"
}
export default function ButtonPlayerBlock({ moviePosterUrl, movieName, movieYear, variant }: ButtonPlayerBlockProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses}>
            <Button as="button">
                <MemoizedFormattedMessage id="trailer" />
            </Button>
            <Button
                as="button"
                size="mini"
                aria-label="добавить в список смотреть позже"
            >
                <FontIcon variant="bookmark2" />
            </Button>
            <ShareButtonWithModal
                posterUrl={moviePosterUrl}
                nameRu={movieName}
                year={movieYear} />
        </div>
    
    );

}