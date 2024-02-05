import useAuth from "../../../../auth/hooks/useAuth";
import LogoutButton from "../../../../UI/LogoutButton/LogoutButton";
import ProfileDropdownCard from "../ProfileDropdownCard/ProfileDropdownCard";
import styles from "./ProfileDropdownWindow.module.scss";
import { PROFILE_IMG_LINK_DATA } from "../imgLinkData";
import LoginButton from "../../../../UI/LoginButton/LoginButton";
import useLogout from "../../../../auth/hooks/useLogout";

export default function ProfileDropdownWindow() {
    const auth = useAuth()?.auth;
    const handleLogout  = useLogout();
    return (
        <div className={styles.container}>
            <div className={styles.cardBlock}>
                {PROFILE_IMG_LINK_DATA.map(card =>
                    <ProfileDropdownCard
                        key={card.id}
                        imgLink={card.imgLink}
                        imgDescription={card.imgDescription}
                        idTranslate={card.idTranslate} />
                )}
               
            </div>
            <div className={styles.authButton}>
                {auth?.token
                    ? <LogoutButton handleLogout={handleLogout} />
                    : <LoginButton />
                }
            </div>
        </div>
    );
};
