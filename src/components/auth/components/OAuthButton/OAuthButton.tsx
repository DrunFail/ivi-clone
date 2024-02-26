import styles from './OAuthButton.module.scss';
import Button from "../../../UI/Button/Button";
import Image from "next/image";
import vk from "../../../../assets/SVG/Messangers/VK.svg";
import google from "../../../../assets/SVG/Apps/Google.svg";
import { FormattedMessage } from "react-intl";

const OAUTH_VARIANT = {
    vk: {
        redirect: "https://oauth.vk.com/authorize?client_id=51619671&redirect_uri=http://localhost:3000&scope=12&display=mobile",
        icon: vk,
        intl: "auth.vk"
    },
    google: {
        redirect: "",
        icon: google,
        intl: "auth.google"
    }
}

interface OAuthButtonProps {
    variant: keyof typeof OAUTH_VARIANT
}
export default function OAuthButton({ variant }: OAuthButtonProps) {
    const { redirect, icon, intl } = OAUTH_VARIANT[variant]


    return (
        <Button
            as="link"
            href={redirect}
            className={`${styles.button} ${styles[variant]}`}
        >
            <Image src={icon} alt="" height={20} width={20} />
            <FormattedMessage id={intl} />
        </Button>

    );
}