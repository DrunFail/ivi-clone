import styles from './HamburgerMenuModal.module.scss';
import Button from '../../../UI/core/Button/Button';
import FontIcon from '../../../UI/FontIcon/FontIcon';
import DownloadAppLinkBlock from '../../../UI/DownloadAppLinkBlock/DownloadAppLinkBlock';
import ButtonSocialBlock from '../../../UI/ButtonSocialBlock/ButtonSocialBlock';
import { useTranslations } from 'next-intl';
import DownloadAppLink from '../../../UI/DownloadAppLink/DownloadAppLink';
import ButtonTopContainer from './ButtonTopContainer/ButtonTopContainer';
import NavMenuWithAccordion from './NavMenuWithAccordion/NavMenuWithAccordion';
import AboutBlockAccordion from './AboutBlockAccordion/AboutBlockAccordion';
import ServiceBlockAccordion from './ServiceBlockAccordion/ServiceBlockAccordion';
import NavigationBlockTitle from '../../Footer/NavigationBlockTitle/NavigationBlockTitle';
import { NavbarLink } from '../../../../models/global';

export default function HamburgerMenuModal({ navMenu }: { navMenu: NavbarLink[] }) {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <ButtonTopContainer>
                <Button>
                    <FontIcon variant="diamond" size={20} />
                    <span>{t('ConnectSubscription')}</span>
                </Button>

                <Button>
                    <FontIcon variant="reward" size={20} />
                    <span>{t('CertificateActivation')}</span>
                </Button>
            </ButtonTopContainer>
            <NavMenuWithAccordion navMenu={navMenu} />
            <div style={{ display: 'grid', rowGap: '30px' }}>
                <AboutBlockAccordion />
                <NavigationBlockTitle>
                    <p>enter by code</p>
                </NavigationBlockTitle>
                <DownloadAppLinkBlock>
                    <DownloadAppLink variant="apple" />
                    <DownloadAppLink variant="google" />
                </DownloadAppLinkBlock>
            </div>
            <ServiceBlockAccordion />
            <ButtonSocialBlock />
        </div>
    );
}
