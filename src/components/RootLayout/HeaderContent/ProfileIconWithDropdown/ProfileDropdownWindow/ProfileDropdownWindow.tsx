import ProfileDropdownCard from "../ProfileDropdownCard/ProfileDropdownCard";
import styles from "./ProfileDropdownWindow.module.scss";
import { PROFILE_IMG_LINK_DATA } from "../imgLinkData";
import MemoizedFormattedMessage from "react-intl/src/components/message";
import useAuth from "../../../../../hooks/auth/useAuth";
import useLogout from "../../../../../hooks/auth/useLogout";
import Button from "../../../../UI/core/Button/Button";

export default function ProfileDropdownWindow() {
    const auth = useAuth().auth;
    const handleLogout = useLogout();
    return (
        <div className={styles.container}>
            <div className={styles.cardBlock}>
                {PROFILE_IMG_LINK_DATA.map(card =>
                    <ProfileDropdownCard
                        key={card.id}
                        variant={card.imgLink}
                        idTranslate={card.idTranslate} />
                )}

            </div>
            <div className={styles.authButton}>
                {auth.token
                    ? <Button
                        as="button"
                        color="red"
                        onClick={handleLogout}
                    >
                        Выйти
                    </Button>

                    : <Button
                        as="link"
                        color="red"
                        href="/auth/login"
                        data-testId="btn-login"
                    >
                        <MemoizedFormattedMessage id="EnterOrRegister" />
                    </Button>
                }
            </div>
        </div>
    );
};
