import styles from './OAuthButton.module.scss';
import Image from "next/image";
import vk from "../../../../assets/SVG/Messangers/VK.svg";
import google from "../../../../assets/SVG/Apps/Google.svg";
import { FormattedMessage } from "react-intl";
import Button from '../../../UI/core/Button/Button';

const OAUTH_VARIANT = {
    vk: {
        redirect: "https://oauth.vk.com/authorize?client_id=51619671&redirect_uri=http://localhost:3000/auth/login&scope=email&display=mobile",
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
    variant: keyof typeof OAUTH_VARIANT,
    authHandler?: () => void
}
export default function OAuthButton({ variant, authHandler }: OAuthButtonProps) {
    const { redirect, icon, intl } = OAUTH_VARIANT[variant]
    authHandler && authHandler();

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