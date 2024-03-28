import Button from "../../UI/core/Button/Button";
import SearchButtonWithModal from "../HeaderContent/SearchButtonWithModal/SearchButtonWithModal";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import styles from "./MobileNavBar.module.scss";
import MobileNavBarItemNew from "./MobileNavBarItemNew/MobileNavBarItemNew";

export default function MobileNavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                
                <Button onlyImage as="link" href="/">
                    <MobileNavBarItemNew
                        variant="home"
                        intlId="MyIvi"
                    />
                    </Button>

                
                <Button onlyImage as="link" href="/movies">
                    <MobileNavBarItemNew
                        variant="tv"
                        intlId="Catalog"
                        />
                    </Button>
               

                <SearchButtonWithModal>
                <Button onlyImage>
                    <MobileNavBarItemNew
                        variant="search"
                            intlId="Search" />
                    </Button>
                </SearchButtonWithModal>

                
                    <Button onlyImage as="link" href="https://www.ivi.ru/tvplus">
                    <MobileNavBarItemNew
                        variant="tv"
                        intlId="Tv+"
                        />
                    </Button>
                <HamburgerMenu />
            </div>
        </div>
    );
};

