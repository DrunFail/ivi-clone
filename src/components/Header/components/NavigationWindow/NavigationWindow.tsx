import Image from "next/image";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import close from "../../../../assets/SVG/Close/Close.svg";
import diamond from "../../../../assets/SVG/Diamond/Diamond.svg";
import more from "../../../../assets/SVG/More/More.svg";
import reward from "../../../../assets/SVG/Reward/Reward.svg";
import user from "../../../../assets/SVG/Users/User.svg";
import { getGenresList } from "../../../../store/genres";
import { getLang } from "../../../../store/switchLang";
import Toggle from "../../../Toggle/Toggle";
import Modal from "../../../UI/Modal/Modal";
import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./NavigationWindow.module.scss";

/** Компонент модального окна поиска в Header */
const NavigationWindow = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const genres = useSelector(getGenresList());
    const lang = useSelector(getLang());

    return (
        <div className={styles.NavigationWindow}>
            <div
                className={styles.NavigationWindow__div}
                onClick={() => setVisible((p) => !p)}
            >
                {visible ? (
                    <>
                        <Image src={close} alt="" />
                        <p>
                            <FormattedMessage id="Close" />
                        </p>
                    </>
                ) : (
                    <>
                        <Image src={more} alt="" />
                        <p>
                            <FormattedMessage id="More" />
                        </p>
                    </>
                )}
            </div>
            <Modal callback={() => setVisible((p) => !p)} visible={visible}>
                <div className={styles.NavigationWindow__modal}>
                    <MyButton type="footer" size="large">
                        <Image src={diamond} alt="" />
                        <p>
                            <FormattedMessage id="ConnectSubscription" />
                        </p>
                    </MyButton>
                    <MyButton type="footer" size="large">
                        <Image src={reward} alt="" />
                        <p>
                            <FormattedMessage id="CertificateActivation" />
                        </p>
                    </MyButton>
                    <MyButton type="footer" size="large">
                        <div className={styles.NavigationWindow__tabs}>
                            <Image src={user} alt="" />
                            <p>
                                <FormattedMessage id="Profile" />
                            </p>
                        </div>
                    </MyButton>
                    <MyButton type="footer" size="large">
                        <Toggle
                            nameBtn={
                                <p className={styles.NavigationWindow__tabs}>
                                    <FormattedMessage id="Films" />
                                </p>
                            }
                        >
                            <div>
                                {genres
                                    .slice(0, 10)
                                    .map(
                                        ({ id, genreNameEng, genreNameRu }) => (
                                            <div key={id}>
                                                {lang === "En" && genreNameEng
                                                    ? genreNameEng
                                                    : genreNameRu}
                                            </div>
                                        )
                                    )}
                            </div>
                        </Toggle>
                    </MyButton>
                </div>
            </Modal>
        </div>
    );
};

export default NavigationWindow;
