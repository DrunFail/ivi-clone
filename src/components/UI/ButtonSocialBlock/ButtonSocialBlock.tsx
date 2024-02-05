import SocialButton from "../SocialButton/SocialButton";
import styles from "./ButtonSocialBlock.module.scss";

export default function ButtonSocialBlock() {
    return (
        <div className={styles.container} data-testid="btn-social-block">
            <SocialButton variant="vk" />
            <SocialButton variant="twitter" />
            <SocialButton variant="telegram" />
        </div>
    );
}