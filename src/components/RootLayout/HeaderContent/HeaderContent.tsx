import styles from "./HeaderContent.module.scss";
import HeaderPortalContainer from "./portal/HeaderPortalContainer";
import LanguageSwitcher from "../../UI/LanguageSwitcher/LanguageSwitcher";
import { useResize } from "../../../hooks/useResize";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHook";
import { fetchGenres, selectAllGenres } from "../../../store/slices/genresSlice";
import { useEffect } from "react";
import useTransformGenres from "../../../hooks/useTransformGenres";
import { LinkData, NavbarLink } from "../../../models/global";
import { NAV_MENU } from "../../../constants/headerConstants";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import NavbarWithDropdown from "./NavbarWithDropdown/NavbarWithDropdown";
import ButtonSubscription from "./ButtonSubscription/ButtonSubscription";
import SearchButtonWithModal from "./SearchButtonWithModal/SearchButtonWithModal";
import SearchButtonDesktop from "./SearchButtonDesktop/SearchButtonDesktop";
import ProfileIconWithDropdown from "./ProfileIconWithDropdown/ProfileIconWithDropdown";

const focusLinkData = (navMenu: NavbarLink[], genresList: LinkData[] | undefined) => {
    if (genresList) {
        const nav = navMenu.map(navBlock => navBlock.name === "movies" ? { ...navBlock, data: { ...navBlock.data, genres: genresList } } : navBlock)

        return nav as NavbarLink[]


    }
    return navMenu

}



export default function HeaderContent() {
    const size = useResize();
    const dispatch = useAppDispatch();
    const genresList = useAppSelector(selectAllGenres);

    useEffect(() => {
        if (genresList.status === "idle") {
            dispatch(fetchGenres())
        }
    }, [])
        
        
        
    
    const genres = useTransformGenres("second", genresList.genres);

    const newNav = focusLinkData(NAV_MENU, genres);


    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <HeaderLogo />
                <div className={styles.navbar}>
                    {size > 1160 &&
                        <NavbarWithDropdown
                            navLinkData={newNav}
                        />}
                </div>
                {size > 1160 &&
                    <>
                        <ButtonSubscription />
                        <SearchButtonWithModal>
                            <SearchButtonDesktop />
                        </SearchButtonWithModal>
                        <LanguageSwitcher />
                    </>
                }
                <ProfileIconWithDropdown
                />
            </div>
            <HeaderPortalContainer />
        </div>
    );
};