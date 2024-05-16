import styles from "./HeaderContent.module.scss";
import HeaderPortalContainer from "./portal/HeaderPortalContainer";
import {NavbarLink } from "../../../models/global";
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

export default function HeaderContent({ navList }: {navList:NavbarLink[]}) {
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <HeaderLogo />
                <div className={styles.navbar}>
                    <SizeConditionContainer more={1160}>
                        <NavbarWithDropdown
                            navLinkData={navList}
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