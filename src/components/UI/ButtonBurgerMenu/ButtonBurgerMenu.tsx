import close from "../../../assets/SVG/Close/Close.svg";
import open from "../../../assets/SVG/More/More.svg";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import styles from "./ButtonBurgerMenu.module.scss";
import MobileNavbarItem from "../../MobileNavBar/MobileNavBarItem/MobileNavbarItem";

interface ButtonBurgerMenuProps {
    variant: "open" | "close"
}

export default function ButtonBurgerMenu({ variant }: ButtonBurgerMenuProps) {
    return (
        <button className={styles.button}>
            <MobileNavbarItem>
                {variant === "close" &&
                    <>
                        <Image src={close} alt="" />
                        <p>
                            <FormattedMessage id="Close" />
                        </p>
                    </>
                }
                {variant === "open" &&
                    <>
                        <Image src={open} alt="" />
                        <p>
                            <FormattedMessage id="More" />
                        </p>
                    </>}
            </MobileNavbarItem>
            

        </button>
    );
}