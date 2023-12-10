import Link from "next/link";
import home from "../../assets/SVG/Home/Home.svg";
import tv from "../../assets/SVG/Tv/Tv.svg";
import search from "../../assets/SVG/Search/Search.svg";
import youtube from "../../assets/SVG/Youtube/Youtube.svg";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import styles from "./MobileNavBar.module.scss";
import SearchButtonWithModal from "../Header/components/SearchButtonWithModal/SearchButtonWithModal";
import MobileNavBarItemNew from "./MobileNavBarItemNew/MobileNavBarItemNew";

export default function MobileNavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <MobileNavBarItemNew
                        imgSrc={home}
                        intlId="MyIvi"
                    />
                </Link>

                <Link href="/movies">
                    <MobileNavBarItemNew
                        imgSrc={youtube}
                        intlId="Catalog"
                    />
                </Link>

                <SearchButtonWithModal>
                    <MobileNavBarItemNew
                        imgSrc={search}
                        intlId="Search" />
                </SearchButtonWithModal>

                <Link href="https://www.ivi.ru/tvplus">
                    <MobileNavBarItemNew
                        imgSrc={tv}
                        intlId="Tv+"
                    />
                </Link>

                <HamburgerMenu />

            </div>
        </div>
    );
};

