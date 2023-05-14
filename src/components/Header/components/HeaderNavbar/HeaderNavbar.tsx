import Link from "next/link";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { getLang } from "../../../../store/switchLang";
import { country, countryEn, NAV_MENU, year, zhanr, zhanrEn } from "../../consts/HeaderConst";
import HeaderWindow from "../HeaderWindow/HeaderWindow";
import WindowFilm from "../WindowFilm/WindowFilm";
import styles from "./HeaderNavbar.module.scss";

interface HeaderNavbarProps {
    handler: (linkName: string) => void,
linkData: any[]
}

export default function HeaderNavbar({handler, linkData }: HeaderNavbarProps) {
    const lang = useSelector(getLang());
    return (
        <nav className={styles.navbar}>
            <ul>
                {linkData.map(menuItem => 
                    <li>
                        <Link href={menuItem.link} className={styles.Header__p} onMouseEnter={() => handler(menuItem.name) }>
                            <FormattedMessage id={`header.navbar.${menuItem.name}` }/>
                        </Link>
                    </li>
                )}
               
            
                {/*    */}{/*<HeaderWindow name={<FormattedMessage id="Films" />}>*/}
                {/*    */}{/*    <WindowFilm*/}
                {/*    */}{/*        zhanr={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        zhanr2={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        country={lang === "En" ? countryEn : country}*/}
                {/*    */}{/*        year={year}*/}
                {/*    */}{/*    />*/}

                {/*    */}{/*</HeaderWindow>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="https://www.ivi.ru/" className={styles.Header__p}>*/}
                {/*        <FormattedMessage id="MyIvi" />*/}
                {/*    </Link>*/}
                {/*    */}{/*<HeaderWindow name={<FormattedMessage id="Serials" />}>*/}
                {/*    */}{/*    <WindowFilm*/}
                {/*    */}{/*        zhanr={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        zhanr2={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        country={lang === "En" ? countryEn : country}*/}
                {/*    */}{/*        year={year}*/}
                {/*    */}{/*    />*/}
                {/*    */}{/*</HeaderWindow>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link href="https://www.ivi.ru/" className={styles.Header__p}>*/}
                {/*        <FormattedMessage id="MyIvi" />*/}
                {/*    </Link>*/}
                {/*    */}{/*<HeaderWindow name={<FormattedMessage id="Cartoons" />}>*/}
                {/*    */}{/*    <WindowFilm*/}
                {/*    */}{/*        zhanr={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        zhanr2={lang === "En" ? zhanrEn : zhanr}*/}
                {/*    */}{/*        country={lang === "En" ? countryEn : country}*/}
                {/*    */}{/*        year={year}*/}
                {/*    */}{/*    />*/}
                {/*    */}{/*</HeaderWindow>*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}