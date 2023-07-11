import styles from "./GridAreaContainer.module.scss";

export default function GridAreaContainer({ children, area }: { children: React.ReactNode, area: "A" | "B" | "C" | "D" | "E" | "F" | "G" }) {
    return (
        <div className={styles[`area_${area}`] }>{children}</div>
    );
}