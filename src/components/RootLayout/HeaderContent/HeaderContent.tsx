import styles from './HeaderContent.module.scss';
import HeaderPortalContainer from './portal/HeaderPortalContainer';
import { NavbarLink } from '../../../models/global';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import ProfileIconWithDropdown from './ProfileIconWithDropdown/ProfileIconWithDropdown';
import dynamic from 'next/dynamic';
import ButtonSubscription from './ButtonSubscription/ButtonSubscription';
import SearchButtonDesktop from './SearchButtonDesktop/SearchButtonDesktop';
import ButtonWithCurrentLocale from '../../UI/LanguageSwitcher/ButtonWithCurrentLocale/ButtonWithCurrentLocale';
import Navbar from './NavbarWithDropdown/Navbar/Navbar';

const LanguageSwitcher = dynamic(() => import('../../UI/LanguageSwitcher/LanguageSwitcher'));
const SearchButtonWithModal = dynamic(() => import('./SearchButtonWithModal/SearchButtonWithModal'));
const SearchModal = dynamic(() => import('../../SearchModal/SearchModal'));

const NavbarWithDropdown = dynamic(() => import('./NavbarWithDropdown/NavbarWithDropdown'));

const ProfileDropdownWindow = dynamic(
    () => import('./ProfileIconWithDropdown/ProfileDropdownWindow/ProfileDropdownWindow'),
);

export default function HeaderContent({ navList }: { navList: NavbarLink[] }) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <HeaderLogo />
                <div className={styles.navbar}>
                    <NavbarWithDropdown navLinkData={navList}>
                        <Navbar navLinkData={navList} />
                    </NavbarWithDropdown>
                </div>
                <div className={styles.subscription}>
                    <ButtonSubscription />
                </div>

                <div className={styles.search}>
                    <SearchButtonWithModal button={<SearchButtonDesktop />} modal={<SearchModal />} />
                </div>
                <div className={styles.locale}>
                    <LanguageSwitcher button={<ButtonWithCurrentLocale />} />
                </div>

                <ProfileIconWithDropdown dropdownContent={<ProfileDropdownWindow />}>
                    {/*<CheckIsAuthUser*/}
                    {/*    isTrue={*/}
                    {/*        <Button className={styles.profile}>*/}
                    {/*            <div>U</div>*/}
                    {/*            <span>user</span>*/}
                    {/*        </Button>*/}
                    {/*    }*/}
                    {/*    isFalse={*/}
                    {/*        <SetCookierForRedirectAfterLogin>*/}
                    {/*            <Button*/}
                    {/*                as="link"*/}
                    {/*                href="/auth/login"*/}
                    {/*                className={styles.profile}*/}
                    {/*            >*/}
                    {/*                <FontIcon variant="avatar" />*/}
                    {/*                <span>Войти</span>*/}
                    {/*            </Button>*/}
                    {/*        </SetCookierForRedirectAfterLogin>*/}
                    {/*    }*/}
                    {/*/>*/}
                </ProfileIconWithDropdown>
            </div>
            <HeaderPortalContainer />
        </div>
    );
}
