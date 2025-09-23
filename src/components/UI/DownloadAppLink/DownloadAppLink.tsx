import Image from "next/image";
import apple from "../../../assets/SVG/Apps/Apple.svg";
import google from "../../../assets/SVG/Apps/Google.svg";
import styles from "./DownloadAppLink.module.scss";
import Button from "../core/Button/Button";
import { useTranslations } from "next-intl";

const linkVariant = {
    apple: {
        href: "https://go.onelink.me/app/devicesiOS",
        image: apple,
        intlId: "DownloadIn",
        text: "App Store"
    },
    google: {
        href: "https://go.onelink.me/app/devicesAndroid",
        image: google,
        intlId: "AvailableIn",
        text: "Google Play"
    }
}

interface DownloadAppLinkProps {
    variant: keyof typeof linkVariant
}

export default function DownloadAppLink({ variant }: DownloadAppLinkProps) {
    const { href, image, intlId, text } = linkVariant[variant];
    const t = useTranslations();
    return (
        <Button as="link" href={href} className={styles.button}>
            <Image alt="" src={image} height={20} width={20} />
            <div>
                <p>
                    {t(intlId) }
                </p>
                <span>{text}</span>
            </div>
        </Button>
    );
}