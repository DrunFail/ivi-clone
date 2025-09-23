import Image from "next/image";
import Button from "../UI/core/Button/Button";
import styles from "./PromoSection.module.scss";
import { useTranslations } from "next-intl";

export default function PromoSection() {
    const t = useTranslations("promo");
    return (
        <div className={styles.container}>
            <Button>
                <Image
                    src="/lightning.svg"
                    width={24}
                    height={32}
                    alt=''
                    aria-hidden
                />
                {t("purchase")}
            </Button>

            <Button>
                <Image
                    src="/gift.svg"
                    width={56}
                    height={32}
                    alt=''
                    aria-hidden
                />
                {t("activate")}
            </Button>

        </div>
    );
}
