import { useSelector } from "react-redux";
import styles from "./WatchAnyDevice.module.scss";
import React from "react";
import poster from "../../assets/PNG/Poster.png";
import tablet from "../../assets/PNG/Tablet.png";
import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { getLang } from "../../store/switchLang";
import { getFilm } from "../../store/film";
import MyButton from "../UI/MyButton/MyButton";

const WatchAnyDevice = () => {
    const film = useSelector(getFilm());
    const lang = useSelector(getLang());
    console.log(film)

    return (
        <div className={styles.WatchAnyDevice}>
            <div className={styles.WatchAnyDevice__text}>
                <h1>
                    <FormattedMessage
                        id="WatchOnAllDevices"
                        values={{
                            value:
                                lang === "En" && film?.currentFilm.nameOriginal
                                    ? film?.currentFilm.nameOriginal
                                    : film?.nameRu
                        }}
                    />
                </h1>
                <p>
                    Приложение доступно для скачивания на iOS, Android, SmartTV
                    и приставках
                </p>
                <Link href="https://www.ivi.ru/devices">
                    <MyButton type="pink" size="large">
                        <FormattedMessage id="ConnectDevice" />
                    </MyButton>
                </Link>
            </div>
            <div className={styles.WatchAnyDevice__img}>
                <Image alt="" src={poster} className={styles.Container} />
                <Image
                    alt=""
                    className={styles.Big}
                    src={film?.currentFilm?.posterUrl || ""}
                    width={337}
                    height={192}
                />
                <Image
                    alt=""
                    className={styles.Tablet}
                    src={tablet}
                    width={337}
                    height={192}
                />
                <Image
                    alt=""
                    className={styles.Mini}
                    src={film?.currentFilm?.posterUrl || ""}
                    width={188}
                    height={102}
                />
            </div>
        </div>
    );
};

export default WatchAnyDevice;
