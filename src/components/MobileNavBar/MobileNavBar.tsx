import Image from "next/image";
import Link from "next/link";
import { FormattedMessage } from "react-intl";
import home from "../../assets/SVG/Home/Home.svg";
import tv from "../../assets/SVG/Tv/Tv.svg";
import youtube from "../../assets/SVG/Youtube/Youtube.svg";
import NavigationWindow from "../Header/components/NavigationWindow/NavigationWindow";
import SearchWindow from "../Header/components/SearchWindow/SearchWindow";
import styles from "./MobileNavBar.module.scss";


export default function MobileNavBar(){
    return (
        <div className={styles.Container}>
            <div className={styles.Tab}>
                <Link href="/">
                    <div>
                        <Image src={home} alt="" />
                        <p>
                            <FormattedMessage id="MyIvi" />
                        </p>
                    </div>
                </Link>
                <Link href="/catalog">
                    <div>
                        <Image src={youtube} alt="" />
                        <p>
                            <FormattedMessage id="Catalog" />
                        </p>
                    </div>
                </Link>
                <div>
                    <SearchWindow />
                </div>
                <div>
                    <Image src={tv} alt="" />
                    <p>Tv+</p>
                </div>
                <div className={styles.Tab__last}>
                    <NavigationWindow />
                </div>
            </div>
        </div>
    );
};

