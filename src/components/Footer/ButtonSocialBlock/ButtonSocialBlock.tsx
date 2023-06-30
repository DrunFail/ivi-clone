import ButtonTelegram from "../../UI/ButtonTelegram/ButtonTelegram";
import ButtonTwitter from "../../UI/ButtonTwitter/ButtonTwitter";
import ButtonVk from "../../UI/ButtonVk/ButtonVk";
import styles from "./ButtonSocialBlock.module.scss";

export default function ButtonSocialBlock() {
    return (
        <div className={styles.container}>
            <ButtonVk />
            <ButtonTwitter />
            <ButtonTelegram />
        </div>
    );
}