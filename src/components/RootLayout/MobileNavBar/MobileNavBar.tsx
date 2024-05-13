import { useTranslations } from "next-intl";
import Button from "../../UI/core/Button/Button";
import SearchButtonWithModal from "../HeaderContent/SearchButtonWithModal/SearchButtonWithModal";
import styles from "./MobileNavBar.module.scss";
import MobileNavBarItemNew from "./MobileNavBarItemNew/MobileNavBarItemNew";
import SearchModal from "../../SearchModal/SearchModal";
import HamburgerMenuButtonWithModal from "./HamburgerMenuButtonWithModal/HamburgerMenuButtonWithModal";
import HamburgerMenuModal from "./HamburgerMenuModal/HamburgerMenuModal";

export default function MobileNavBar() {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <div className={styles.content}>

                <Button onlyImage as="link" href="/">
                    <MobileNavBarItemNew
                        variant="home"
                    >
                        {t("MyIvi")}
                    </MobileNavBarItemNew>
                </Button>


                <Button onlyImage as="link" href="/movies">
                    <MobileNavBarItemNew
                        variant="tv"
                    >
                        {t("Catalog")}
                    </MobileNavBarItemNew>

                </Button>


                <SearchButtonWithModal
                    button={
                        <Button onlyImage>
                            <MobileNavBarItemNew
                                variant="search"

                            >
                                {t("Search")}
                            </MobileNavBarItemNew>
                        </Button>
                    }
                    modal={<SearchModal /> }
                />




                <Button onlyImage as="link" href="https://www.ivi.ru/tvplus">
                    <MobileNavBarItemNew
                        variant="tv"
                    >
                        {t("Tv+")}

                    </MobileNavBarItemNew>

                </Button>
                <HamburgerMenuButtonWithModal
                    modal={<HamburgerMenuModal />}
                    closeBtn={
                        <MobileNavBarItemNew
                            variant={"close"}
                        >
                            {t("Close")}
                        </MobileNavBarItemNew>
                    }
                    openBtn={
                        <MobileNavBarItemNew
                            variant={"dots"}
                        >
                            {t("More")}
                        </MobileNavBarItemNew>
                    }
                />
            </div>
        </div>
    );
};

