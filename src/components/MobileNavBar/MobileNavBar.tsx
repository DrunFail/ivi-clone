import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FormattedMessage } from "react-intl";
import home from "../../assets/SVG/Home/Home.svg";
import tv from "../../assets/SVG/Tv/Tv.svg";
import youtube from "../../assets/SVG/Youtube/Youtube.svg";
import SearchWithModal from "../Header/components/search/SearchWithModal/SearchWithModal";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import styles from "./MobileNavBar.module.scss";
import MobileNavbarItem from "./MobileNavBarItem/MobileNavbarItem";


export default function MobileNavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <MobileNavbarItem>
                        <Image src={home} alt="" />
                        <p>
                            <FormattedMessage id="MyIvi" />
                        </p>
                    </MobileNavbarItem>
                </Link>
                <Link href="/catalog">
                    <MobileNavbarItem>
                        <Image src={youtube} alt="" />
                        <p>
                            <FormattedMessage id="Catalog" />
                        </p>
                    </MobileNavbarItem>
                </Link>
                <SearchWithModal custom>
                    <MobileNavbarItem>
                        <BsSearch />
                        <p>
                            {" "}
                            <FormattedMessage id="Search" />
                        </p>
                    </MobileNavbarItem>
                </SearchWithModal>
                <MobileNavbarItem>
                    <Image src={tv} alt="" />
                    <p>Tv+</p>
                </MobileNavbarItem>

                <HamburgerMenu />

            </div>
        </div>
    );
};

