import logo from "../../assets/SVG/Logo/Logo.svg";
import user from "../../assets/SVG/Users/User.svg";
import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import MediaQuery from "react-responsive";
import { FormattedMessage } from "react-intl";
import { country, countryEn, year, zhanr, zhanrEn } from "./consts/HeaderConst";
import { useSelector } from "react-redux";
import useAuth from "../auth/hooks/useAuth";
import { getLang } from "../../store/switchLang";
import LanguageSwitcher from "../UI/LanguageSwitcher/LanguageSwitcher";
import HeaderWindow from "./components/HeaderWindow/HeaderWindow";
import WindowFilm from "./components/WindowFilm/WindowFilm";
import MyButton from "../UI/MyButton/MyButton";
import SearchWindow from "./components/SearchWindow/SearchWindow";
import UserHeader from "./components/UserHeader/UserHeader";

/** Component Header */

const Header = () => {
    const refHeader = React.useRef<HTMLDivElement>(null);
    const lang = useSelector(getLang());
    const auth  = useAuth()?.auth;

    return (
        <div ref={refHeader} className={styles.Layout__header} id="Header">
            <div className={styles.HeaderContainer}>
                <div>
                    <Link href="/">
                        <Image src={logo} alt="" />
                    </Link>
                </div>
                <MediaQuery minWidth={1230}>
                    <div className={styles.Header}>
                        <Link href="https://www.ivi.ru/" className={styles.Header__p}>
                            <FormattedMessage id="MyIvi" />
                        </Link>
                        <Link href="https://www.ivi.ru/new" className={styles.Header__p}>
                            <FormattedMessage id="WhatNew" />
                        </Link>
                        <HeaderWindow name={<FormattedMessage id="Films" />}>
                            <WindowFilm
                                zhanr={lang === "En" ? zhanrEn : zhanr}
                                zhanr2={lang === "En" ? zhanrEn : zhanr}
                                country={lang === "En" ? countryEn : country}
                                year={year}
                            />
                        </HeaderWindow>
                        <HeaderWindow name={<FormattedMessage id="Serials" />}>
                            <WindowFilm
                                zhanr={lang === "En" ? zhanrEn : zhanr}
                                zhanr2={lang === "En" ? zhanrEn : zhanr}
                                country={lang === "En" ? countryEn : country}
                                year={year}
                            />
                        </HeaderWindow>
                        <HeaderWindow name={<FormattedMessage id="Cartoons" />}>
                            <WindowFilm
                                zhanr={lang === "En" ? zhanrEn : zhanr}
                                zhanr2={lang === "En" ? zhanrEn : zhanr}
                                country={lang === "En" ? countryEn : country}
                                year={year}
                            />
                        </HeaderWindow>
                    </div>
                </MediaQuery>
            </div>
            <div className={styles.Header__button}>
                <MyButton>
                    <FormattedMessage id="PayForASubscription" />
                </MyButton>
                <MediaQuery minWidth={1230}>
                    <SearchWindow />
                </MediaQuery>
                <MediaQuery minWidth={750}>
                    <HeaderWindow
                        name={
                            <div className={styles.User}>
                                {auth?.token ? "U" : <Image src={user} alt="" />}
                            </div>
                        }
                    >
                        <UserHeader />
                    </HeaderWindow>
                </MediaQuery>
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default Header;
