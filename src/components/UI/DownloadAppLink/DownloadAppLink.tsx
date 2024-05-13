"use client";

import { FormattedMessage } from "react-intl";
import Image from "next/image";
import apple from "../../../assets/SVG/Apps/Apple.svg";
import google from "../../../assets/SVG/Apps/Google.svg";
import styles from "./DownloadAppLink.module.scss";
import Button from "../core/Button/Button";

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
    return (
        <Button as="link" href={href} className={styles.button}>
            <Image alt="" src={image} height={20} width={20} />
            <div>
                <p>
                    <FormattedMessage id={intlId} />
                </p>
                <span>{text}</span>
            </div>
        </Button>
    );
}