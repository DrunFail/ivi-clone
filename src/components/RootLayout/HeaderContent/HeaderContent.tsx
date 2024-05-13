import styles from "./HeaderContent.module.scss";
import HeaderPortalContainer from "./portal/HeaderPortalContainer";
import { LinkData, NavbarLink } from "../../../models/global";
import { NAV_MENU } from "../../../constants/headerConstants";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import ProfileIconWithDropdown from "./ProfileIconWithDropdown/ProfileIconWithDropdown";
import SizeConditionContainer from "../../SizeConditionContainer/SizeConditionContainer";
import dynamic from "next/dynamic";

const ButtonSubscription = dynamic(() => import('./ButtonSubscription/ButtonSubscription'));
const LanguageSwitcher = dynamic(() => import('../../UI/LanguageSwitcher/LanguageSwitcher'));
const SearchButtonWithModal = dynamic(() => import('./SearchButtonWithModal/SearchButtonWithModal'));
const SearchButtonDesktop = dynamic(() => import('./SearchButtonDesktop/SearchButtonDesktop'));
const SearchModal = dynamic(() => import('../../SearchModal/SearchModal'));

const NavbarWithDropdown = dynamic(() => import('./NavbarWithDropdown/NavbarWithDropdown'));

const ProfileDropdownWindow = dynamic(() => import('./ProfileIconWithDropdown/ProfileDropdownWindow/ProfileDropdownWindow'));





const focusLinkData = (navMenu: NavbarLink[], genresList: LinkData[] | undefined) => {
    if (genresList) {
        const nav = navMenu.map(navBlock => navBlock.name === "movies" ? { ...navBlock, data: { ...navBlock.data, genres: genresList } } : navBlock)

        return nav as NavbarLink[]


    }
    return navMenu

}



export default function HeaderContent() {

    /*const genres = useTransformGenres("second", genresList.genres);*/

   /* const newNav = focusLinkData(NAV_MENU, genres);*/


    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <HeaderLogo />
                <div className={styles.navbar}>
                    <SizeConditionContainer more={1160}>
                        <NavbarWithDropdown
                            navLinkData={NAV_MENU}
                        />
                    </SizeConditionContainer>


                </div>
                <SizeConditionContainer more={1160}>
                    <ButtonSubscription />
                    <SearchButtonWithModal
                        button={<SearchButtonDesktop />}
                        modal={<SearchModal /> }
                    />
                        <LanguageSwitcher />
                </SizeConditionContainer>


                <ProfileIconWithDropdown
                    dropdownContent={<ProfileDropdownWindow />}
                />
                
            </div>
            <HeaderPortalContainer />
        </div>
    );
};