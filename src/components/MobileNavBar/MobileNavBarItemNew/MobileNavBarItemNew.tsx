import { FormattedMessage } from "react-intl";
import styles from "./MobileNavBarItemNew.module.scss";
import Image from "next/image";

interface MobileNavBarItemNewProps {
    intlId: string;
    imgSrc: string;
}
export default function MobileNavBarItemNew({ intlId, imgSrc }:MobileNavBarItemNewProps) {
    return (
        <div className={styles.container} data-testid="mobile-nav-link">
            <Image src={imgSrc} alt="" width={20} height={20 } />
            <p className={styles.text}>
                <FormattedMessage id={intlId} />
            </p>
        </div>
    
    );
}