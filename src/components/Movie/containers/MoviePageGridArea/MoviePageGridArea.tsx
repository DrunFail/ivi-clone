import styles from "./MoviePageGridArea.module.scss";

interface MoviePageGridAreaProps {
    area: "info" | "player" | "buttons" | "description" | "person" | "rating",
    children: React.ReactNode
}

export default function MoviePageGridArea({area, children }:MoviePageGridAreaProps) {
    return (
        <div className={`${styles[area]}`}>{children}</div>
    );
}