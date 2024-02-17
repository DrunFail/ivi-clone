import Image from "next/image";
import arrowRight from "../../../assets/SVG/arrow-right.svg";
import styles from "./SectionTitle.module.scss";
interface SectionTitleProps {
    children: React.ReactNode,
    withArrow?: boolean
}

export default function SectionTitle({ children, withArrow = false }: SectionTitleProps) {
    return (
        <h2 className={styles.text}>
            {children}
            {withArrow && <Image src={arrowRight} height={16} alt="" />}
        </h2>
    );
}