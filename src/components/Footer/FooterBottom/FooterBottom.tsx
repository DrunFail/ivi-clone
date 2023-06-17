import ButtonContainer from "../ButtonContainer/ButtonContainer";
import ButtonAppStoreDownload from "../UI/ButtonAppStoreDownload/ButtonAppStoreDownload";
import ButtonGoogleDownload from "../UI/ButtonGoogleDownload/ButtonGoogleDownload";
import ButtonTelegram from "../UI/ButtonTelegram/ButtonTelegram";
import ButtonTwitter from "../UI/ButtonTwitter/ButtonTwitter";
import ButtonVk from "../UI/ButtonVk/ButtonVk";
import styles from "./FooterBottom.module.scss";

export default function FooterBottom() {
    return (
        <div className={styles.container}>
            <ButtonContainer>
                <ButtonAppStoreDownload />
                <ButtonGoogleDownload />
            </ButtonContainer>

            <ButtonContainer>
                <ButtonVk />
                <ButtonTwitter />
                <ButtonTelegram />
            </ButtonContainer>

        </div>
    );
}