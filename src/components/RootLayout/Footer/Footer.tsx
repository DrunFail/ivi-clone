import { useTranslations } from 'next-intl';
import ButtonSocialBlock from '../../UI/ButtonSocialBlock/ButtonSocialBlock';
import DownloadAppLink from '../../UI/DownloadAppLink/DownloadAppLink';
import DownloadAppLinkBlock from '../../UI/DownloadAppLinkBlock/DownloadAppLinkBlock';
import DropdownList from '../../UI/DropdownList/DropdownList';
import styles from './Footer.module.scss';
import SupportBlock from './SupportBlock/SupportBlock';
import WatchMoviesLink from './WatchMoviesLink/WatchMoviesLink';
import { FOOTER_NAV_MENU } from './constants/footerConstants';
import NavigationBlockTitle from './NavigationBlockTitle/NavigationBlockTitle';

export default function Footer() {
    const t = useTranslations();
    return (
        <footer data-testid="main-footer">
            <div className={styles.top}>
                {FOOTER_NAV_MENU.map((elem, idx) => (
                    <div key={idx}>
                        <NavigationBlockTitle>{t(`footer.${elem.name}`)}</NavigationBlockTitle>
                        <DropdownList linkDataList={elem.data.menu} oneColumn intlPrefix="footer" testId={elem.name} />
                    </div>
                ))}
                <SupportBlock>
                    <NavigationBlockTitle>{t('Support')}</NavigationBlockTitle>
                </SupportBlock>
                <WatchMoviesLink />
            </div>
            <div className={styles.bottom}>
                <DownloadAppLinkBlock>
                    <DownloadAppLink variant="apple" />
                    <DownloadAppLink variant="google" />
                    <DownloadAppLink variant="apple" />
                    <DownloadAppLink variant="google" />
                </DownloadAppLinkBlock>
                <ButtonSocialBlock />
            </div>
        </footer>
    );
}
