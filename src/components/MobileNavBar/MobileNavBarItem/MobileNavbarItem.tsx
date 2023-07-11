import Image from "next/image";
import { FormattedMessage } from "react-intl";
import styles from "./MobileNavbarItem.module.scss";

interface MobileNavbarItemProps {
    
    children: React.ReactNode
    
}
export default function MobileNavbarItem({children }:MobileNavbarItemProps) {
    return (
        <div className={styles.container }>
                {children}
        </div>
    );
}