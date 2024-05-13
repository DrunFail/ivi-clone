import ProfileDropdownCard from "../ProfileDropdownCard/ProfileDropdownCard";
import styles from "./ProfileDropdownWindow.module.scss";
import { PROFILE_IMG_LINK_DATA } from "../imgLinkData";
import Button from "../../../../UI/core/Button/Button";
import { useTranslations } from "next-intl";
import CheckIsAuthUser from "../../../CheckIsAuthUser/CheckIsAuthUser";
import ClickLogoutHandler from "../../../ClickLogoutHandler/ClickLogoutHandler";

export default function ProfileDropdownWindow() {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <div className={styles.cardBlock}>
                {PROFILE_IMG_LINK_DATA.map(card =>
                    <ProfileDropdownCard
                        key={card.id}
                        variant={card.imgLink}
                    >
                        {t(card.idTranslate)}
                    </ProfileDropdownCard>
                )}

            </div>
            <div className={styles.authButton}>
                <CheckIsAuthUser
                    isTrue={
                        <ClickLogoutHandler>
                            <Button
                                as="button"
                                color="red"
                            >
                                Выйти
                            </Button>
                        </ClickLogoutHandler>
                    }
                    isFalse={
                        <Button
                            as="link"
                            color="red"
                            href="/auth/login"
                            data-testId="btn-login"
                        >
                            {t("EnterOrRegister")}
                        </Button>
                    }
                />
            </div>
        </div>
    );
};
