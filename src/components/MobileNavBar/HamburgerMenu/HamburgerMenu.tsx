import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ButtonBurgerMenu from "../../UI/ButtonBurgerMenu/ButtonBurgerMenu";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";

export default function HamburgerMenu() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();

    const toggleVisible = () => {
        setVisible(visible => !visible)
    }

    useEffect(() => {
        setVisible(false);
    }, [router.asPath]);

    return (
        <>
            <div
                onClick={toggleVisible}
            >
                {visible
                    ? <ButtonBurgerMenu variant="close" />
                    : <ButtonBurgerMenu variant="open" />
                }
            </div>
            <HamburgerMenuModal
                toggleVisible={toggleVisible}
                visible={visible} />
            
        </>
    );
};


