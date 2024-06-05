import styles from "./HeaderContent.module.scss";
import HeaderPortalContainer from "./portal/HeaderPortalContainer";
import { NavbarLink } from "../../../models/global";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import ProfileIconWithDropdown from "./ProfileIconWithDropdown/ProfileIconWithDropdown";
import SizeConditionContainer from "../../SizeConditionContainer/SizeConditionContainer";
import dynamic from "next/dynamic";
import CheckIsAuthUser from "../CheckIsAuthUser/CheckIsAuthUser";
import Button from "../../UI/core/Button/Button";
import FontIcon from "../../UI/FontIcon/FontIcon";
import SetCookierForRedirectAfterLogin from "../SetCookierForRedirectAfterLogin/SetCookierForRedirectAfterLogin";
import ButtonSubscription from "./ButtonSubscription/ButtonSubscription";
import SearchButtonDesktop from "./SearchButtonDesktop/SearchButtonDesktop";


const LanguageSwitcher = dynamic(() => import('../../UI/LanguageSwitcher/LanguageSwitcher'));
const SearchButtonWithModal = dynamic(() => import('./SearchButtonWithModal/SearchButtonWithModal'));
const SearchModal = dynamic(() => import('../../SearchModal/SearchModal'));

const NavbarWithDropdown = dynamic(() => import('./NavbarWithDropdown/NavbarWithDropdown'));

const ProfileDropdownWindow = dynamic(() => import('./ProfileIconWithDropdown/ProfileDropdownWindow/ProfileDropdownWindow'));

export default function HeaderContent({ navList, userProfileData }: { navList: NavbarLink[], userProfileData: any }) {
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
                        modal={<SearchModal />}
                    />
                    <LanguageSwitcher />
                </SizeConditionContainer>


                <ProfileIconWithDropdown
                    userProfileData={userProfileData}
                    dropdownContent={<ProfileDropdownWindow />}
                >
                    <CheckIsAuthUser
                        isTrue={
                            <Button className={styles.profile}>
                                <div>U</div>
                                <span>user</span>
                            </Button>
                        }
                        isFalse={
                            <SetCookierForRedirectAfterLogin>
                                <Button
                                    as="link"
                                    href="/auth/login"
                                    className={styles.profile}
                                >
                                    <FontIcon variant="avatar" />
                                    <span>Войти</span>
                                </Button>
                            </SetCookierForRedirectAfterLogin>
                        }
                    />

                </ProfileIconWithDropdown>

            </div>
            <HeaderPortalContainer />
        </div>
    );
};