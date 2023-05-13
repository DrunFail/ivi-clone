import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import MyButton from "../../common/MyButton/MyButton";
import Image from "next/image";
import download from "../../../assets/SVG/Download/Download.svg";
import styles from "./Share.module.scss";
import { useSelector } from "react-redux";
import { getFilm } from "../../../store/film";
import { FormattedMessage } from "react-intl";
import { getLang } from "../../../store/switchLang";

const copy = () => {
    const url = window.location.href;
    let copyText = document.getElementById("idName");
    if (!copyText) {
        const div: HTMLInputElement = document.createElement("input");
        div.value = url;
        div.setAttribute("id", "idName");
        document.body.append(div);
        console.log(copyText);
        div.style.opacity = "0";
    }
    copyText = document.getElementById("idName");
    copyText?.select();
    document.execCommand("copy");
};

const Share = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const film = useSelector(getFilm());
    const lang = useSelector(getLang());
    return (
        <>
            <MyButton
                onClick={() => setVisible(true)}
                type="footer"
                size="mini"
            >
                <Image src={download} alt="" />
            </MyButton>
            <Modal visible={visible} callback={() => setVisible(false)}>
                <div className={styles.Share}>
                    <div className={styles.Share__info}>
                        <Image
                            src={film?.currentFilm?.posterUrl || ""}
                            alt=""
                            width={43}
                            height={66}
                        />
                        <div>
                            <h2>
                                {lang === "Ru" || film?.currentFilm?.nameOriginal == null
                                    ? film?.currentFilm?.nameRu
                                    : film?.currentFilm?.nameOriginal}
                            </h2>
                            <p>{film?.currentFilm?.year} • 1 ч. 46 мин.</p>
                        </div>
                    </div>
                    <div className={styles.Share__button}>
                        <MyButton
                            onClick={() => {
                                copy();
                                setVisible(false);
                            }}
                            type="footer"
                            size="large"
                        >
                            <FormattedMessage id="CopyLink" />
                        </MyButton>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Share;
